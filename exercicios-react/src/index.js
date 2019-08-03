import ReactDOM from 'react-dom'
import React from 'react'
import PrimeiroComponente from './Componentes/PrimeiroComponente'
import { CompA, CompB as B } from './Componentes/DoisComponentes'
import Multiplo from './Componentes/MultiElementos'
import FamiliaRibeiro  from './Componentes/FamiliaRibeiro'
import Familia from './Componentes/Familia'
import Membors from './Componentes/Membro'
import ComponenteComFuncoes from './Componentes/ComponenteComFuncoes'
import Pai from './Componentes/Pai'

const element = document.getElementById('root')
 ReactDOM.render(
 
    <div>
        <PrimeiroComponente valor="Bom dia!" operacao={2**8}/>
        <hr/>
        <CompA valor={Math.random()}/>
        <B valor="bananinha 123"/>
        <hr/>
        <Multiplo/>
        <hr/>
        <FamiliaRibeiro sobrenome="rodrigues ribeiro"/>
        <hr/>
        <Familia sobrenome="ribeiro">
            <Membors nome="ricardo" />
            <Membors nome="rafaela"/>
            <Membors nome="mariza"/>
            <Membors nome="zeus" />
            <Membors nome="gaia" />
        </Familia>
        <hr/>
        <ComponenteComFuncoes/>
        <hr/>
        <Pai/>
    </div>
    , element)


// ReactDOM.render(<h1>ola react</h1>, element)



