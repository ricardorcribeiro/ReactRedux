import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
class BillingCycleForm extends Component {
    render() {

        const { handleSubmit } = this.props //handleSubmit um metodo do do redux-form

        return (
            <form role='form' onSubmit={handleSubmit}>
                <div className='box-body'>
                    <Field name='name' component='input' />
                    <Field name='month' component='input' parse={value => !value ? null : Number(value)}/>
                    <Field name='year' component='input' parse={value => !value ? null : Number(value)}/>
                </div>
                <div className='box-footer'>
                    <button className="btn btn-primary" type='submit'>Submit</button>
                </div>
            </form>
        )
    }
}

export default reduxForm({ form: 'billingCycleForm' })(BillingCycleForm)