import React, { Component } from 'react';

class Logout extends Component {
  render() {
    return(
        <div>
            <button onClick={this.props.logout}>Log out</button>
          
        </div>
      )
  }
}

export default Logout;