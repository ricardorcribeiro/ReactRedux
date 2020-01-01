import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { reset as resetForm, initialize } from 'redux-form'//reset e um reduce //'initialize' serve pra inicializar o formulario
import { showTabs, selectTab } from '../common/tab/tabActions'

const BASE_URL = 'https://localhost:5001/api/'
const INITIAL_VALUES = {}
export function getList() {
    const request = axios.get(`${BASE_URL}BillingCycle`)
    return {
        type: 'BILLING_CYCLES_FETCHED',
        payload: request
    }
}

export function create(values) {
    return submit(values, 'post')
}

export function update(values) {
    return submit(values, 'put')
}

function submit(values, method) {
    return dispatch => {
        const id = values._id || ''
        axios[method](`${BASE_URL}BillingCycle/${id}`, values)
            .then(resp => {
                toastr.success('Sucesso', 'Operação Realizada com sucesso.')
                dispatch(init())
            })
            .catch(e => {
                e.response.data.errors['$.month'].forEach(error => toastr.error('Erro', error));
            })
    }
}
export function showUpdate(billingCycle) {
    return [
        selectTab('tabUpdate'),
        showTabs('tabUpdate'),
        initialize('billingCycleForm', billingCycle)
    ]
}

export function showDelete(billingCycle) {
    return [
        selectTab('tabDelete'),
        showTabs('tabDelete'),
        initialize('billingCycleForm', billingCycle)
    ]
}

export function init() {
    return [
        showTabs('tabList', 'tabCreate'),
        selectTab('tabList'),
        getList(),
        initialize('billingCycleForm', INITIAL_VALUES)
    ]
}