import React from "react";
import { Modal, ModalBody } from 'reactstrap';
import './RegisterModal.scss'

class RegisterModal extends React.Component {
    toggle = () => {
        this.props.changePopUpRegister()
    }

    render() {
        return (
            <Modal isOpen={this.props.popUpRegister} toggle={this.toggle} className={"ABCDRegister"} >
                <ModalBody>
                    <div class="container-register-user">
                        <div class="register">
                            <p class="register_1">Register</p>
                        </div>
                        <div class="line"></div>

                        <div class="form">
                            <form action="#" class="form-data" method="post">
                                <div class="div_input">
                                    <input type="text" name="username" id="username" placeholder="Username" class="info_input username" />
                                </div>
                                <div class="div_input">
                                    <input type="password" name="password" id="password" placeholder="Password" class="info_input" />
                                </div>
                                <div class="div_input">
                                    <input type="password" name="re-password" id="re-password" placeholder="Re-password"
                                        class="info_input" />
                                </div>
                                <div class="div_input">
                                    <input type="text" name="name" id="name" placeholder="Name" class="info_input" />
                                </div>
                                <div class="div_input">
                                    <input type="email" name="email" id="email" placeholder="Email" class="info_input" />
                                </div>
                                <div class="div_input">
                                    <input type="date" name="birthday" id="birthday" placeholder="Birthday" class="info_input" />

                                </div>
                                <div class="div_input">
                                    <span class="span_gender">Gender:</span>
                                    <div class="div_gender">
                                        <input type="radio" name="gender" id="male" value="Male" class="gender_input" />
                                        <label class="label_gender" for="male">Male</label>
                                    </div>
                                    <div class="div_gender">
                                        <input type="radio" name="gender" id="female" value="Female" class="gender_input" />
                                        <label class="label_gender" for="female">Female</label>
                                    </div>
                                </div>
                                <div class="div_input">
                                    <label for="job" class="label_input">Select Job:</label>
                                    <select name="job" class="info_input select_input" id="job">
                                        <option value="Nghiên cứu">Nghiên cứu</option>
                                        <option value="Kinh doanh">Kinh doanh</option>
                                        <option value="Văn phòng">Văn phòng</option>
                                        <option value="Sáng tạo">Sáng tạo</option>
                                    </select>
                                </div>
                                <div class="div_input" style={{ margin: '18px 0 0 0' }}>
                                    <label for="location" class="label_input"  >Select Location:</label>
                                    <select name="location" class="info_input select_input" id="location">
                                        <option value="HCM">HCM</option>
                                        <option value="HN">HN</option>
                                        <option value="DN">DN</option>
                                        <option value="CT">CT</option>
                                    </select>
                                </div>
                                <div class="div_input">
                                    <span class="span_gender span_hobby">Hobby:</span>
                                    <div class="div_checkbox">
                                        <input type="checkbox" name="hobby[]" id="bongda" class="checkbox_input" value="Bóng đá" />
                                        <label for="bongda" class="label_checkbox">Bóng đá</label>
                                    </div>
                                    <div class="div_checkbox">
                                        <input type="checkbox" name="hobby[]" id="bongro" class="checkbox_input" value="Bóng rổ" />
                                        <label for="bongro" class="label_checkbox">Bóng rổ</label>
                                    </div>
                                    <div class="div_checkbox">
                                        <input type="checkbox" name="hobby[]" id="bongchuyen" class="checkbox_input"
                                            value="Bóng chuyền" />
                                        <label for="bongchuyen" class="label_checkbox">Bóng chuyền</label>
                                    </div>
                                    <div class="div_checkbox">
                                        <input type="checkbox" name="hobby[]" id="caulong" class="checkbox_input" value="Cầu lông" />
                                        <label for="caulong" class="label_checkbox">Cầu lông</label>
                                    </div>
                                    <div class="div_checkbox">
                                        <input type="checkbox" name="hobby[]" id="boiloi" class="checkbox_input" value="Bơi lội" />
                                        <label for="boiloi" class="label_checkbox">Bơi lội</label>
                                    </div>

                                </div>
                                <div class="div_input">
                                    <input type="submit" name="submit" value="Enter" class="submit info_input" />
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