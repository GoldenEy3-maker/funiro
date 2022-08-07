import { useCallback, useEffect, useState } from 'react'

interface IAdaptiveValue {
  (min: number, max: number, resolution?: number, mediaRes?: number): number
}

export const useWindow = () => {
  const [windowWidth, setWindowWidth] = useState(0)

  const adaptiveValue: IAdaptiveValue = useCallback(
    (min, max, resolution = 320, mediaRes = 1920) => {
      const result =
        min +
        (max - min) * ((windowWidth - resolution) / (mediaRes - resolution))

      if (min > max) {
        if (result <= max) return max
        if (result >= min) return min
      } else {
        if (result >= max) return max
        if (result <= min) return min
      }

      return result
    },
    [windowWidth]
  )

  useEffect(() => {
    const resizeWindowHandler = () => setWindowWidth(window.innerWidth)

    resizeWindowHandler()

    window.addEventListener('resize', resizeWindowHandler)
    window.addEventListener('load', resizeWindowHandler)

    return () => {
      window.removeEventListener('resize', resizeWindowHandler)
      window.removeEventListener('load', resizeWindowHandler)
    }
  }, [])

  return { windowWidth, adaptiveValue }
}
