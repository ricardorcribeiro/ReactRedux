import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as actions from './billingCycleActions'

class BillingCycleList extends Component {

    componentWillMount(){
        this.props.getList()
        console.log(this.props.getList())
    }
    render() {
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Mês</th>
                            <th>Ano</th>
                        </tr>
                    </thead>
                    <tbody>

                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToPros = state => ({ list: state.billingCycle.list })
const mapDispatchToPros = dispatch => bindActionCreators({ ...actions }, dispatch)
export default connect(mapStateToPros, mapDispatchToPros)(BillingCycleList)