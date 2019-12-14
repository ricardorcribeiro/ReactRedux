import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { reset as resetForm } from 'redux-form'//reset e um reduce
import { showTabs, selectTab } from '../common/tab/tabActions'

const BASE_URL = 'https://localhost:5001/api/'

export function getList() {
    const request = axios.get(`${BASE_URL}BillingCycle`)
    return {
        type: 'BILLING_CYCLES_FETCHED',
        payload: request
    }
}

export function create(values) {
    return dispatch => {
        axios.post(`${BASE_URL}BillingCycle`, values)
            .then(resp => {
                toastr.success('Sucesso', 'Operação Realizada com sucesso.')
                dispatch([//so posso usar o dispatch por que estou usando o Middleware redux-multi
                    resetForm('billingCycleForm'),//billingCycleForm e o nome do formulario definido no arquivo jsx do mesmo
                    getList(),
                    selectTab('tabList'),
                    showTabs('tabList','tabCreate')
                ])
            })
            .catch(e => {
                e.response.data.errors['$.month'].forEach(error => toastr.error('Erro', error));
            })
    }
}