import React from 'react'
import ReactDOM from 'react-dom'
import Family from './family'
import Member from './member'
// React DOM somente quando precisar renderizar tudo


ReactDOM.render(
        <Family lastName='Silva'>
            <Member name='Guilherme'/>
            <Member name='Marisco'/>
            <Member name='Ticiane'/>
            <Member name='Lucas'/>    
        </Family>
, document.getElementById('app'))