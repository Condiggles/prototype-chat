import React from 'react';
import styles from './user.css';

class User extends React.Component {
  constructor(props){
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    let name = this.props.name;
    this.props.userClicked(name);
  }
  render() {
    return <div onClick={this.handleClick} className={styles.user}> {this.props.name} </div>;
  }
}

export default User;
