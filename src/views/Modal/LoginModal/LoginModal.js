import React from "react";
import { Modal, ModalBody } from 'reactstrap';
import './LoginModal.scss'

class LoginModal extends React.Component {
    toggle = () => {
        this.props.changePopUpLogin()
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
                                    <input type="text" name="username" className="login-form__input" placeholder="Username" />
                                </div>
                                <div className="login-form__group">
                                    <input type="password" name="password" className="login-form__input" placeholder="Password" />
                                </div>

                                <div className="login-form__group">
                                    <input type="button" value="Login" className="btn btn-login" />
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