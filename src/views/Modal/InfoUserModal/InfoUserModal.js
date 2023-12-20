import React from "react";
import { Modal, ModalBody } from 'reactstrap';
import './InfoUserModal.scss'

class InfoUserModal extends React.Component {
    toggle = () => {
        this.props.changePopUpInfoUser()
    }

    render() {
        return (
            <Modal isOpen={this.props.popUpInfoUser} toggle={this.toggle} className={"ABCDReport"} >
                <ModalBody>
                    <div className="infomation">
                        <div className="top">
                            <a href="index.php" className="ti-arrow-left"></a>
                            <a href="edit.php" className="ti-pencil"></a>
                            <img className="avatar" src="" />
                            <div className="name">Kiến Quốc</div>
                        </div>
                        <div className="bottom">
                            <div className="info">
                                <span className="span1">Ngày sinh: </span>
                                <span className="span2">23-09-2002</span>
                            </div>
                            <div className="info">
                                <span className="span1">Nghề nghiệp: </span>
                                <span className="span2">Sinh viên</span>
                            </div>
                            <div className="info">
                                <span className="span1">Nơi ở: </span>
                                <span className="span2">TP Hồ Chí Minh</span>
                            </div>
                            <div className="info">
                                <span className="span1">Sở Thích:  </span>
                                <span className="span2">Đá bóng</span>
                            </div>

                        </div>


                    </div>
                </ModalBody>
            </Modal>
        )

    }
}

export default InfoUserModal