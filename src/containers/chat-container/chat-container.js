import React from 'react';
import styles from './chat-container.css';
import ChatHistory from '../chat-history';
import MessageArea from '../message-area';

class ChatContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      message: "",
    };

    this.displayMessage = this.displayMessage.bind(this);
  }

  displayMessage(message) {
    this.setState({message});
  }
  render() {
    return (
      <div className={styles.chatContainer}> ChatContainer
        <ChatHistory user={this.props.user} history={this.state.message}/>
        <MessageArea displayMessage={this.displayMessage} />
      </div>
    );
  }
}

export default ChatContainer;
