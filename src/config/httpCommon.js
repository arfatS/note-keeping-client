import axios from 'axios'

export default axios.create({
    baseURL : "https://as-note-keeping-server.herokuapp.com/api",
    headers : {
        "Content-Type" : "application/json"
    }
})