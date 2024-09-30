import axios from "axios";


export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {

        key: "510bc8083b0a41b2882d9b5cd8b7af9c"
    }
})