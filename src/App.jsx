import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Canvas
    camera={{poisiion: [3,3,3],}}>
      <color attach="background" args={['#202020']} />
      <OrbitControls/>
      <mesh>
        <boxGeometry args={[0.5, 0.5, 0.5]} />
        <meshNormalMaterial/>
      </mesh>
    </Canvas>
    </>
)
}

export default App
