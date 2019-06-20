import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class SideBar extends Component {
  render() {
    return (
      <div style={{
        backgroundColor: "#6fa8dc", 
        height: "320px", 
        display: "inline-block", 
        width: "200px",
        verticalAlign: "top",
        marginRight: "20px"
      }}>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/alpha">Alpha</Link></li>
            <li><Link to="/beta">Beta</Link></li>
        </ul>
      </div>
    )
  }
}

export default SideBar;