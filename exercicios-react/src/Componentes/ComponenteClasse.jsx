import React, { Component } from 'react'

export default class ComponeteClasse extends Component{
    // e necessario o metodo render para retornar o comoponete jsx
    render(){
        return(
            <h1>{this.props.valor}</h1>
        )
    }
}