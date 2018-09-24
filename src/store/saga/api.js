import * as axios from "axios"
export const init = {
    todos: [
        {id: 1, completed: "false", text: "How are you"},
        {id: 2, completed: "true", text: "Hello"},
        {id: 3, completed: "true", text: "Nice to meet you"}
    ],
    filter
}

export function sendLoadRequest() {
    return axios.get("192.168.3.239:3005/members")
            .then(res => res.data)
            .catch( err => {throw err})
}