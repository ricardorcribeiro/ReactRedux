const INITIAL_STATE = {
    description: 'ler livro',
    list: [{
        _id: 1,
        description: 'pagar fatura do cartao',
        done: true
    },
    {
        _id: 2,
        description: 'reuniao com a equipo as 10:00',
        done: false
    },
    {
        _id: 3,
        description: 'Consulta medica na terça depois do almoço',
        done: false
    }]
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'DESCRIPTION_CHANGED':
            return { ...state, description: action.payload }
        default:
            return state
    }
}