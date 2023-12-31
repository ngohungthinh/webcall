import React from "react";
import { Modal, ModalBody } from 'reactstrap';
import './InfoUserModal.scss'

class InfoUserMainModal extends React.Component {
    toggle = () => {
        this.props.changePopUpInfoUserMain()
    }

    render() {
        return (
            <Modal isOpen={this.props.popUpInfoUserMain} toggle={this.toggle} className={"ABCDInfoUserMain"} >
                <ModalBody>
                    <div className="infomation">
                        <div className="top">
                            <img className="avatar" src={require("../../../assets/images/avt.jpeg")} alt="Avatar User" />
                            <div className="name">{this.props.myInfo.name}</div>
                        </div>
                        <div className="bottom">
                            <div className="info">
                                <span className="span1">Ngày sinh: </span>
                                <span className="span2">{this.props.myInfo.birthday}</span>
                            </div>
                            <div className="info">
                                <span className="span1">Nghề nghiệp: </span>
                                <span className="span2">{this.props.myInfo.job}</span>
                            </div>
                            <div className="info">
                                <span className="span1">Nơi ở: </span>
                                <span className="span2">{this.props.myInfo.location}</span>
                            </div>
                            <div className="info">
                                <span className="span1">Sở Thích:  </span>
                                <span className="span2">{this.props.myInfo.hobby}</span>
                            </div>

                        </div>

                        <div className="div_filter">
                            <button className="enter" onClick={this.toggle}>Logout</button>
                        </div>
                    </div>
                </ModalBody>
            </Modal>
        )

    }
}

export default InfoUserMainModal