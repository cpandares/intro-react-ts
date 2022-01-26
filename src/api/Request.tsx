import axios from "axios";

export const Request = axios.create({
    baseURL:'https://reqres.in/api/'
})