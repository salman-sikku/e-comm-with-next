import React, { useEffect, useState } from 'react'

function useMousePostion() {
  const [mousePostion, setMousePostion] = useState({x:0, y:0});

  const updatePostion = (e: MouseEvent)=>{
    setMousePostion({x: e.clientX, y: e.clientY});
  }

  useEffect(()=>{
    window.addEventListener('mousemove', updatePostion);
    return ()=>{
        window.addEventListener('mousemove', updatePostion)
    }
  })
  return mousePostion
}

export default useMousePostion
