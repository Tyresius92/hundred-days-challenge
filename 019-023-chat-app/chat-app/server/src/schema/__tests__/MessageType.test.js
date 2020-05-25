import { MessageResolvers } from '../MessageType';
import { mockContext, mockModels } from '../__mocks__/schemaMocks';

describe('MessageResolvers', () => {
  const { Query, Mutation, Message } = MessageResolvers;

  describe('Root Query Resolvers', () => {
    const { message, messages } = Query;

    describe('message resolver', () => {
      it('returns a message with the correct ID', () => {
        expect(message(null, { id: '999' }, { models: mockModels })).toEqual(
          mockModels.MessageModel[0]
        );
      });
    });
    describe('messages resolver', () => {
      it('returns all of the messages', () => {
        expect(messages(null, null, { models: mockModels })).toEqual(
          mockModels.MessageModel
        );
      });
    });
  });

  describe('Root Mutation Resolvers', () => {
    const { createMessage, deleteMessage } = Mutation;

    describe('createMessage', () => {
      it('creates and returns a message', () => {
        const originalMessages = [...mockContext.models.MessageModel];

        const result = createMessage(
          null,
          { text: 'my new message is awesome' },
          mockContext
        );
        expect(result.id).toBeTruthy();
        expect(result.text).toEqual('my new message is awesome');
        expect(result.userId).toEqual('1');

        const newMessages = [...mockContext.models.MessageModel];

        expect(newMessages).toEqual([...originalMessages, result]);
      });
    });

    describe('deleteMessage', () => {
      it('returns true', () => {
        expect(deleteMessage(null, { id: '2' }, mockContext)).toBe(true);
      });
    });
  });

  describe('MessageType resolvers', () => {
    const { fromUser } = Message;

    describe('fromUser', () => {
      it("finds the user based on the message's userId", () => {
        const message = { id: '998', text: 'goodbye world', userId: '2' };

        expect(fromUser(message, null, { models: mockModels })).toEqual(
          mockModels.UserModel.find(user => user.id === message.userId)
        );
      });
    });
  });
});
