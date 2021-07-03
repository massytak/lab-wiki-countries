import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import React, { Component } from 'react';
import { Switch , Route } from 'react-router';

import countries from './countries.json';

class App extends Component {
  state={
    oppned: false,
    country: countries[0]
  }
  callbackFunction =(data)=>{
    console.log(data);
    this.setState({country: data})
}
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <div className="row">
            <CountriesList countries={countries} parentCallback = {this.callbackFunction}/>

            <CountryDetails dataFromParent ={this.state.country}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
