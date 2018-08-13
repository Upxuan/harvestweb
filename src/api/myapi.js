import axios from 'axios'

export const requestLogin = params => { return axios.post('/login', params).then(res => res.data); };

