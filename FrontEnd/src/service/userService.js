import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_BACKEND_URL;

const handleLoginApi = (username, password) => {
    return axios.post('/api/login', { username, password })
}

const handleRegisterApi = (input) => {
    return axios.post('/api/register',
        {
            username: input.username,
            password: input.password,
            name: input.name,
            gender: input.gender,
            birthday: input.birthday,
            location: input.location,
            job: input.job,
            hobby: input.hobby,
            role: 'user',
        })
}

const handleMatchUser = (myInfo, infoFilter) => {
    return axios.post('/api/match', { myInfo, infoFilter })
}

const handleCheckMatch = (username) => {
    return axios.post('/api/checkmatch', { username })
}

export { handleLoginApi, handleRegisterApi, handleMatchUser, handleCheckMatch }