import React from 'react'
import Filho from './Filho'

export default props => {
    const nofificarSaidaDoFilho = lugar => alert(`liberado para ${lugar}`)

    return (
        <div>
            <Filho nofificarSaida={nofificarSaidaDoFilho}/>
        </div>
    )
}