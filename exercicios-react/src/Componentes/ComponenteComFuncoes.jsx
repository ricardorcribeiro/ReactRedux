import React from 'react'

const aprovados =['Ricardo','Rafaela','Zeus','Gaia']
export default props =>{
    const gerarItens = itens =>{
        return itens.map(item => <li>{item}</li>)
    }

    return (
        <ul>
            {gerarItens(aprovados)}
        </ul>
    )
}

