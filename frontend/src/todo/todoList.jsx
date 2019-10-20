import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import IconButton from '../template/iconButton'
import { markAsDone, markAsPending, remove } from './todoActions'


const TodoList = props => {
    const renderRows = () => {
        const list = props.list || []
        return list.map(todo => (
            <tr key={todo._id}>
                <td className={todo.done ? 'markeAsDone' : ''}>{todo.description}</td>
                <td>
                    <IconButton style='success' icon='check' hide={todo.done}
                        onClick={() => props.markAsDone(todo)} />

                    <IconButton style='warning' icon='undo' hide={!todo.done}
                        onClick={() => props.markAsPending(todo)} />

                    <IconButton style='danger' icon='trash-o' hide={!todo.done}
                        onClick={() => props.remove(todo)} />
                </td>
            </tr>
        ))
    }
    return (
        <table className="table">
            <thead>
                <tr>
                    <td>Descrição</td>
                    <td className="tableAction">ações</td>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}

const mapStateToProps = state => ({ list: state.todo.list })// esse 'todo' e do reducers.js
const mapDispatchToProps = dispatch => bindActionCreators({ markAsDone, markAsPending, remove }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)