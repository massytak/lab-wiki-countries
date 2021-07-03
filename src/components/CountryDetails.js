import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CountryDetails extends Component {
  render() {
    const divStyle = {
      width: '30%',
    };
    return (
      <div className="col-7">
        <h1>{this.props.dataFromParent.name.common}</h1>
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td style={divStyle}>Capital</td>
              {this.props.dataFromParent.capital.map((el) => (
                <td>{el}</td>
              ))}
            </tr>
            <tr>
              <td>Area</td>
              <td>
                {this.props.dataFromParent.area} km
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                  
                    {this.props.dataFromParent.borders.map((el) => (
                    <li><Link to={{
                        pathname: `/details/${el}`,
                      }}>{el}</Link></li> 
                    ))}
                  
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default CountryDetails;
