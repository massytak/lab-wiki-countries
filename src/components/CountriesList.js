import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class CountriesList extends Component {
    state={
        countrie:null
    }
  sendData = (newcountry) => {
      this.setState({
          countrie:newcountry
      })
    this.props.parentCallback(newcountry)
  };

  render() {
    const divStyle = {
      maxHeight: '90vh',
      overflow: 'scroll',
    };
    return (
      <div className="col-5" style={divStyle}>
        <div className="list-group">
          {
            // console.log(this.props.countries[0].name.common)
            this.props.countries.map((countrie) => (
              <Link
                onClick={()=>this.sendData(countrie)}
                className="list-group-item list-group-item-action"
                to={{
                  pathname: `/details/${countrie.cca3}`,
                }}
              >
                {countrie.flag} {countrie.name.common}
              </Link>
            ))
          }
        </div>
      </div>
    );
  }
}

export default CountriesList;
