import React from 'react'
import {Canvas} from '@react-three/fiber'
import Box from './components/Box'
import Controls from './components/Controls'
import Plane from './components/Plane'
const App = () => {

  
  return (
    <Canvas>
      <Controls/>
      <Box/>
      <Plane/>
    </Canvas>
  )
}

export default App
