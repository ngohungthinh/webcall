import React from "react";
import { withRouter } from "react-router";
import Peer from 'peerjs';
import './ScreenMatch.scss';
import { NavLink } from "react-router-dom";
import ReportModal from "../Modal/ReportModal/ReportModal";
import InfoUserModal from "../Modal/InfoUserModal/InfoUserModal";
class ScreenMatch extends React.Component {
    constructor(props) {
        super(props);
        this.myVideo = React.createRef();
        this.remoteVideo = React.createRef();
    }

    state = {
        myPeer: {},
        stream: {},
        remotePeerId: "",
        connection: null,
        receivedMessages: [],
        messageToSent: "",
        popUpReport: false,
        popUpInfoUser: false,
    }

    componentDidMount() {

        const peer = new Peer();

        peer.on('open', (id) => {
            this.setState({
                myPeer: peer
            })
        });

        console.log(peer)
        //--------------Message
        peer.on('connection', (conn) => {
            this.setState({ connection: conn });
            conn.on('data', (data) => {
                console.log('Received:', data);
                this.setState((prevState) => ({
                    receivedMessages: [...prevState.receivedMessages, { message: data, isSender: false }],
                }));
            });
        });

        //--------------Call Video
        navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
            this.setState({
                stream: stream
            })
            this.myVideo.current.srcObject = stream;
        })

        peer.on('call', (call) => {
            call.answer(this.state.stream)
            call.on('stream', remoteStream => {
                this.remoteVideo.current.srcObject = remoteStream
            });
            call.on('close', () => {
                this.remoteVideo.current.srcObject = undefined
            })
        })
    }

    callRemote = (remotePeerId) => {
        let { myPeer, stream } = this.state;
        //------------
        const call = myPeer.call(remotePeerId, stream)

        call.on('stream', remoteStream => {
            this.remoteVideo.current.srcObject = remoteStream
        })
        call.on('close', () => {
            this.remoteVideo.current.srcObject = undefined
        })

        //------Send Message
        let conn = myPeer.connect(remotePeerId)
        conn.on('open', () => {
            this.setState({
                connection: conn
            })

            conn.on('data', (data) => {
                console.log('Received:', data);
                this.setState((prevState) => ({
                    receivedMessages: [...prevState.receivedMessages, { message: data, isSender: false }],
                }));
            });
        });

    }

    setRemotePeerIdValue = (e) => {
        this.setState({
            remotePeerId: e.target.value
        })
    }

    handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            let { connection, messageToSent } = this.state;
            connection.send(messageToSent);
            this.setState(prevState => ({
                receivedMessages: [...prevState.receivedMessages, { message: messageToSent, isSender: true }],
                messageToSent: ""
            }))
        }
    };

    handOnChangeMessageBox = (e) => {
        this.setState({
            messageToSent: e.target.value
        })
    }

    changePopUpReport = () => {
        this.setState({
            popUpReport: !this.state.popUpReport
        })
    }

    changePopUpInfoUser = () => {
        this.setState({
            popUpInfoUser: !this.state.popUpInfoUser
        })
    }
    render() {
        const { receivedMessages } = this.state;
        return (
            < >
                <div className="content-container">
                    <div className="screen-container">
                        <div className="screen">
                            <div className="my-screen">
                                <video ref={this.myVideo} autoPlay playsInline style={{ width: "100%" }} />
                            </div>
                            <div className="another-screen">
                                <video ref={this.remoteVideo} autoPlay playsInline />
                            </div>
                        </div>
                        <div className="button">
                            <NavLink className="stop-btn" to='/' exact>Stop</NavLink>
                            <button className="next-btn">Next</button>
                        </div>
                    </div>
                    <div className="chat">
                        <div className="avt-report">
                            <div className="avt-name" onClick={this.changePopUpInfoUser}>
                                <img src={require("../../assets/images/avt.jpeg")} alt="" /> Trung Nguyen
                            </div>
                            <i className="fa-solid fa-flag" onClick={this.changePopUpReport}></i>
                        </div>

                        <div className="message">
                            {receivedMessages.map(({ message, isSender }, index) => (
                                <div
                                    key={index}
                                    className={isSender ? 'send-mess' : 'receive-mess'}
                                >
                                    <p className="userName">Trung</p>
                                    <span className="mess">{message} </span>
                                </div>
                            ))}
                        </div>

                        <div className="enter-message">
                            <input type="text" placeholder="Enter message"
                                value={this.state.messageToSent}
                                onChange={this.handOnChangeMessageBox}
                                onKeyPress={this.handleKeyPress}
                            />
                        </div>
                    </div>
                </div>

                <header>
                    <div>
                        <h1 style={{ color: "black" }}>Current user id is {this.state.myPeer.id}</h1>
                        <input type="text" value={this.state.remotePeerId} onChange={this.setRemotePeerIdValue} />
                        <button onClick={() => this.callRemote(this.state.remotePeerId)}>Call</button>
                    </div>
                </header>
                <ReportModal popUpReport={this.state.popUpReport} changePopUpReport={this.changePopUpReport} />
                <InfoUserModal popUpInfoUser={this.state.popUpInfoUser} changePopUpInfoUser={this.changePopUpInfoUser} />
            </>
        )
    }
}

export default withRouter(ScreenMatch);