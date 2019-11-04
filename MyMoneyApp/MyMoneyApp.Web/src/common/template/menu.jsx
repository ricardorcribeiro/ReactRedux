import React from 'react'

import MenuItem from './menuItem'
import MenuItemTree from './menuTree'


export default props =>
    <ul className="sidebar-menu">
        <MenuItem path='#/' label='Dashboard' icon='dashboard'/>
        <MenuItemTree label='Cadastro' icon='edit'>
            <MenuItem path='#billingCycles' label='Ciclo de Pagamento' icon='usd'/>
        </MenuItemTree>
    </ul>