import React, {Component} from 'react'
import axios from 'axios'

import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

const URL = 'https://localhost:5001/api/todo'

export default class Todo extends Component{
    constructor(props){
        super(props)
        this.state = { description: '', list: [] }

        this.handleAdd = this.handleAdd.bind(this) //o this nesse contesto e a classe pois esta no contrutor dela
        this.handleChange = this.handleChange.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
        this.handleMarkAsDone = this.handleMarkAsDone.bind(this)
        this.handleMarkAsPending = this.handleMarkAsPending.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.handleClear = this.handleClear.bind(this)
        this.refhesh = this.refhesh.bind(this)
        
        this.refhesh()
    }

    refhesh(description = ''){
        const search = description ? `?description=${description}` : ''
        axios.get(URL + search).then(resul=> this.setState({...this.state, description, list: resul.data}))
    }
    handleSearch(){
        this.refhesh(this.state.description)
    }

    handleChange(e){
        this.setState({...this.state, description : e.target.value })
    }

    handleAdd(){
        const description = this.state.description;
        axios.post(URL,{description}).then(resp=> this.refhesh())
    }

    handleRemove(todo){
        axios.delete(`${URL}/${todo._id}`)
        .then(resp=> this.refhesh(this.state.description))
    }

    handleMarkAsDone(todo){
        axios.post(`${URL}/Editar`, {...todo, done: true})
        .then(resp=> this.refhesh(this.state.description));
    }

    handleClear(){
        this.refhesh();
    }

    handleMarkAsPending(todo){
        axios.post(`${URL}/Editar`, {...todo, done: false})
        .then(resp=> this.refhesh(this.state.description));
    }
    
    render(){
        return(
            <div>
                <PageHeader name="Tarefas" small="Cadastro"/>
                <TodoForm 
                    description={this.description}
                    handleChange={this.handleChange}
                    handleSearch={this.handleSearch}
                    handleClear={this.handleClear}
                    handleAdd={this.handleAdd} />
                <TodoList list={this.state.list} 
                    handleMarkAsDone={this.handleMarkAsDone}
                    handleMarkAsPending={this.handleMarkAsPending}
                    handleRemove={this.handleRemove}
                    />
            </div>
        )
    }
}