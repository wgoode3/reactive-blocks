import React, { Component } from 'react';
import SubContents from './SubContents';
import Advert from './Advert';

class Main extends Component {
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
        <SubContents />
        <SubContents />
        <SubContents />
        <Advert />
      </div>
    )
  }
}

export default Main;