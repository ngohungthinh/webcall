import React from "react";
import { Modal, ModalBody } from 'reactstrap';
import './ReportModal.scss'
class ReportModal extends React.Component {
    toggle = () => {
        this.props.changePopUpReport()
    }

    render() {
        return (
            <Modal isOpen={this.props.popUpReport} toggle={this.toggle} className={"ABCDReport"} >
                <ModalBody>
                    <div className="report_user">
                        <div className="report1">Report</div>
                        <div className="report_line"></div>
                        <div className="report_form">
                            <form action="#" method="post">

                                <div className="div_report">
                                    <label className="report_label" for="noidung18">Nội dung 18+ </label><br />
                                    <input type="checkbox" name="noidung18" id="noidung18" value="Nội dung 18+" className="report_input" />
                                </div>
                                <div className="div_report">
                                    <label for="noituc" className="report_label">Lời nói thô tục</label><br />
                                    <input type="checkbox" name="noituc" id="noituc" value="Lời nói thô tục" className="report_input" />
                                </div>
                                <div className="div_report">
                                    <label for="other" className="report_label">Khác:</label>
                                    <input type="checkbox" name="other" id="other" value="Khác" className="report_input" />
                                    <input type="textarea" className="report_other" name="report_other" placeholder="" />

                                </div>
                                <input type="submit" name='submit_report' className="report_submit" value="Enter" />
                            </form>
                        </div>

                    </div>
                </ModalBody>
            </Modal>
        )
    }
}

export default ReportModal