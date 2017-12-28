import React from 'react'
// Deve jeito ele somente aceita um componente filho
export default props => (
    <div>
        <h1>Família</h1>
        {React.cloneElement(props.children,{...props})}
    </div>
)