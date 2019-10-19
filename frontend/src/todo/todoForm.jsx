import React, { Component } from 'react'
import { connect } from 'react-redux'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'
import { bindActionCreators } from 'redux'
import * as actions from './todoActions'

class TodoForm extends Component {
    constructor(props) {
        super(props)
        this.keyHandle = this.keyHandle.bind(this)
    }

    componentWillMount(){ // esse e um componente do siculo de vida // so pode ser usado quando o componente e de classe
        this.props.search()
    }

    keyHandle(e) {
        if (e.key == 'Enter')
            e.shiftKey ? this.props.handleSearch() : this.props.handleAdd()
        else if (e.key == 'Escape')
            this.props.handleClear()

    }

    render() {
        return (
            <div role="form" className='todoForm'>
                <Grid cols="12 9 10">
                    <input type="text" id="description" className="form-control"
                        placeholder='adicione uma tarefa'
                        onChange={this.props.changeDescription}
                        onKeyUp={this.eyHandle}
                        value={this.props.description} />
                </Grid>
                <Grid cols="12 3 2">
                    <IconButton style='primary' icon='plus'
                        onClick={this.props.handleAdd} />
                    <IconButton style='info' icon='search'
                        onClick={this.props.handleSearch} />
                    <IconButton style="default" icon="close"
                        onClick={this.props.handleClear} />
                </Grid>
            </div>
        )
    }

}

const mapStateToProps = state => ({ description: state.todo.description })
const mapDispachToProps = dispach => bindActionCreators({ ...actions }, dispach)
export default connect(mapStateToProps, mapDispachToProps)(TodoForm)