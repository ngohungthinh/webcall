import React from "react";
import { Modal, ModalBody } from 'reactstrap';
import './FilterModal.scss'

class FilterModal extends React.Component {
    toggle = () => {
        this.props.changePopUpFilter()
    }

    render() {
        return (
            <Modal isOpen={this.props.popUpFilter} toggle={this.toggle} className={"ABCDReport"} >
                <ModalBody>
                    <div class="frame-3-filter">
                        <div class="filter">
                            Filter </div>
                        <div class="line-2">
                        </div>
                        <div class="div_fil">
                            <div class="div_filter">
                                <span class="span_filter">Năm sinh</span>
                                <select id="birthday" name="birthday" class="select_filter birthday">
                                    <option value="1990-1995">1990 &rArr; 1995</option>
                                    <option value="1995-2000">1995 &rArr; 2000</option>
                                    <option value="2000-2005">2000 &rArr; 2005</option>
                                </select>
                            </div>
                            <div class="div_filter">
                                <span class="span_filter">Giới tính</span>
                                <select id="birthday" name="gender" class="select_filter gender">
                                    <option value="Nữ">Nữ</option>
                                    <option value="Nam">Nam</option>
                                </select>
                            </div>
                            <div class="div_filter">
                                <span class="span_filter">Nghề nghiệp</span>
                                <select id="job" name="job" class="select_filter job">
                                    <option value="Bác sĩ">Bác sĩ</option>
                                    <option value="Kĩ sư">Kĩ sư</option>
                                    <option value="Công An">Công An</option>
                                </select>
                            </div>
                            <div class="div_filter">
                                <span class="span_filter">Khu vực</span>
                                <select id="location" name="location" class="select_filter location">
                                    <option value="HCM">HCM</option>
                                    <option value="HN">HN</option>
                                    <option value="DN">DN</option>
                                </select>
                            </div>
                            <div class="div_filter">
                                <span class="span_filter">Sở thích</span>
                                <select id="hobby" name="hobby" class="select_filter hobby">
                                    <option value="Nghe nhạc">Nghe nhạc</option>
                                    <option value="Đọc sách">Đọc sách</option>
                                </select>
                            </div>
                            <div class="div_filter">
                                <input type="submit" value="Enter" class="enter" />
                            </div>
                        </div>
                    </div>
                </ModalBody>
            </Modal>
        )

    }
}

export default FilterModal