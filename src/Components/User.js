import React, { Component } from 'react';
import './style.css';
class User extends Component {

  
  render() {
  
    return (
     
        <div className={"col-sm-4  user-record User"+(this.props.uid===0?' active':'')}>
        <a href={'https://github.com/'+this.props.user.login}>
        <img src={this.props.user.avatar_url} className="img-responsive" width="180"/>
       <span> {this.props.user.login} </span>
       </a>
        
        </div>
    );
  }
}

export default User;
