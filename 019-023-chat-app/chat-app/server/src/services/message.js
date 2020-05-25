import db from '../db';

const createMessage = async (senderId, conversationId, text) => {
  const response = await db.query(
    `INSERT INTO messages (sender_id, conversation_id, text, send_time)
    VALUES ($1, $2, $3, NOW())
    RETURNING id, text, sender_id, conversation_id`,
    [senderId, conversationId, text]
  );

  const newMessage = response.rows[0];

  return {
    message: {
      id: newMessage.id,
      text: newMessage.text,
      sender: {
        id: newMessage.sender_id,
      },
      conversation: {
        id: newMessage.conversation_id,
      },
    },
  };
};

const fetchMessages = async messageId => {
  const response = await db.query('SELECT * FROM messages');

  return response.rows;
};

const fetchMessageById = async messageId => {
  const response = await db.query('SELECT * FROM messages WHERE id = $1', [
    messageId,
  ]);

  return response.rows[0];
};

const fetchMessagesForUser = async userId => {
  const response = await db.query('SELECT * FROM messages WHERE user_id = $1', [
    userId,
  ]);

  return response.rows;
};

const fetchMessagesForConversation = async conversationId => {
  const response = await db.query(
    'SELECT * FROM messages WHERE conversation_id = $1',
    [conversationId]
  );

  return response.rows;
};

const fetchUserByMessageId = async messageId => {
  const response = await db.query(
    `SELECT 
      m.sender_id AS id, 
      u.username, 
      u.email 
    FROM users AS u
    INNER JOIN messages AS m ON u.id = m.sender_id 
    WHERE m.id = $1`,
    [messageId]
  );

  return response.rows[0];
};

const fetchConversationByMessageId = async messageId => {
  const response = await db.query(
    `SELECT 
      c.id, 
      c.topic 
    FROM conversations AS c
    INNER JOIN messages AS m ON c.id = m.conversation_id 
    WHERE m.id = $1`,
    [messageId]
  );

  return response.rows[0];
};

export default {
  createMessage,
  fetchMessages,
  fetchMessagesForConversation,
  fetchMessagesForUser,
  fetchUserByMessageId,
  fetchConversationByMessageId,
};
