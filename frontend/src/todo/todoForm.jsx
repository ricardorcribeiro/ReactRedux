import React from 'react'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'

export default porps => 
<div role="form" className='todoForm'>
    <Grid cols="12 9 10">
        <input type="text" id="description" className="form-control" 
        placeholder='adicione uma tarefa'
        onChange={porps.handleChange}
        value={porps.description}/>
    </Grid> 
    <Grid cols="12 3 2">
        <IconButton style='primary' icon='plus'
        onClick={porps.handleAdd}/>
    </Grid>
</div>