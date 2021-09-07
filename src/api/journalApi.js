import axios from 'axios'

const journalApi = axios.create({
    baseURL: 'https://vue-demos-cc8a1-default-rtdb.firebaseio.com'
})

export default journalApi