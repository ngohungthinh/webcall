import React from "react";
import { Modal, ModalBody } from 'reactstrap';
import './InfoUserModal.scss'

class InfoUserModal extends React.Component {
    toggle = () => {
        this.props.changePopUpInfoUser()
    }

    render() {
        return (
            <Modal isOpen={this.props.popUpInfoUser} toggle={this.toggle} className={"ABCDInfoUserMatch"} >
                <ModalBody>
                    <div className="infomation">
                        <div className="top">
                            <img className="avatar" src={require("../../../assets/images/user_icon.png")} alt="Avatar User" />
                            <div className="name">{this.props.remoteUser.name}</div>
                        </div>
                        <div className="bottom">
                            <div className="info">
                                <span className="span1">Ngày sinh: </span>
                                <span className="span2">{this.props.remoteUser.birthday}</span>
                            </div>
                            <div className="info">
                                <span className="span1">Nghề nghiệp: </span>
                                <span className="span2">{this.props.remoteUser.job}</span>
                            </div>
                            <div className="info">
                                <span className="span1">Nơi ở: </span>
                                <span className="span2">{this.props.remoteUser.location}</span>
                            </div>
                            <div className="info">
                                <span className="span1">Sở Thích:  </span>
                                <span className="span2">{this.props.remoteUser.hobby}</span>
                            </div>

                        </div>


                    </div>
                </ModalBody>
            </Modal>
        )

    }
}

export default InfoUserModal