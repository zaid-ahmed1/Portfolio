import React from 'react';
import { Html, useProgress } from '@react-three/drei';

const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html>
      <span className="canvas-load"></span>
      <p
        style={{
          fontSize: 14,
          color: '#FEFEFE',
          fontWeight: 800,
          marginTop: 40
        }}
      >{progress.toFixed(1)}%</p>
    </Html>
    )
}

export default Loader