import React from 'react'
import ReactDOM from 'react-dom'
import ClassComponent from './classComponent'
// React DOM somente quando precisar renderizar tudo


ReactDOM.render(<ClassComponent label='Contador' initialValue={10} />
, document.getElementById('app'))