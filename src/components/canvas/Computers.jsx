import React, { useEffect, useState } from 'react';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader'

const Computers = ( isMobile ) => {
  const computer = useGLTF('/desktop_pc/untitled1.gltf')
  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black'/>
      <pointLight intensity={1} color='#828282'/>
      <spotLight
        position={[-20,50,10]}
        angle={0.12}
        intensity={0.05}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.6}
        rotation={[0,-Math.PI/4,0]}
        position={[1,-4,0]}
      />
    </mesh>
    )
}

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect (() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)');
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    }
    mediaQuery.addEventListener('change', handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange)
    }
  }, [])

  return(
    <Canvas
    frameloop="demand"
    shadows
    camera={{ position: [20, 3, 5], fov: 25 }}
    gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}/>
        <Computers isMobile={isMobile}/>
      </Suspense>
      <Preload all />
    </Canvas>

  )
}

export default ComputersCanvas