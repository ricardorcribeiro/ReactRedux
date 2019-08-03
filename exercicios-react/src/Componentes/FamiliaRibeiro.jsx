import React from 'react'
import Membros from './Membro'

export default props => 
<div>
    <Membros nome="ricardo" sobrenome={props.sobrenome}/>
    <Membros nome="rafaela" sobrenome={props.sobrenome}/>
</div>