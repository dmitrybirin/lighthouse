import React from 'react'
import ColorState from './ColorState'
import ColorButton from './ColorButton'

const App = () => (
<div>
    <ColorState/>
    <ColorButton color="red"/>
    <ColorButton color="green"/>
    <ColorButton color="blue"/>
</div>
)

export default App