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
      args={[
        camera, gl.domElement
      ]}
      ref={orbitRef}
    />
      
  )
}

export default Controls
