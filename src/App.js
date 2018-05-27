import React, { Component } from 'react';

import './App.css';
import $ from 'jquery';
import Searchbar from './Components/Searchbar';
import Users from './Components/Users';
import NextPrev from './Components/NextPrev';
class App extends Component {

 

  constructor(){
    super();
    
    this.state={
      users:[]
    }
  }

  prevNextHandler(bid){
    var userRecords=document.getElementsByClassName("user-record");
    for(var i=0;i<userRecords.length;i++){
      if(userRecords[i].classList.contains("active")){
        if(bid==="previousBtn"){

          if(i===0)
          break;
          
      userRecords[i-1].className+=' active';
      }
      else{

        if(i===(userRecords.length-1))
        break;

    userRecords[i+1].className+=' active';
    }
  userRecords[i].className =  userRecords[i].className.replace(" active", "");
   break;
      }
    }
  }

  autoComplete=(event)=>{
   let inpt= event.target.value;

    $.ajax({
      url:'https://api.github.com/search/users?q='+inpt,
      dataType:'json',
      cache:false,
      success:function(data){
       

        this.setState({users:data.items},function(){
         
        });
      }.bind(this),
      error:function(xhr,status,err){
        console.log(err);
      }
    })

  }

  searchHandler(name){
    var userInput=document.getElementById("searchField").value;

    var checkForWhiteSpace=userInput.replace(/ /g,'');
    
    if(checkForWhiteSpace.length==0){
        return false;
    }
    else{
        var userRecords=document.getElementsByClassName("user-record");
        var activeDiv=document.getElementsByClassName("active");
         activeDiv[0].className=activeDiv[0].className.replace(" active", "");
         

        for(var i=0;i<userRecords.length;i++){
         var user_name=userRecords[i].getElementsByTagName('span')[0].innerHTML;

         user_name=user_name.replace(/ /g,'').toUpperCase();
         var strg=checkForWhiteSpace.toUpperCase();
         if(user_name.startsWith(strg)){

            
          userRecords[i].className+=" active";
          break;
       }

      }
  }
   
         

  }
  render() {
    return (
      <div className="App">

      <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-6 content">
                     <div className="well">
                         <div className="row">
                             <div className="col-sm-12 title">
                              <h1>Find User's Record</h1>
                            </div>
                        </div>
       <Searchbar searchKey={this.searchHandler.bind(this)} onAutocomplete={this.autoComplete} />
       <Users users={this.state.users}/>
       <NextPrev users={this.state.users} prevNextt={this.prevNextHandler.bind(this)}/>
       </div>
       </div>
       </div>
       </div>
      </div>
    );
  }
}

export default App;
