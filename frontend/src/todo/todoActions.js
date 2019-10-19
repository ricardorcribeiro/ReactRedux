import axios from 'axios'

const URL = 'https://localhost:5001/api/todo'

export const changeDescription = event => ({
    type: 'DESCRIPTION_CHANGED',
    payload: event.target.value
})

export const search = ()=> {
    const request = axios.get(URL)
    return{
        type:'TODO_SEARCHED',
        payload: request
    }
}

export const add = description => {
    const request = axios.post(URL,{description})
    return {
        type: 'TODO_ADDED',
        payload: request
    }
}