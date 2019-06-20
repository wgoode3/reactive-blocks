import React, { Component } from 'react';
import Advert from './Advert';

class Beta extends Component {
  render() {
    return (
      <div style={{
        backgroundColor: "#e06666", 
        height: "500px", 
        display: "inline-block", 
        width: "720px",
        verticalAlign: "top",
        paddingLeft: "20px"
      }}>
        <Advert />
        <Advert />
        <Advert />
      </div>
    )
  }
}

export default Beta;