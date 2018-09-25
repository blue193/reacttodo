import * as axios from "axios"

export function sendLoadRequest() {
    return axios.get("192.168.3.239:3005/members")
            .then(res => res.data)
            .catch( err => {throw err})
}