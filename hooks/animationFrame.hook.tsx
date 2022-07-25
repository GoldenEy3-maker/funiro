import { useEffect, useRef } from 'react'

interface IUseAnimationFrameHook {
  (callback: (deltaTime: number) => void): void
}

export const useAnimationFrame: IUseAnimationFrameHook = (callback) => {
  const requestRef = useRef<number>()
  const previousTimeRef = useRef<number>()

  const animate: FrameRequestCallback = (time) => {
    if (previousTimeRef.current) {
      const deltaTime = time - previousTimeRef.current
      callback(deltaTime)
    }

    previousTimeRef.current = time
    requestRef.current = requestAnimationFrame(animate)
  }

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate)
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current)
    }
  })
}
