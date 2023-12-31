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
import InfoUserMainModal from './Modal/InfoUserMainModal/InfoUserMainModal';
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
    myInfo: {},
    popUpLogin: false,
    popUpRegister: false,

    infoFilter: {
      birthday: 'all',
      gender: 'all',
      job: 'all',
      location: 'all',
      hoppy: 'all'
    },
  }

  changeMyInfo = (name, value) => {
    this.setState({
      myInfo: { ...this.state.myInfo, [name]: value }
    })
  }
  changeInfoFilter = (name, value) => {
    this.setState({
      infoFilter: { ...this.state.infoFilter, [name]: value }
    })
  }
  updateInfo = (data) => {
    this.setState({
      myInfo: data
    })
  }

  changeIsLoginState = () => {
    this.setState({
      isLogin: !this.state.isLogin
    })
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
          <Nav isLogin={this.state.isLogin} changePopUpLogin={this.changePopUpLogin} myInfo={this.state.myInfo} />
          <Switch>
            <Route path="/" exact>
              <MainPage isLogin={this.state.isLogin} changePopUpLogin={this.changePopUpLogin} changeInfoFilter={this.changeInfoFilter} infoFilter={this.state.infoFilter} />
            </Route>
            <Route path="/match" exact>
              {this.state.isLogin ? <ScreenMatch myInfo={this.state.myInfo} infoFilter={this.state.infoFilter} changeMyInfo={this.changeMyInfo} /> : <Redirect to="/" />}
            </Route>
            <Route path="/:id">
              <MainPage isLogin={this.state.isLogin} changePopUpLogin={this.changePopUpLogin} changeInfoFilter={this.changeInfoFilter} infoFilter={this.state.infoFilter} />
            </Route>
          </Switch>
        </Router>

        <RegisterModal popUpRegister={this.state.popUpRegister} changePopUpRegister={this.changePopUpRegister} />
        <LoginModal popUpLogin={this.state.popUpLogin} changePopUpLogin={this.changePopUpLogin} changePopUpRegister={this.changePopUpRegister} changeIsLoginState={this.changeIsLoginState} updateInfo={this.updateInfo} />
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
