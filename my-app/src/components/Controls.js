import { extend, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
import React, { useRef } from 'react'

extend({OrbitControls})

const Controls = () => {
  const {camera, gl} = useThree()
  const orbitRef = useRef()

  useFrame(() => {
    orbitRef.current.update()
  })

  return (
    <orbitControls
      autoRotate
      //both together limit control movement to rotate about z-axis
      maxPolarAngle={Math.PI / 3} // handles forward tilt?
      minPolarAngle={Math.PI / 3} // handles backwards tilt?
      args={[
        camera, gl.domElement
      ]}
      ref={orbitRef}
    />
      
  )
}

export default Controls
