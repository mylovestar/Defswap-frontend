import { useEffect, useRef } from 'react';

const CanvasComponent = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Drawing logic goes here

    // Clean up on unmount
    return () => {
      // Clean up resources if needed
    };
  }, []);

  return <canvas ref={canvasRef} width={500} height={500} />;
};

export default CanvasComponent;
