import React from "react";
import { withRouter } from "react-router";
import Peer from 'peerjs';
import './ScreenMatch.scss';
import { NavLink } from "react-router-dom";
import ReportModal from "../Modal/ReportModal/ReportModal";
import InfoUserModal from "../Modal/InfoUserModal/InfoUserModal";
import { handleMatchUser, handleCheckMatch } from "../../service/userService";
class ScreenMatch extends React.Component {
    constructor(props) {
        super(props);
        this.myVideo = React.createRef();
        this.remoteVideo = React.createRef();
    }

    state = {
        myPeer: {},
        stream: {},
        remoteUser: {},
        remotePeerId: "",
        connection: undefined,
        callMediaConnection: undefined,
        receivedMessages: [],
        messageToSent: "",
        popUpReport: false,
        popUpInfoUser: false,
        checkMatchInterval: ""
    }

    componentWillUnmount() {
        clearInterval(this.state.checkMatchInterval);
        if (this.state.callMediaConnection)
            this.state.callMediaConnection.close()
        if (this.state.connection)
            this.state.connection.close()
        this.remoteVideo.current.srcObject = undefined
        this.setState({
            remoteUser: {},
            remotePeerId: "",
            connection: undefined,
            callMediaConnection: undefined,
            receivedMessages: [],
            messageToSent: "",

        })

    }
    async componentDidMount() {
        var peer = new Peer({
            config: {
                'iceServers': [
                    {
                        urls: "turn:a.relay.metered.ca:80?transport=tcp",
                        username: "2d586806ce509d45fe8bac13",
                        credential: "C0/BgLD5CGDoDQhy",
                    },
                ]
            }
        });

        peer.on('open', (id) => {
            this.setState({
                myPeer: peer
            })

            this.props.changeMyInfo("idWebRTC", id)

            ///---------------
            this.seekMatchUser()

            this.state.checkMatchInterval = setInterval(async () => {
                console.log("interval")
                let data = await this.checkMatch()
                console.log("data", data)
                if (data !== "") {
                    await this.setState({
                        remotePeerId: data
                    }
                    )
                    this.callRemote(this.state.remotePeerId)
                    clearInterval(this.state.checkMatchInterval);
                }
                if (this.state.connection)
                    clearInterval(this.state.checkMatchInterval);
            }, 2000)
            //----------------
        });


        console.log(peer)
        //--------------Message--------
        peer.on('connection', (conn) => {
            this.setState({ connection: conn });

            conn.on('open', () => {
                conn.send(this.props.myInfo);
            });

            conn.on('data', (data) => {
                console.log('Received:', data);

                if (typeof data === 'object') {
                    this.setState({
                        remoteUser: data
                    })
                }
                else {
                    this.setState((prevState) => ({
                        receivedMessages: [...prevState.receivedMessages, { message: data, isSender: false }],
                    }));
                }

            });

            conn.on('close', () => {
                this.setState({
                    connection: undefined,
                    remotePeerId: "",
                })
            })
        });

        //--------------Call Video
        navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
            this.setState({
                stream: stream
            })
            this.myVideo.current.srcObject = stream;
        })

        peer.on('call', (call) => {
            this.state.callMediaConnection = call;

            call.answer(this.state.stream)
            call.on('stream', remoteStream => {
                this.remoteVideo.current.srcObject = remoteStream
            });
            call.on('close', () => {
                this.state.callMediaConnection = undefined;
                this.remoteVideo.current.srcObject = undefined;
            })
        })
    }

    checkMatch = async () => {
        let data = await handleCheckMatch(this.props.myInfo.username)
        let dataUserRemote = data.data.data
        return dataUserRemote
    }

    seekMatchUser = async () => {
        let data = await handleMatchUser(this.props.myInfo, this.props.infoFilter)
        console.log(data.data)
    }

    callRemote = async (remotePeerId) => {
        let { myPeer, stream } = this.state;
        //------------
        const loggedErrors = new Set();
        myPeer.on('error', (err) => {
            console.log("Kieu loi", err.type)
            if (!loggedErrors.has(err.type)) {
                alert("Your Match User has left! Please connect again.", err.type);
                loggedErrors.add(err.type);

                setTimeout(() => {
                    loggedErrors.delete(err.type);
                }, 5000); // Remove the error type after 5 seconds (adjust as needed)
            }
        });
        //------------Call
        const call = await myPeer.call(remotePeerId, stream)

        this.state.callMediaConnection = call;

        call.on('stream', remoteStream => {
            this.remoteVideo.current.srcObject = remoteStream
        })
        call.on('close', () => {
            this.remoteVideo.current.srcObject = undefined;
            this.state.callMediaConnection = undefined;
        })

        //------Send Message
        let conn = myPeer.connect(remotePeerId)

        conn.on('open', () => {
            this.setState({
                connection: conn
            })

            conn.on('data', (data) => {
                console.log('Received: open', data);

                if (typeof data === 'object') {
                    this.setState({
                        remoteUser: data
                    })
                }
                else {
                    this.setState((prevState) => ({
                        receivedMessages: [...prevState.receivedMessages, { message: data, isSender: false }],
                    }));
                }

            });

            conn.send(this.props.myInfo)

            conn.on('close', () => {
                this.setState({
                    connection: undefined,
                    remotePeerId: "",
                })
            })
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
            if (connection) {
                connection.send(messageToSent);
                this.setState(prevState => ({
                    receivedMessages: [...prevState.receivedMessages, { message: messageToSent, isSender: true }],
                    messageToSent: ""
                }))
            }

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

    handleNextButton = async () => {
        if (this.state.callMediaConnection)
            this.state.callMediaConnection.close()
        if (this.state.connection)
            await this.state.connection.close()
        this.remoteVideo.current.srcObject = undefined
        this.setState({
            remoteUser: {},
            remotePeerId: "",
            connection: undefined,
            callMediaConnection: undefined,
            receivedMessages: [],
            messageToSent: "",

        })
        this.seekMatchUser();

        clearInterval(this.state.checkMatchInterval);
        this.state.checkMatchInterval = setInterval(async () => {
            console.log("interval in Next")
            let data = await this.checkMatch()
            console.log("data", data)
            if (data !== "") {
                await this.setState({
                    remotePeerId: data
                }
                )
                this.callRemote(this.state.remotePeerId)
                clearInterval(this.state.checkMatchInterval);
            }
            if (this.state.connection)
                clearInterval(this.state.checkMatchInterval);

        }, 2000)
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
                            <button className="next-btn" onClick={this.handleNextButton}>Next</button>
                        </div>

                    </div>
                    <div className="chat">
                        <div className="avt-report">
                            <div className="avt-name" onClick={this.changePopUpInfoUser}>
                                <img src={require("../../assets/images/user_icon.png")} alt="" /> {this.state.remoteUser.name ? this.state.remoteUser.name : ""}
                            </div>
                            <i className="fa-solid fa-flag" onClick={this.changePopUpReport}></i>
                        </div>

                        <div className="message">
                            {receivedMessages.map(({ message, isSender }, index) => (
                                <div
                                    key={index}
                                    className={isSender ? 'send-mess' : 'receive-mess'}
                                >
                                    <p className="userName">{isSender ? this.props.myInfo.name : this.state.remoteUser.name}</p>
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
                <InfoUserModal popUpInfoUser={this.state.popUpInfoUser} changePopUpInfoUser={this.changePopUpInfoUser} remoteUser={this.state.remoteUser} />
            </>
        )
    }
}

export default withRouter(ScreenMatch);