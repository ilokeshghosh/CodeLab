import axios from "axios"
class Service {


    // normal get request github
    async github() {
        try {
            // const response = await fetch(`https://api.github.com/users/ilokeshghosh`)
            const response = await axios.get(`https://api.github.com/users/ilokeshghosh`)
            console.log(`Response obj in service`, response.data)
            // if (response.ok) {
            //     const data = await response.json()
            //     return data
            // } else {
            //     throw new Error('Error in fetching github data', response)
            // }
        } catch (error) {
            console.log('Error in Service ', error)
        }
    }

    // signup api call
    async signUp() {
        try {
            const data = {
                username: 'username',
                fullName: 'fullname',
                email: 'email',
                password: 'password'
            }
            // const response = await fetch(``, {
            //     method: 'POST',
            //     headers: {
            //         'Content-type': 'application/json',
            //     },
            //     body: JSON.stringify(data)
            // })

            const response = await axios.post(`/api/v1/users/register`, {
                // data: {
                username: 'axiosUser01',
                fullName: 'axios user',
                email: 'axios@email.com',
                password: 'axios'
                // }
            })


            console.log('response at service ', response)

            // if (response.ok) {
            //     return true
            // } else {
            //     throw new Error(`Service ${response.statusText}`)
            // }
        } catch (error) {
            throw error;
        }
    }


    // login api call
    async login() {
        const data = {
            username: 'axiosUser01',
            password: 'axios'
        }
        try {
            // const response = await fetch('/api/v1/users/login', {
            //     method: "POST",
            //     headers: {
            //         'Content-type': 'application/json'
            //     },
            //     body: JSON.stringify(data)
            // })

            const response = await axios.post('/api/v1/users/login', data)

            console.log('response in service ', response.data.data)
            // if (response.ok) {
            //     return await response.json()
            // } else {
            //     throw new Error(`User ${response.statusText}`)
            // }
        } catch (error) {
            throw error;
        }
    }

    async updateUser(token) {
        try {
            const data = {
                username: 'axiosUser01',
                fullName: 'axios user2',
                email: 'axios2@email.com',
                password: 'axios'
            }

            const response = await axios.patch('/api/v1/users/update-account', data, {
                headers: {
                    Authorization: token
                }
            })
            console.log('response is ', response)
        } catch (error) {
            console.log('error is ', error)
        }
    }

    async getUser() {
        const userName = 'axiosUser01'
        try {
            const response = await axios.get(`/api/v1/users/u/${userName}`)
            console.log('response is error', response)
        } catch (error) {
            throw error;
        }
    }

    async updateUserAvatar(token, file) {
        const formData = new FormData()
        formData.append('avatar', file)
        try {
            const response = await axios.patch('/api/v1/users/avatar', formData, {
                headers: { Authorization: token }
            })
            console.log('response', response)
        } catch (error) {
            console.log('Error is', error)
        }
    }
}

export default new Service;