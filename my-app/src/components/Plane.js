import React from 'react'

const Plane = () => {
  return (
    <mesh
      rotation={[-Math.PI / 2, 0, 0]}
      >
      <planeBufferGeometry
        attach="geometry"
        args={[5, 5]}
      />
      <meshPhysicalMaterial
        attach="material"
        color="blue"
      />
    </mesh>
  )
}

export default Plane
