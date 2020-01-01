import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm, Field } from 'redux-form'

import { init } from './billingCycleActions'
import LabelAndInput from '../common/form/labelAndInput'


class BillingCycleForm extends Component {
    render() {

        const { handleSubmit } = this.props //handleSubmit um metodo do do redux-form

        return (
            <form role='form' onSubmit={handleSubmit}>
                <div className='box-body'>
                    <Field name='name' component={LabelAndInput} label='Nome' cols='12 4' placeholder='Informe o nome' />
                    <Field name='month' component={LabelAndInput} type='number' label='Mes' cols='12 4' placeholder='Informe o mes' parse={value => !value ? null : Number(value)} />
                    <Field name='year' component={LabelAndInput} type='number' label='Ano' cols='12 4' placeholder='Informe o ano' parse={value => !value ? null : Number(value)} />
                </div>
                <div className='box-footer'>
                    <button className="btn btn-primary" type='submit'>Submit</button>
                    <button className="btn btn-default" type='button' onClick={this.props.init}>Cancelar</button>
                </div>
            </form>
        )
    }
}
BillingCycleForm = reduxForm({ form: 'billingCycleForm', destroyOnUnmount: false })(BillingCycleForm)//destroyOnUnmount flega que quando o componente for destruido ele nao destrua os dados inicializados


const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch)
export default connect(null, mapDispatchToProps)(BillingCycleForm)