import React from 'react';
import styles from './app.css';
import UserList from '../user-list';
import ChatContainer from '../chat-container';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      user: "None",
    };

    this.conversationStarted = this.conversationStarted.bind(this);
  }

  conversationStarted(user) {
    this.setState({user})
  }

  render() {
    return (
      <div className={styles.mainContainer}>
        <UserList conversationStarted={this.conversationStarted} />
        <ChatContainer user={this.state.user} />
      </div>
    );
  }
}

export default App;
