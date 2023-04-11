import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Suspense fallback={null}>
      <Canvas>
        <App />
      </Canvas>
    </Suspense>
  </React.StrictMode>
)
