import React from 'react'
import ReactDOM from 'react-dom'
import {Primeiro,Segundo} from './components'
// React DOM somente quando precisar renderizar tudo


ReactDOM.render(
    <div>
        <Primeiro />
        <Segundo />
    </div>
, document.getElementById('app'))