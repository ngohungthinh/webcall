import React from "react";
import { Alert, Modal, ModalBody } from 'reactstrap';
import './LoginModal.scss'
import { handleLoginApi } from "../../../service/userService";
class LoginModal extends React.Component {
    state = {
        username: "",
        password: ""
    }
    toggle = () => {
        this.props.changePopUpLogin()
    }
    handleChangeUsername = (e) => {
        this.setState({
            username: e.target.value
        })
    }
    handleChangePassword = (e) => {
        this.setState({
            password: e.target.value
        })
    }

    handleClickLogin = async () => {
        console.log(this.state.username, this.state.password)
        let data = await handleLoginApi(this.state.username, this.state.password)
        console.log(data)
        if (Object.keys(data.data.data).length === 0) {
            alert("Please check Username or Password");
        }
        else {
            this.props.changeIsLoginState();
            this.props.updateInfo(data.data.data)
            this.props.changePopUpLogin()
        }
    }
    render() {
        return (
            <Modal isOpen={this.props.popUpLogin} toggle={this.toggle} className={"ABCD"} >
                <ModalBody>
                    <div className="frame login-form">
                        <div className="login-form__header">
                            <h3 className="login-form_heading">Login</h3>
                        </div>

                        <div className="login-form__wrapper">
                            <div className="login-form__form">
                                <div className="login-form__group">
                                    <input type="text" name="username" className="login-form__input" placeholder="Username" value={this.state.username} onChange={this.handleChangeUsername} />
                                </div>
                                <div className="login-form__group">
                                    <input type="password" name="password" className="login-form__input" placeholder="Password" value={this.state.password} onChange={this.handleChangePassword} />
                                </div>

                                <div className="login-form__group">
                                    <input type="button" value="Login" className="btn btn-login" onClick={this.handleClickLogin} />
                                </div>
                            </div>

                            <div className="login-form__forgot-password">
                                <p className="login-form__text-forgot">I forgot my password. <a href="#"
                                    className="login-form__link-forgot">Click
                                    here to reset</a></p>
                            </div>

                            <div className="login-form__register">
                                <a href="#" className="btn btn-register" onClick={() => {
                                    this.props.changePopUpLogin()
                                    this.props.changePopUpRegister()
                                }}>Register New Account</a>
                            </div>
                        </div>

                    </div>
                </ModalBody>
            </Modal>
        )
    }
}

export default LoginModal;