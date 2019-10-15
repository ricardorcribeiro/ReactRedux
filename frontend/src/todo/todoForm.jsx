import React from 'react'
import { connect } from 'react-redux'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'
import { bindActionCreators } from 'redux'
import * as actions from './todoActions'
const TodoForm = porps => {

    const keyHandle = (e) => {
        if (e.key == 'Enter')
            e.shiftKey ? porps.handleSearch() : porps.handleAdd()
        else if (e.key == 'Escape')
            porps.handleClear()

    }
    return (
        <div role="form" className='todoForm'>
            <Grid cols="12 9 10">
                <input type="text" id="description" className="form-control"
                    placeholder='adicione uma tarefa'
                    onChange={porps.changeDescription}
                    onKeyUp={keyHandle}
                    value={porps.description} />
            </Grid>
            <Grid cols="12 3 2">
                <IconButton style='primary' icon='plus'
                    onClick={porps.handleAdd} />
                <IconButton style='info' icon='search'
                    onClick={porps.handleSearch} />
                <IconButton style="default" icon="close"
                    onClick={porps.handleClear} />
            </Grid>
        </div>
    )
}

const mapStateToProps = state => ({ description: state.todo.description })
const mapDispachToProps = dispach => bindActionCreators({ ...actions }, dispach)
export default connect(mapStateToProps, mapDispachToProps)(TodoForm)