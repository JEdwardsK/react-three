import React, { /*useRef,*/ useState } from 'react'
import {useSpring, a} from '@react-spring/three'
import { extend } from '@react-three/fiber'
const Box = () => {
  const [hover, setHover] = useState(false)
  const [active, setActive] = useState(false)
  // react spring can take static elements
  const props = useSpring({
    scale: active ? [2,2,2] : [1,1,1],
    color: hover ? "red" : "grey"

  })
  // const meshRef = useRef()
  // useFrame(() => {
  //   meshRef.current.rotation.y += .01
  //   meshRef.current.rotation.z += .01
  // })


  const handlePointer = () => setHover(!hover)
  const handleClick = () => setActive(!active)

  return (
    <a.mesh
      // ref={meshRef}
      onPointerOver={handlePointer}
      onPointerOut={handlePointer}
      onClick={handleClick}
      scale={props.scale}
    >
      <ambientLight/>
      <spotLight
        position={[0,5,10]}
      />
      <boxBufferGeometry
        attach="geometry"
        args={[1, 1, 1]}
      />
      <a.meshPhysicalMaterial
        attach="material"
        color={props.color}
      />
    </a.mesh>
  )
}

export default Box
