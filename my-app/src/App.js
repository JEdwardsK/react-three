import React from 'react'
import {Canvas} from '@react-three/fiber'
import Box from './components/Box'
import Controls from './components/Controls'
const App = () => {

  
  return (
    <Canvas>
      <Controls/>
      <Box/>
    </Canvas>
  )
}

export default App
