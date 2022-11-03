import axios from "axios";

const apiSybiam = axios.create({
    baseURL: 'http://192.168.0.101:3000'
})

export default apiSybiam
