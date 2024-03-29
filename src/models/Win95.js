/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/win95/win95.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.win95.geometry} material={materials.palette} rotation={[Math.PI / 2, 0, 0]} />
    </group>
  )
}

useGLTF.preload('/win95.gltf')
