import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import ConversationPresenter from './ConversationPresenter';

const conversationsQuery = gql`
  query conversationsQuery {
    me {
      id
    }
    conversation(id: "1") {
      id
      topic
      messages {
        id
        text
        sendTime
        sender {
          id
          username
        }
      }
    }
  }
`;

const ConversationContainer = () => {
  const { data, loading, error } = useQuery(conversationsQuery);

  console.log('asdf data', data);
  console.log('asdf load', loading);
  console.log('asdf erro', error);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error...</p>;
  }

  return (
    <ConversationPresenter
      id={data.conversation.id}
      currentUser={data.me}
      topic={data.conversation.topic}
      participants={data.conversation.participants}
      messages={data.conversation.messages}
    />
  );
};

export default ConversationContainer;
