import * as axios from "axios"

export function sendLoadRequest() {
    return axios.get("http://192.168.3.239:808/members/blue", {
    	headers: {
    		'Token': 'abc'
    	}
    })
            .then(res => res.data)
            .catch( err => {throw err})
}