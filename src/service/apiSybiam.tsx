import axios from "axios";

const apiSybiam = axios.create({
    baseURL: 'http://xxx.xxx.x.xxx:3000'
})

export default apiSybiam