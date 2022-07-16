import type { TIntervalTimer } from '../typescript/type'

import { useCallback, useEffect, useRef } from 'react'

interface IUseInterval {
  (callback: Function, delay: number): [
    () => void,
    () => void,
    () => void,
    TIntervalTimer
  ]
}

interface IIntervalCallback {
  callback: Function | null
  delay: number
}

export const useInterval: IUseInterval = (callback, delay) => {
  const savedCallbackRef = useRef<IIntervalCallback>({
    callback: null,
    delay: 0,
  })
  const intervalIDRef = useRef<TIntervalTimer>()

  const startInterval = useCallback(() => {
    intervalIDRef.current = setInterval(() => {
      if (savedCallbackRef.current.callback) savedCallbackRef.current.callback()
    }, savedCallbackRef.current.delay)
  }, [])

  const stopInterval = useCallback(() => {
    if (intervalIDRef.current) {
      clearInterval(intervalIDRef.current)
      intervalIDRef.current = null
    }
  }, [])

  useEffect(() => {
    savedCallbackRef.current = { callback, delay }
  }, [callback, delay])

  const reloadInterval = useCallback(() => {
    stopInterval()
    startInterval()
  }, [startInterval, stopInterval])

  return [startInterval, stopInterval, reloadInterval, intervalIDRef.current]
}
