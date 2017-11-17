import React from 'react';
import styles from './message.css';

class Message extends React.Component {

  render() {
    return <div className={styles.message}> {this.props.message} </div>;
  }
}

export default Message;
