import axios from "axios";
import {create} from "domain";

// type blockAPI = {
//     getUsers: (currentPage:string,pageSize: string) => void
// }
const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '424d30ae-6281-4a44-aa2a-443211a7e193'
    }
})
export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`,)
            .then(response => response.data)
    },
    follow(id: number) {
        return instance.post(`follow/${id}`)
            .then(data => data.data)
    },
    unfollow(id: number) {
        return instance.delete(`follow/${id}`)
            .then(data => data.data)
    },
    getProfileUser(userId: number) {
        return profileAPI.getProfileUser(userId)
    }
}


export const profileAPI = {
    getProfileUser(userId: number) {
        console.warn('Obsolete method. Please profileAPI object')
        return instance.get('profile/' + userId)
    },
    getStatus(userId: number)  {
        return instance.get(`status/` + userId)
    },
    updeateStatus(status: any) {
        return instance.put(`status`,{status: status})
    }
}
export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    }
}