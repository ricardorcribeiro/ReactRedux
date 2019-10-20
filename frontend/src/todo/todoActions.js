import axios from 'axios'

const URL = 'https://localhost:5001/api/todo'

export const changeDescription = event => ({
    type: 'DESCRIPTION_CHANGED',
    payload: event.target.value
})

export const search = () => {
    const request = axios.get(URL)
    return {
        type: 'TODO_SEARCHED',
        payload: request
    }
}

export const add = description => {
    return dispatch => { // o redux-thunk faz que nao retorna uma action mas retorna um dispatch
        axios.post(URL, { description })
            .then(resp => dispatch({ type: 'TODO_ADDED', payload: resp.data }))
            .then(resp => dispatch(search()))
    }
}

export const markAsDone = todo => {
    return dispatch => {
        axios.post(`${URL}/Editar`, { ...todo, done: true })
            .then(resp => dispatch({type: 'TODO_MASKED_AS_DONE', payload: { ...todo, done: true }}))
            .then(resp => dispatch(search()));
    }
}

export const markAsPending = todo => {
    return dispatch => {
        axios.post(`${URL}/Editar`, { ...todo, done: false })
            .then(resp => dispatch({type: 'TODO_MASKED_AS_DONE', payload: { ...todo, done: false }}))
            .then(resp => dispatch(search()));
    }
}

export const remove = todo => {
    return dispatch => {
        axios.delete(`${URL}/${todo._id}`)
            .then(resp=> dispatch(search()))
    }
}