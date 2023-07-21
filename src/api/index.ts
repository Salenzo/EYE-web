const BASE_URL = 'http://127.0.0.1:5000'

export default {

    checkout() {  //获取API状态
        return fetch(BASE_URL + '/checkout', {
            method: 'GET',
        })
    },
}

