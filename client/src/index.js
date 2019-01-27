import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { configureStore } from './configureStore'

const store = configureStore()

import App from './components/App'

const Root = ({store}) => (
    <Provider store={store}>
        <App/>
    </Provider>
)
render(
    <Root store={store}/> , document.getElementById('beacon')
)