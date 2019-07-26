import ReactDOM from 'react-dom'
import React from 'react'
import PrimeiroComponente from './Componentes/PrimeiroComponente'
import { CompA, CompB as B } from './Componentes/DoisComponentes'


const element = document.getElementById('root')
 ReactDOM.render(
 
    <div>
        <PrimeiroComponente valor="Bom dia!" operacao={2**8}/>

        <CompA valor={Math.random()}/>
        <B valor="bananinha 123"/>
    </div>
 
    , element)


// ReactDOM.render(<h1>ola react</h1>, element)



