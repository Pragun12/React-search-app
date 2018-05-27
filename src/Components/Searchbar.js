import React, { Component } from 'react';

class Searchbar extends Component {

  
  
  search(e){
    e.preventDefault();
    
    this.props.searchKey(this.refs.searchName.value);
  }
  render() {
    return (
      <div className="row">
        <div className="col-sm-12 search-box">
        <form onClick={this.search.bind(this)}>
       <input type="text" ref="searchName" id="searchField" onKeyUp={this.props.onAutocomplete} placeholder="Search.."/>
       <button  className="search-btn"  ><i className="fa fa-search"></i></button>
       </form>
       </div>
      </div>
    );
  }
}

export default Searchbar;
