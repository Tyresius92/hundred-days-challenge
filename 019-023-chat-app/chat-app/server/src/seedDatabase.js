import services from './services';

const { userService, conversationService, messageService } = services;

const { createUser } = userService;
const { createConversation } = conversationService;
const { createMessage } = messageService;

const seedDatabase = async () => {
  console.log('seeding database');

  try {
    const user1 = await createUser(
      'tyresius',
      'tyresius@gmail.com',
      'ButtsMcGee'
    );
    const user2 = await createUser(
      'tyresius1',
      'tyresius1@gmail.com',
      'ButtsMcGee'
    );
    const user3 = await createUser(
      'tyresius2',
      'tyresius2@gmail.com',
      'ButtsMcGee'
    );
    const user4 = await createUser('tyrel', 'tyrel@gmail.com', 'ButtsMcGee');

    console.log(user1, user2, user3, user4);

    const conversation1 = await createConversation('My First Topic', [
      user2.id,
      user3.id,
    ]);
    const conversation2 = await createConversation('My Bass Guitar', [
      user2.id,
      user1.id,
    ]);
    const conversation3 = await createConversation('I want a pony', [
      user1.id,
      user2.id,
      user3.id,
    ]);
    const conversation4 = await createConversation('Good times to be had', [
      user1.id,
      user4.id,
    ]);

    const conv1 = conversation1.conversation;
    const conv2 = conversation2.conversation;
    const conv3 = conversation3.conversation;
    const conv4 = conversation4.conversation;

    const msg1 = await createMessage(
      user3.id,
      conv3.id,
      "Mommy, Daddy. I've called you here today because we have something important to discuss."
    );
    const msg2 = await createMessage(user1.id, conv3.id, '...');
    const msg3 = await createMessage(user3.id, conv1.id, "I've got a topic");
    const msg4 = await createMessage(
      user2.id,
      conv2.id,
      "Hey man, I'm selling my bass guitar"
    );
    const msg5 = await createMessage(user4.id, conv4.id, "I'm having a party");
    const msg6 = await createMessage(user2.id, conv3.id, '...');
    const msg7 = await createMessage(
      user3.id,
      conv3.id,
      'As you know, I have done all of my chores for the past three days'
    );
    const msg8 = await createMessage(
      user1.id,
      conv2.id,
      'Oh wow, you love that thing'
    );
    const msg9 = await createMessage(user3.id, conv1.id, "You've got a topic");
    const msg10 = await createMessage(
      user2.id,
      conv2.id,
      'Yeah but I love Sally more'
    );
    const msg11 = await createMessage(
      user3.id,
      conv3.id,
      'As such, I believe it is time that I get what I deserve'
    );
    const msg12 = await createMessage(
      user3.id,
      conv3.id,
      'I have proven that I can handle the responsibility of a pony'
    );
    const msg13 = await createMessage(
      user4.id,
      conv4.id,
      'Because my parents are out of town'
    );
    const msg14 = await createMessage(
      user2.id,
      conv2.id,
      'Do you want to buy it?'
    );
    const msg15 = await createMessage(user3.id, conv3.id, 'And now I want one');
    const msg16 = await createMessage(
      user3.id,
      conv1.id,
      "We've ALL got a topic"
    );
    const msg17 = await createMessage(
      user1.id,
      conv2.id,
      "No thanks, I'm super broke..."
    );
    const msg18 = await createMessage(
      user2.id,
      conv1.id,
      "That banister's got a topic..."
    );
    const msg19 = await createMessage(
      user1.id,
      conv4.id,
      "It's going to be a rager, yeah?"
    );
    const msg20 = await createMessage(user2.id, conv3.id, 'No');
    const msg21 = await createMessage(
      user1.id,
      conv3.id,
      'Yeah I have to agree with your father. No.'
    );
    const msg22 = await createMessage(
      user4.id,
      conv4.id,
      "Totes, it's gonna be the raddest thing in the history of things"
    );
    console.log('seeding database complete');
  } catch (err) {
    console.log('seeding database failed');
    console.log(err);
  }
};

export default seedDatabase;
