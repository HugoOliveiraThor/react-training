import React from 'react'
import ReactDOM from 'react-dom'
import  {combineReducers, createStore} from 'redux'
import { Provider } from 'react-redux'

import Field from './field'
// React DOM somente quando precisar renderizar tudo

// Reducer são funcoes 
const reducers = combineReducers({
    field: () => ({value:'OLA'})
})

ReactDOM.render(
    <Provider store={createStore(reducers)}>
    <Field initialValue='teste' />
    </Provider>
, document.getElementById('app'))