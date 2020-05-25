export const mockMe = {
  id: '1',
  username: 'tyresius',
  messageIds: ['999', '996'],
};

export const mockModels = {
  UserModel: [
    mockMe,
    {
      id: '2',
      username: 'otherTyresius',
      messageIds: ['998', '997', '995'],
    },
  ],
  MessageModel: [
    { id: '999', text: 'hello world', userId: '1' },
    { id: '998', text: 'goodbye world', userId: '2' },
    { id: '997', text: 'butts are great', userId: '2' },
    { id: '996', text: 'willy widdershins is a name I know', userId: '1' },
    { id: '995', text: "swiggity swooty that's a fine booty", userId: '2' },
  ],
};

export const mockContext = {
  me: mockMe,
  models: mockModels,
};
