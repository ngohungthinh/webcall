import React from 'react';
import './App.scss';
import Nav from './Nav/Nav'
import MainPage from './MainPage/MainPage';
import ScreenMatch from './Screen/ScreenMatch';
import LoginModal from './Modal/LoginModal/LoginModal';
import RegisterModal from './Modal/RegisterModal/RegisterModal';
import ReportModal from './Modal/ReportModal/ReportModal';
import InfoUserModal from './Modal/InfoUserModal/InfoUserModal';
import FilterModal from './Modal/FilterModal/FilterModal';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom";

class App extends React.Component {
  state = {
    isLogin: false,
    myInfo: "",
    popUpLogin: false,
    popUpRegister: false,
  }

  changePopUpLogin = () => {
    this.setState({
      popUpLogin: !this.state.popUpLogin
    })
  }

  changePopUpRegister = () => {
    this.setState({
      popUpRegister: !this.state.popUpRegister
    })
  }

  render() {
    return (
      <>
        <Router>
          <Nav isLogin={this.state.isLogin} changePopUpLogin={this.changePopUpLogin} />
          <Switch>
            <Route path="/" exact>
              <MainPage isLogin={this.state.isLogin} changePopUpLogin={this.changePopUpLogin} />
            </Route>
            <Route path="/match" >
              {this.state.isLogin ? <ScreenMatch /> : <Redirect to="/" />}
            </Route>
          </Switch>
        </Router>

        <RegisterModal popUpRegister={this.state.popUpRegister} changePopUpRegister={this.changePopUpRegister} />
        <LoginModal popUpLogin={this.state.popUpLogin} changePopUpLogin={this.changePopUpLogin} changePopUpRegister={this.changePopUpRegister} />
        {/* <RegisterModal></RegisterModal> */}
        {/* <ReportModal /> */}
        {/* <InfoUserModal></InfoUserModal> */}
        {/* <FilterModal></FilterModal> */}
        {/* <RegisterModal></RegisterModal> */}
      </>


    )
  }

}

export default App;
