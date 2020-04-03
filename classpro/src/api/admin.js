import axios from '../utils/axios'
class Admin {
    // 登录接口
    login(data){
        let url = '/pro/admin/login'
        return axios.post(url,data)
    }
}
export default new Admin()