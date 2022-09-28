import axios from "axios";

const url = "http://localhost:8000"

export const addUser = async (data) => {
    try {
        return await axios.post(`${url}/add`, data)

    } catch (err) {
        console.log('error while calling addUser api', err.message)

    }
}

export const getUsers = async () => {
    try {
        return await axios.get(`${url}/all`)
        
    } catch (err) {
        console.log("error while calling getUsers api", err.message)
    }
}
