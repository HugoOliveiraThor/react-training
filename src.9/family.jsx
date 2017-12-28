import React from 'react'
import { childrenWithProps } from '../utils/reactUtils'
// Deve jeito ele somente aceita um componente filho
export default props => (
    <div>
        <h1>Família</h1>
        {childrenWithProps(props.children,props)}
    </div>
)