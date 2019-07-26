import ReactDOM from 'react-dom'
import React from 'react'
import PrimeiroComponente from './Componentes/PrimeiroComponente'

const element = document.getElementById('root')
 ReactDOM.render(
 
    <div>
        <PrimeiroComponente valor="Bom dia!" operacao={2**8}/>
    </div>
 
    , element)


// ReactDOM.render(<h1>ola react</h1>, element)



