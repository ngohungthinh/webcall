import React from "react";
import { Modal, ModalBody } from 'reactstrap';
import './RegisterModal.scss'
import { handleRegisterApi } from "../../../service/userService";

class RegisterModal extends React.Component {
    state = {
        input: {},
    }

    handleChange = e => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            input: { ...this.state.input, [name]: value }
        })
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        console.log(this.state)
        let data = await handleRegisterApi(this.state.input)
        if (data.data.isRegister === true) {
            alert("Register Successful");
            this.props.changePopUpRegister()
        }
        else {
            alert("Username already exist. Please choose other username");
        }
    }


    toggle = () => {
        this.props.changePopUpRegister()
    }

    render() {
        return (
            <Modal isOpen={this.props.popUpRegister} toggle={this.toggle} className={"ABCDRegister"} >
                <ModalBody>
                    <div className="container-register-user">
                        <div className="register">
                            <p className="register_1">Register</p>
                        </div>
                        <div className="line"></div>

                        <div className="form">
                            <form action="#" className="form-data" method="post" onSubmit={this.handleSubmit}>
                                <div className="div_input">
                                    <input type="text" name="username" id="username" placeholder="Username" className="info_input username" onChange={this.handleChange} />
                                </div>
                                <div className="div_input">
                                    <input type="password" name="password" id="password" placeholder="Password" className="info_input" onChange={this.handleChange} />
                                </div>
                                <div className="div_input">
                                    <input type="password" name="re-password" id="re-password" placeholder="Re-password" className="info_input" onChange={this.handleChange} />
                                </div>
                                <div className="div_input">
                                    <input type="text" name="name" id="name" placeholder="Name" className="info_input" onChange={this.handleChange} />
                                </div>
                                <div className="div_input">
                                    <input type="email" name="email" id="email" placeholder="Email" className="info_input" onChange={this.handleChange} />
                                </div>
                                <div className="div_input">
                                    <input type="date" name="birthday" id="birthday" placeholder="Birthday" className="info_input" onChange={this.handleChange} />

                                </div>
                                <div className="div_input">
                                    <span className="span_gender">Gender:</span>
                                    <div className="div_gender">
                                        <input type="radio" name="gender" id="male" value="1" className="gender_input" onChange={this.handleChange} />
                                        <label className="label_gender" htmlFor="male">Male</label>
                                    </div>
                                    <div className="div_gender">
                                        <input type="radio" name="gender" id="female" value="0" className="gender_input" onChange={this.handleChange} />
                                        <label className="label_gender" htmlFor="female">Female</label>
                                    </div>
                                </div>
                                <div className="div_input">
                                    <label htmlFor="job" className="label_input">Select Job:</label>
                                    <select name="job" className="info_input select_input" id="job" onChange={this.handleChange}>
                                        <option value="none" hidden>.....</option>
                                        <option value="Nghiên cứu">Nghiên cứu</option>
                                        <option value="Kinh doanh">Kinh doanh</option>
                                        <option value="Văn phòng">Văn phòng</option>
                                        <option value="Tự do">Tự do</option>
                                    </select>
                                </div>
                                <div className="div_input" style={{ margin: '18px 0 0 0' }}>
                                    <label htmlFor="location" className="label_input"  >Select Location:</label>
                                    <select name="location" className="info_input select_input" id="location" onChange={this.handleChange}>
                                        <option value="none" hidden>.....</option>
                                        <option value="HCM">HCM</option>
                                        <option value="HN">HN</option>
                                        <option value="DN">DN</option>
                                        <option value="CT">CT</option>
                                    </select>
                                </div>
                                <div className="div_input">
                                    <span className="span_gender span_hobby">Hobby:</span>
                                    <div className="div_checkbox">
                                        <input type="checkbox" name="hobby" id="bongda" className="checkbox_input" value="Du lịch" onChange={this.handleChange} />
                                        <label htmlFor="bongda" className="label_checkbox">Du lịch</label>
                                    </div>
                                    <div className="div_checkbox">
                                        <input type="checkbox" name="hobby" id="bongro" className="checkbox_input" value="Thể Thao" onChange={this.handleChange} />
                                        <label htmlFor="bongro" className="label_checkbox">Thể Thao</label>
                                    </div>
                                    <div className="div_checkbox">
                                        <input type="checkbox" name="hobby" id="bongchuyen" className="checkbox_input" value="Đọc sách" onChange={this.handleChange} />
                                        <label htmlFor="bongchuyen" className="label_checkbox">Đọc sách</label>
                                    </div>
                                    <div className="div_checkbox">
                                        <input type="checkbox" name="hobby" id="caulong" className="checkbox_input" value="Nghệ Thuật" onChange={this.handleChange} />
                                        <label htmlFor="caulong" className="label_checkbox">Nghệ Thuật</label>
                                    </div>
                                    <div className="div_checkbox">
                                        <input type="checkbox" name="hobby" id="boiloi" className="checkbox_input" value="Tâm linh" onChange={this.handleChange} />
                                        <label htmlFor="boiloi" className="label_checkbox">Tâm linh</label>
                                    </div>

                                </div>
                                <div className="div_input">
                                    <input type="submit" name="submit" value="Enter" className="submit info_input" />
                                </div>

                            </form>

                        </div>
                    </div>

                </ModalBody>
            </Modal>
        )
    }
}

export default RegisterModal;