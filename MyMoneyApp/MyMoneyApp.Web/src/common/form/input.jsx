import React from 'react'

export default props => (
    <input {...props.input}//espalha as propriedades para o redux-form funcionar
    className='form-control'
    placeholder={props.placeholder}
    readOnly={props.readOnly}
    type={props.type}/>
)