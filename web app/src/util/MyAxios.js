import axios from 'axios';

const MyAxios = (endpoint, method, body) => {
    return axios({
        headers: { 'Authorization': 'Bearer '+localStorage.token },
        method,
        url: `http://localhost:8080${endpoint}`,
        data: body
    })
}

export default MyAxios;