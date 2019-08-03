import React from 'react'
import {filhosComPros} from '../Utils/Utils'

export default props => 
<div>

    {filhosComPros(props)}
    {/* {React.Children.map(props.children, filho=>{
        return React.cloneElement(filho, { ...props })    
    })} */}

    {/* exemplo sem expecificar quais as novas propriedades */}
    {/* {React.cloneElement(props.children, { ...props })} */}

    {/* React.cloneElement gera um clode do objeto children passando como segundo paramento as novas propriedades que os filhos vao ter*/}
    {/* {React.cloneElement(props.children,
        {sobrenome: props.sobrenome})} */}
    
    {/* {children pega todos os elementos internos passados no dentro ta teg } */}
    {/* {props.children} */}
</div>