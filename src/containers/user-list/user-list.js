import React from 'react';
import styles from './user-list.css';
import User from '../../components/user';


//Mock data
const USER_DATA =([
  [ 1, "Mark" ],
  [ 2, "Sarah"],
  [ 3, "John" ],
  [ 1, "Tom" ],
  [ 2, "Alice"],
  [ 3, "Marie" ],
  [ 1, "Tony" ],
  [ 2, "Zoe"],
  [ 3, "Conor" ],
  [ 1, "Euan" ],
  [ 2, "Fintan"],
  [ 3, "Peter" ],
  [ 1, "Jonny" ],
  [ 2, "Mick"],
  [ 3, "Ted" ],
  [ 1, "Filbert" ],
  [ 2, "Tina"],
  [ 3, "Hanna" ],
  [ 1, "Mark" ],
  [ 2, "Sarah"],
  [ 3, "John" ],
  [ 1, "Tom" ],
  [ 2, "Alice"],
  [ 3, "Marie" ],
  [ 1, "Tony" ],
  [ 2, "Zoe"],
  [ 3, "Conor" ],
  [ 1, "Euan" ],
  [ 2, "Fintan"],
  [ 3, "Peter" ],
  [ 1, "Jonny" ],
  [ 2, "Mick"],
  [ 3, "Ted" ],
  [ 1, "Filbert" ],
  [ 2, "Tina"],
  [ 3, "Hanna" ]
]);

class UserList extends React.Component {
constructor(props){
  super(props);
  this.state = {
    name: "None",
  };

  this.userClicked = this.userClicked.bind(this);
}

userClicked(name) {
  this.props.conversationStarted(name);
}

render() {

    const data = USER_DATA;
    const namesList = data.map((name, index) => {
      let userName = name[1]; //Hacky!
      return(
          <User key={index} userClicked={this.userClicked} name={userName} />
      )
    })
    return (
      <div className={styles.userList}>
        {namesList}
      </div>

    );
  }
}

export default UserList;
