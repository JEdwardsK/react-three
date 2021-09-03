import React, { useState } from 'react'
import {useSpring, a} from 'react-spring/three'
const Box = () => {
  const [hover, setHover] = useState(false)
  const [active, setActive] = useState(false)
  // react spring can take static elements
  const props = useSpring({})


  const handlePointer = () => setHover(!hover)
  const handleClick = () => setActive(!active)

  return (
    <mesh
      onPointerOver={handlePointer}
      onPointerOut={handlePointer}
      onClick={handleClick}
      scale={active ? [2,2,2] : [1,1,1]}
    >
        <boxBufferGeometry
          attach="geometry"
          args={[1, 1, 1]}
        />
        <meshBasicMaterial
          attach="material"
          color={hover ? "red" : "grey"}
        />
      </mesh>
  )
}

export default Box
