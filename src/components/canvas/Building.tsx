import Wall from '@/components/canvas/Wall'
import WindowFrame from '@/components/canvas/WindowFrame'
import Glass from '@/components/canvas/Glass'
import * as THREE from 'three'
import { useRef, useState, useEffect } from 'react'
import { useFBX, useGLTF } from '@react-three/drei'
import { Physics, useBox, useTrimesh, usePlane, } from '@react-three/cannon'
import { useLoader } from '@react-three/fiber'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Pathfinding, PathfindingHelper } from 'three-pathfinding'
import { useThree, useFrame } from '@react-three/fiber'

import useStore from '@/helpers/store'

const ObjMesh = (props:any) => {

  let vertices: ArrayLike<number>
  let indices: ArrayLike<number>
  let isMesh = false

  if(props.geometry){
    vertices =props.geometry.attributes.position.array;
    indices = props.geometry.index.array;
    if(vertices){
      for(let i=0;i<vertices.length;i++)
        vertices[`${i}`]=vertices[`${i}`]*0.3
    }
    isMesh = true      
  }
  const [ref] = useTrimesh(() => ({
    args: [vertices, indices],
    mass: 0.0,
  }))

  return <mesh ref={ref} geometry={props.geometry} scale={isMesh?[1, 1, 1]:[3, 3, 3]} material={props.material} />
}

const Building = () => {
  const playerP = useRef(new THREE.Vector3())
  const targetP = useRef(new THREE.Vector3())
  const playerPosition = useStore((s) => s.playerPosition)
  const nextPlayerPosition = useStore((s) => s.nextPlayerPosition)
  const f = useGLTF('/3D/Building4/navmesh-gallery2.glb')

  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    position: [0, 0, 0]
  }))

  return (
    <>
      {/* <primitive position={[0, 15, 0]} scale={[0.1, 0.1, 0.1]} object={f.scene} dispose={null} /> */}
      
      {Object.entries(f.nodes).map(([name, obj]) => {
        if(obj['name']==='Navmesh')
          return <mesh geometry={obj['geometry']} scale={[0.91, 0.91, 0.91]} material={obj['material']} />      
        else
          return <ObjMesh key={name} geometry={obj['geometry']} material={obj['material']}/>        
      })}
      
      {/* <primitive object={f.scene} dispose={null}  /> */}
      {/* <Wall
        position={[0, 0, -13.5]}
        modelUrl={'/3D/Wall/scene.gltf'}
        mapUrl={'/3D/Wall/Textures/White_Wall.jpg'}
        normalMapUrl={'/3D/Wall/Textures/White_Wall_NORMAL.jpg'}
      /> */}

      {/* side windows */}
      {/* <WindowFrame
        scale={[0.008, 0.008, 0.008]}
        position={[6.5, 8.5, -15]}
        rotation={[0, Math.PI, 0]}
        modelUrl={'/3D/WindowNoGlassL/scene.gltf'}
        mapUrl={'/3D/WindowNoGlassL/Textures/Material_49_baseColor.png'}
      /> */}
      {/* <WindowFrame
        scale={[0.008, 0.008, 0.008]}
        position={[-6.5, 8.5, -15]}
        rotation={[0, Math.PI, 0]}
        modelUrl={'/3D/WindowNoGlassR/scene.gltf'}
        mapUrl={'/3D/WindowNoGlassR/Textures/Material_49_baseColor.png'}
      /> */}
      {/* <Glass
        scale={[0.008, 0.008, 0.008]}
        position={[6.5, 8.5, -15]}
        rotation={[0, 0, 0]}
        url={'/3D/WindowGlassL/scene.gltf'}
      /> */}
      {/* <Glass
        scale={[0.008, 0.008, 0.008]}
        position={[-6.5, 8.5, -15]}
        rotation={[0, 0, 0]}
        url={'/3D/WindowGlassR/scene.gltf'}
      /> */}

      {/* roof */}
      {/* <WindowFrame
        scale={[2.7, 2.7, 2.7]}
        position={[0, 27, 13.2]}
        rotation={[0, 0, 0]}
        modelUrl={'/3D/RoofNoGlass/scene.gltf'}
        mapUrl={'/3D/RoofNoGlass/Textures/Material_49_baseColor.png'}
      />
      <Glass scale={[2.7, 2.7, 2.7]} position={[0, 27, 13.2]} rotation={[0, 0, 0]} url={'/3D/RoofGlass/scene.gltf'} /> */}
    </>
  )
}

export default Building
