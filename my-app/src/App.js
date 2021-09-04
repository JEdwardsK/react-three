import React from 'react'
import {Canvas} from '@react-three/fiber'
import Box from './components/Box'
import Controls from './components/Controls'
import Plane from './components/Plane'
const App = () => {

  
  return (
    <Canvas
      camera={{position: [0, 0, 5]}}
    >
      <fog 
        attach="fog"
        args={["white", 5, 15]}
        />
      <Controls/>
      <Box/>
      <Plane/>
    </Canvas>
  )
}

export default App
