import axios from "axios";


   export  default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {

        key: "bcdedb6120bf4388af651047fc7fdd71"
    }
})