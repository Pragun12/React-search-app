import React, { Component } from 'react';
import User from './User';
class Searchbar extends Component {

  
  render() {
    let usersInfos;
  
    if(this.props.users){
      let i=0
      usersInfos=this.props.users.map(user=>{
       
        return(
         
        <User uid={i++} key={user.login} user={user}/> 
        
        
      );

      });
     
    }
    return (
      
      <div>
       {usersInfos}
      </div>
    );
  }
}

export default Searchbar;
