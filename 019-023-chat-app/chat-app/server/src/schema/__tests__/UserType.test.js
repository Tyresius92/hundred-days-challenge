import { UserResolvers } from '../UserType';
import { mockMe, mockModels, mockContext } from '../__mocks__/schemaMocks';

describe('UserResolvers', () => {
  const { Query, User } = UserResolvers;

  describe('Root Query Resolvers', () => {
    const { me, user, users } = Query;

    describe('me resolver', () => {
      it('retuns null if me is null on the context', () => {
        expect(me(null, null, { me: null })).toEqual(null);
      });

      it('returns the me field from context', () => {
        expect(me(null, null, { me: mockMe })).toEqual(mockMe);
      });
    });

    describe('user resolver', () => {
      it.each`
        id     | expected
        ${'1'} | ${{ id: '1', username: 'tyresius', messageIds: ['999', '996'] }}
        ${'2'} | ${{ id: '2', username: 'otherTyresius', messageIds: ['998', '997', '995'] }}
        ${'7'} | ${undefined}
      `('returns $expected for id $id', ({ id, expected }) => {
        expect(user(null, { id }, { models: mockModels })).toEqual(expected);
      });
    });

    describe('users resolver', () => {
      it('returns the full mockUsers list', () => {
        expect(users(null, null, { models: mockModels })).toEqual([
          {
            id: '1',
            username: 'tyresius',
            messageIds: ['999', '996'],
          },
          {
            id: '2',
            username: 'otherTyresius',
            messageIds: ['998', '997', '995'],
          },
        ]);
      });
    });
  });

  describe('User Resolvers', () => {
    const { messages } = User;

    describe('messages resolver', () => {
      it('returns the list of all messages', () => {
        expect(
          messages(
            {
              id: '1',
              username: 'tyresius',
              messageIds: ['999', '996'],
            },
            null,
            mockContext
          )
        ).toEqual([
          { id: '999', text: 'hello world', userId: '1' },
          {
            id: '996',
            text: 'willy widdershins is a name I know',
            userId: '1',
          },
        ]);
      });
    });
  });
});
