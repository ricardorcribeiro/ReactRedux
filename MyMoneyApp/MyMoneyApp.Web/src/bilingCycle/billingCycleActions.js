import axios from 'axios'
// const BASE_URL = 'https://localhost:5001/api/'
const BASE_URL = 'https://localhost:5001/api/'

export function getList() {
    const request = axios.get(`${BASE_URL}BillingCycle`)
    return {
        type: 'BILLING_CYCLES_FETCHED',
        payload: request
    }
}