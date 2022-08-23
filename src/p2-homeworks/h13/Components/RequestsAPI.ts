import axios from 'axios';

//const baseUrl: string = `https://social-network.samuraijs.com/api/1.0`

const instance = axios.create({
    baseURL: `https://neko-cafe-back.herokuapp.com/auth`,

})

export const RequestsAPI = {
    postCheckBox(checked: boolean) {
        return instance.post(`/test`,{success: checked})
        }
}