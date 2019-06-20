import React, { Component } from 'react';
import Header from './Components/Header';
import SideBar from './Components/SideBar';
import Main from './Components/Main';
import Alpha from './Components/Alpha';
import Beta from './Components/Beta';
import { BrowserRouter, Route } from 'react-router-dom'


class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <div style={{
          backgroundColor: "#ddd", 
          minHeight: "500px",
          width: "960px",
          padding: "20px",
          margin: "0 auto"
        }}>
          <Header />
          <SideBar />
          <Route exact path="/" component={Main} />
          <Route path="/alpha" component={Alpha} />                    
          <Route path="/beta" component={Beta} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;