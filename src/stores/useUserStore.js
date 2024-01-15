import { defineStore } from 'pinia'
import axios from 'axios'
import { BASE_URL } from '../config/constants.js'
import { useToast } from 'bootstrap-vue-next'

const { show } = useToast()


export const useUserStore = defineStore('user', {
    state: () => ({
        token: '', // token is only based on session, so no storage in localstorage or cookies
        user: {
            firstname: null,
            lastname: null,
            email: null,
            birthdate: null,
            bookings: [],
        },

    }),
    getters: {
        isLoggedIn: state => !!state.token, // if token is empty user is not logged in
    },
    actions: {
        setToken(token) {
            this.token = token
        },
        setUserInformation(key, value) {
            if (key in this.user) {
                this.user[key] = value
            } else {
                throw new Error('Invalid key for user information')
            }
        },
        async registerUser(firstname, lastname, email, username, password) {
            if (this.isLoggedIn) {
                show('You are already logged in.', {
                    title: 'Info',
                    variant: "info"
                })
                return
            }
            if (!firstname || !lastname || !email || !username || !password) {
                throw new Error('Please pass all required fields')
            }
            await axios.post(`${BASE_URL}/register`, {
                firstname,
                lastname,
                email,
                username,
                password
            }).then((response) => {
                const token = response?.data?.split('|')[1]
                this.setToken(token)
                show('You have successfully registered and logged in.', {
                    title: 'Success',
                    variant: 'success'
                })
                this.fetchUserInfo()
            }).catch((error) => {
                show('Registration was not successful!', {
                    title: 'Error',
                    variant: 'danger'
                })
                console.error(error)
            })
        },
        async loginUser(email, password) {
            await axios.post(`${BASE_URL}/login`, {
                clientId: email,
                secret: password,
            }).then((response) => {
                const token = response?.data?.split('|')[1]
                this.setToken(token)
                show('You have successfully logged in.', {
                    title: 'Success',
                    variant: 'success'
                })
                this.fetchUserInfo()
            }).catch((error) => {
                show('Login was not successful!', {
                    title: 'Error',
                    variant: 'danger'
                })
            })
        },
        async fetchUserInfo() {
            if (!this.isLoggedIn) {
                return
            }
            await axios.get(`${BASE_URL}/user`, {
                headers: {
                    Authorization: `Bearer ${this.token}`,
                    Accept: 'application/json',
                }
            }).then((response) => {
                this.user = response.data
            }).catch((error) => {
                show('Error while fetching user information.', {
                    title: 'Error',
                    variant: 'danger'
                })
                console.error(error)
            })
        },
        logoutUser() {
            this.setToken('')
            show('You have successfully logged out.', {
                title: 'Success',
                variant: 'info'
            })
        }
    }
})
