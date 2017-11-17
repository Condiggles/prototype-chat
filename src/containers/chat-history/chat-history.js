import React from 'react';
import styles from './chat-history.css';
import Message from '../../components/message';

class ChatHistory extends React.Component {
  constructor(props){
    super(props);

  }

  render() {
    //TODO This does nothing because the 'history' is reset each render. Fix!
    let history = [];
    history.push(this.props.history);
    const messages = history;
    const listMessages = messages.map((message) =>
      <li key={message.toString()}>
        {message}
      </li>
    );
    return (
      <div className={styles.chatContainer}> {this.props.user}
        <Message message={listMessages} />
      </div>
    );
  }
}

export default ChatHistory;
