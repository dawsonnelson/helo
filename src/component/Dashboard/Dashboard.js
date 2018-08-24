import React, {Component} from 'react';


export default class Dashboard extends Component{
    constructor() {
        super();

        this.state = {
            searchBar: '',
        };


    }

    updateSearchBar(value) {
        this.setState({searchBar: value});
    }


    render() {
        return(
            <div>
            <div>Dashboard</div>


              <input placeholder='Search by Title' onChange={ ( e ) => this.updateSearchBar( e.target.value ) } value={ this.state.searchBar }  />
              <button imageUrl></button> 
            </div>
        )
    }
}