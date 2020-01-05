import React, { Component } from 'react'
import { Field } from 'redux-form'

import Grid from '../common/layout/grid'
import Input from '../common/form/input'

class CreditsList extends Component {

    renderRows() {
        const list = this.props.list || []
        return list.map((item, index)=>(
            <tr key={index}>{/*tive que colocar o key pois o react precisa de uma chave quando se cria varios objeto iguais em uma lista*/}
                <td><Field name={`credits[${index}].name`} component={Input} 
                    placeholder='informe o nome' readOnly={this.props.readOnly}/></td>
                <td><Field name={`credits[${index}].value`} component={Input} 
                    parse={value => !value ? null : Number(value)}
                    placeholder='informe o valor ' readOnly={this.props.readOnly}/></td>
                <td></td>
            </tr>
        ))
    }

    render() {
        return (
            <Grid cols={this.props.cols}>
                <fieldset>
                    <legend>Crédito</legend>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Valor</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderRows()}
                        </tbody>
                    </table>
                </fieldset>
            </Grid>
        )
    }
}

export default CreditsList