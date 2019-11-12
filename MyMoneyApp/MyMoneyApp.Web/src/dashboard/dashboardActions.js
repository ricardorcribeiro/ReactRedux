import axios from 'axios'

const BASE_URL = 'https://localhost:5001/api/'

export function getSummary() {
    const request = axios.get(`${BASE_URL}BillingCycle/Summary`)
    return {
        type: 'BILLING_SUMMARY_FETCHED',
        payload: request
    }
}