const BASE_URL = 'http://127.0.0.1:5000/api'

export default {
    checkout() {  // 获取API状态
        return fetch(BASE_URL + '/checkout', {
            method: 'GET',
        })
    },
    login(data: FormData) { // 登录
        return fetch(BASE_URL + '/login', {
            method: 'POST',
            body: data
        })
    },
    signup(data: FormData) { // 注册
        return fetch(BASE_URL + '/signup', {
            method: 'POST',
            body: data
        })
    }
}

