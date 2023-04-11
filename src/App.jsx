import {
  Environment,
  OrbitControls,
  PerspectiveCamera
} from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import { useEffect } from 'react'
import Scene from './components/Scene'

const App = () => {
  const state = useThree()

  useEffect(() => {
    state.gl.toneMappingExposure = 5
  }, [state.gl])

  return (
    <>
      <OrbitControls
        target={[0.2, 0.806, 0.427]}
        maxPolarAngle={Math.PI * 0.45}
      />

      <PerspectiveCamera
        makeDefault
        fov={33}
        position={[-0.07, 16.41, -24.1]}
      />

      <Scene />

      <Environment
        background={'only'}
        files={'/assets/textures/envmap_blur.hdr'}
        ground={{ height: 100, radius: 300 }}
      />

      <Environment
        background={false}
        files={'/public/assets/textures/envmap.hdr'}
      />
    </>
  )
}

export default App
