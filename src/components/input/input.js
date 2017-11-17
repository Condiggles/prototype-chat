import React from 'react';
import styles from './input.css';

class User extends React.Component {
  constructor(props){
    super(props);
    this.state = {value: ''};

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    this.props.handleMessage(this.state.value);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <div className={styles.inputArea}>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        <button onClick={this.handleSubmit}> Send </button>
      </div>
    );
  }
}

export default User;
