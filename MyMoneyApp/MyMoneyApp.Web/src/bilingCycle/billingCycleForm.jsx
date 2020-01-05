import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm, Field, formValueSelector } from 'redux-form'//formValueSelector responsavel de pegar um falor do formulario

import { init } from './billingCycleActions'
import LabelAndInput from '../common/form/labelAndInput'
import CreditList from './itemList'

class BillingCycleForm extends Component {
    render() {

        const { handleSubmit, readOnly, credits } = this.props //handleSubmit um metodo do do redux-form

        return (
            <form role='form' onSubmit={handleSubmit}>
                <div className='box-body'>
                    <Field name='name' readOnly={readOnly} 
                        component={LabelAndInput} label='Nome' cols='12 4' 
                        placeholder='Informe o nome' />
                    <Field name='month' readOnly={readOnly}
                         component={LabelAndInput} 
                         type='number' label='Mes' cols='12 4' 
                         placeholder='Informe o mes' 
                         parse={value => !value ? null : Number(value)} />
                    <Field name='year' readOnly={readOnly} 
                        component={LabelAndInput} 
                        type='number' label='Ano' cols='12 4' 
                        placeholder='Informe o ano' 
                        parse={value => !value ? null : Number(value)} />
                    <CreditList cols='12 6' list={credits} field='credits' legend='Créditos' readOnly={readOnly}/>  
                </div>
                <div className='box-footer'>
                    <button className={`btn btn-${this.props.submitClass}`} type='submit'>
                        {this.props.submitLabel}
                    </button>
                    <button className="btn btn-default" type='button' onClick={this.props.init}>Cancelar</button>
                </div>
            </form>
        )
    }
}
BillingCycleForm = reduxForm({ form: 'billingCycleForm', destroyOnUnmount: false })(BillingCycleForm)//destroyOnUnmount flega que quando o componente for destruido ele nao destrua os dados inicializados
const selector = formValueSelector('billingCycleForm')//passei o id fo formulario para ele saber de qual formulario ele vai pegar
const mapStateToProps = state => ({credits: selector(state,'credits')})// o objeto 'selector' precisa de dois parametros o estado da aplicacao mais qual a propriedade que vc quer extrair do estado
const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleForm)