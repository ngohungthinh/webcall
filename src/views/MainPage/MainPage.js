import React from "react";
import './MainPage.scss';
import { withRouter } from "react-router";
import FilterModal from "../Modal/FilterModal/FilterModal";

class MainPage extends React.Component {

    state = {
        popUpFilter: false
    }

    handleClickStart = () => {

        if (this.props.isLogin == true)
            this.props.history.push("/match")
        else
            this.props.changePopUpLogin()

    }

    changePopUpFilter = () => {
        this.setState({
            popUpFilter: !this.state.popUpFilter
        })
    }

    render() {
        return (
            <>
                <FilterModal popUpFilter={this.state.popUpFilter} changePopUpFilter={this.changePopUpFilter} />
                <div className="app_home_page">
                    <div className="container">

                        <div className="left">
                            <h1>Connection is One Chat Away</h1>
                            <div>
                                <button className="btn btn-Filter" onClick={this.changePopUpFilter}>Filter Match</button>
                            </div>
                            <div>
                                <button className="btn btn-Start" onClick={this.handleClickStart}>
                                    <i id="i-vid" className="fa-solid fa-video"></i>
                                    Start Video Chat
                                </button>
                            </div>
                        </div>

                        <div className="right"></div>

                    </div>

                    <footer className="footer">
                        <h2>HYPERCONNECT</h2>
                        <p>CEO : Kim Linda Su Ah | email : help@azarlive.com | Address : 517, Yeongdong-daero, Gangnam-gu, Seoul |
                            Business Number : 220-88-75836 |</p>
                        <p>Mail-order-sales approval number : 2019-SeoulGangnam-2516</p>
                        <p>© 2023 Hyperconnect LLC. All rights reserved.</p>
                    </footer>
                </div>
            </>
        )
    }
}

export default withRouter(MainPage)