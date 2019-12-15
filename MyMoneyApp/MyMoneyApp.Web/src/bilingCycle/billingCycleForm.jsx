import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import LabelAndInput from '../common/form/labelAndInput'
class BillingCycleForm extends Component {
    render() {

        const { handleSubmit } = this.props //handleSubmit um metodo do do redux-form

        return (
            <form role='form' onSubmit={handleSubmit}>
                <div className='box-body'>
                    <Field name='name' component={LabelAndInput} label='Nome' cols='12 4' placeholder='Informe o nome' />
                    <Field name='month' component={LabelAndInput} type='number' label='Mes' cols='12 4' placeholder='Informe o mes' parse={value => !value ? null : Number(value)}/>
                    <Field name='year' component={LabelAndInput} type='number' label='Ano' cols='12 4' placeholder='Informe o ano' parse={value => !value ? null : Number(value)}/>
                </div>
                <div className='box-footer'>
                    <button className="btn btn-primary" type='submit'>Submit</button>
                </div>
            </form>
        )
    }
}

export default reduxForm({ form: 'billingCycleForm' })(BillingCycleForm)