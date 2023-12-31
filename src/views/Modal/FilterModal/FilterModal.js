import React from "react";
import { Modal, ModalBody } from 'reactstrap';
import './FilterModal.scss'

class FilterModal extends React.Component {

    handleChange = e => {
        const name = e.target.name;
        const value = e.target.value;
        this.props.changeInfoFilter(name, value)
    }

    toggle = () => {
        this.props.changePopUpFilter()
    }

    render() {
        return (
            <Modal isOpen={this.props.popUpFilter} toggle={this.toggle} className={"ABCDReport"} >
                <ModalBody>
                    <div className="frame-3-filter">
                        <div className="filter">
                            Filter </div>
                        <div className="line-2">
                        </div>
                        <div className="div_fil">
                            <div className="div_filter">
                                <span className="span_filter">Năm sinh</span>
                                <select id="birthday" name="birthday" className="select_filter birthday" onChange={this.handleChange} value={this.props.infoFilter.birthday}>
                                    <option value="all"> ...... </option>
                                    <option value="1990-1995">1990 &rArr; 1995</option>
                                    <option value="1995-2000">1995 &rArr; 2000</option>
                                    <option value="2000-2005">2000 &rArr; 2005</option>
                                </select>
                            </div>
                            <div className="div_filter">
                                <span className="span_filter">Giới tính</span>
                                <select id="gender" name="gender" className="select_filter gender" onChange={this.handleChange} value={this.props.infoFilter.gender}>
                                    <option value="all"> ...... </option>
                                    <option value="0">Nữ</option>
                                    <option value="1">Nam</option>
                                </select>1
                            </div>
                            <div className="div_filter">
                                <span className="span_filter">Nghề nghiệp</span>
                                <select id="job" name="job" className="select_filter job" onChange={this.handleChange} value={this.props.infoFilter.job}>
                                    <option value="all"> ...... </option>
                                    <option value="Nghiên cứu">Nghiên cứu</option>
                                    <option value="Kinh doanh">Kinh doanh</option>
                                    <option value="Văn phòng">Văn phòng</option>
                                    <option value="Tự do">Tự do</option>
                                </select>
                            </div>
                            <div className="div_filter">
                                <span className="span_filter">Khu vực</span>
                                <select id="location" name="location" className="select_filter location" onChange={this.handleChange} value={this.props.infoFilter.location}>
                                    <option value="all"> ...... </option>
                                    <option value="HCM">HCM</option>
                                    <option value="HN">HN</option>
                                    <option value="DN">DN</option>
                                    <option value="DN">CT</option>
                                </select>
                            </div>
                            <div className="div_filter">
                                <span className="span_filter">Sở thích</span>
                                <select id="hobby" name="hobby" className="select_filter hobby" onChange={this.handleChange} value={this.props.infoFilter.hobby}>
                                    <option value="all"> ...... </option>
                                    <option value="Nghe nhạc">Du lịch</option>
                                    <option value="Thể thao">Thể thao</option>
                                    <option value="Đọc sách">Đọc sách</option>
                                    <option value="Nghe nhạc">Nghệ thuật</option>
                                    <option value="Đọc sách">Tâm linh</option>
                                </select>
                            </div>
                            <div className="div_filter">
                                <input type="submit" value="Enter" className="enter" onClick={this.toggle} />
                            </div>
                        </div>
                    </div>
                </ModalBody>
            </Modal>
        )

    }
}

export default FilterModal