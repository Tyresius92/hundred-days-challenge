import db from '../db';

const addUserToConversation = async (conversationId, userId) =>
  db.query(
    'INSERT INTO users_conversations (conversation_id, user_id) \
      VALUES ($1, $2)',
    [parseInt(conversationId, 10), parseInt(userId, 10)]
  );

const createConversation = async (topic, userIds) => {
  const response = await db.query(
    'INSERT INTO conversations (topic, created_time) VALUES ($1, NOW()) \
    RETURNING id',
    [topic]
  );

  const newConversationId = response.rows[0].id;

  // TODO: (maybe) - This approach is not ideal,
  // since it makes many calls to the DB instead of one
  await Promise.all(
    userIds.map(async userId => {
      await addUserToConversation(newConversationId, userId);
    })
  );

  return {
    conversation: {
      id: newConversationId,
      users: userIds.map(id => id),
      messages: [],
    },
  };
};

const getConversations = async () => {
  const response = await db.query('SELECT * FROM conversations');

  return response.rows;
};

const getConversationById = async id => {
  const response = await db.query('SELECT * FROM conversations WHERE id = $1', [
    id,
  ]);

  const conversation = response.rows[0];

  return conversation;
};

const getUsersByConversationId = async id => {
  const response = await db.query(
    `SELECT 
      uc.user_id AS id, 
      u.username, 
      u.email 
    FROM users AS u
    INNER JOIN users_conversations AS uc ON u.id = uc.user_id 
    WHERE uc.conversation_id = $1`,
    [id]
  );

  return response.rows;
};

const getMessagesByConversationId = async conversationId => {
  const response = await db.query(
    `SELECT 
      m.id AS id, 
      m.text,
      m.sender_id,
      m.conversation_id,
      m.send_time
    FROM messages AS m
    WHERE m.conversation_id = $1`,
    [conversationId]
  );

  return response.rows.map(row => ({
    id: row.id,
    text: row.text,
    send_time: row.send_time,
    // sender: {
    //   id: row.sender_id,
    // },
    // conversation: {
    //   id: row.conversation_id,
    // },
  }));
};

export default {
  createConversation,
  getConversations,
  getConversationById,
  getUsersByConversationId,
  getMessagesByConversationId,
};
