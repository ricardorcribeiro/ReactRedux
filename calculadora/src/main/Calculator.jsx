import React, {Component} from 'react'
import './Calculator.css'
import Button from '../Components/Button'
import Display from '../Components/Display'

const initialState = {
    displayValue: '0',
    clearDiplay: false,
    operation: null,
    values: [0,0],
    current: 0
}

export default class Calculator extends Component{

    state = { ... initialState }//variavel "state" e uma variavel que e do react
    clearMemory(){
        this.setState({... initialState})
    }

    setOperation(operation){
        if(this.state.current === 0)
            this.setState({operation, current: 1,clearDiplay: true})
        else{
            const equals = operation === '='
            const currentOperation = this.state.operation
        }
    }

    addDigit(n){
        if(n === '.' && this.state.displayValue.includes('.')) return
            
        const clearDiplay = this.state.displayValue === '0' ||
            this.state.clearDiplay
        
        const currentValue = clearDiplay ? '' : this.state.displayValue
        const displayValue = currentValue + n
        this.setState({displayValue, clearDiplay: false})

        if(n !== '.'){
            const i = this.state.current
            const newValue = parseFloat(displayValue)
            const values = [...this.state.values]
            values[i] = newValue
            this.setState({values})
console.log(values)
        }
    }

    render(){

        const addDigit = n => this.addDigit(n)
        const setOperation = op => this.setOperation(op)

        return(
            <div className='calculator'>
                <Display value={this.state.displayValue}/>
                <Button label="AC" click={()=>this.clearMemory()} triple/>{/*esse triple sao ternarios que setam classes de acordo com o a logica que eu coloquei*/}
                <Button label="/" click={setOperation} operation/>
                <Button label="7" click={addDigit}/>
                <Button label="8" click={addDigit}/>
                <Button label="9" click={addDigit}/>
                <Button label="*" click={setOperation} operation/>
                <Button label="4" click={addDigit}/>
                <Button label="5" click={addDigit}/>
                <Button label="6" click={addDigit}/>
                <Button label="-" click={setOperation} operation/>
                <Button label="1" click={addDigit}/>
                <Button label="2" click={addDigit}/>
                <Button label="3" click={addDigit}/>
                <Button label="+" click={setOperation} operation/>
                <Button label="0" click={addDigit} double/>
                <Button label="." click={addDigit}/>
                <Button label="=" click={setOperation} operation/>
            </div>
        )
    }
}