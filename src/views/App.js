import React from 'react';
import './App.scss';
import Nav from './Nav/Nav'
import MainPage from './MainPage/MainPage';
import ScreenMatch from './Screen/ScreenMatch';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends React.Component {
  state = {
    isLogin: false,
    myInfo: ""
  }

  render() {
    return (
      <>
        <Nav isLogin={this.state.isLogin} />
        {/* <MainPage></MainPage> */}

        <ScreenMatch />
      </>
    )
  }

}

export default App;
