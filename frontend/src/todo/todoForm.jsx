import React from 'react'
import Grid from '../template/grid'

export default porps => 
<div role="form" className='todoForm'>
    <Grid cols="12 9 10">
        <input type="text" id="description" className="form-control" placeholder='adicione uma tarefa'/>
    </Grid> 
    <Grid cols="12 3 2">
        <button className="btn btn-primary"> 
        <i className="fa fa-plus"></i>    
        </button>
    </Grid>
</div>