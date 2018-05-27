import React, { Component } from 'react';
import './style.css';
class NextPrev extends Component {

  prevNext(e){
   let bid=e.target.id;
    this.props.prevNextt(bid);
  }
  
  render() {
    if(this.props.users.length>1){

    return (
        <div className="NextPrev">
        <div className="row">
        <div className="col-sm-12 text-center">
        <button type="button" className="btn btn-primary" id="previousBtn" onClick={this.prevNext.bind(this)} >  Prev </button> 
        <button type="button" className="btn btn-primary" id="nextBtn" onClick={this.prevNext.bind(this)} >Next  </button>
        </div>
        </div>
        
        </div>
    );
  }
  else{
    return(<div></div>)
  }
  }
}

export default NextPrev;
