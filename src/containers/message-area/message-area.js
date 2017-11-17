import React from 'react';
import styles from './message-area.css';
import Input from '../../components/input';

class MessageArea extends React.Component {
  constructor(props){
    super(props);

    this.handleMessage = this.handleMessage.bind(this);
  }

  handleMessage(message) {
    this.props.displayMessage(message);
  }

  render() {
    return (
      <div className={styles.chatContainer}> MessageArea
        <Input handleMessage={this.handleMessage} />
      </div>
    );
  }
}

export default MessageArea;
