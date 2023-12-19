import React from "react";
import './MainPage.scss'
class MainPage extends React.Component {
    render() {
        return (
            <>
                <div class="app">
                    <div class="container">

                        <div class="left">
                            <h1>Connection is One Chat Away</h1>
                            <div>
                                <button class="btn btn-Filter">Filter</button>
                            </div>
                            <div>
                                <button class="btn btn-Start">
                                    <i id="i-vid" class="fa-solid fa-video"></i>
                                    Start Video Chat
                                </button>
                            </div>
                        </div>

                        <div class="right"></div>

                    </div>

                    <footer class="footer">
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

export default MainPage