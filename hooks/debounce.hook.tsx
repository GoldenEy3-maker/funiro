import { TIntervalTimer } from '../typescript/type'

import { useCallback, useEffect, useRef, useState } from 'react';

interface IDebounceStateHook {
  (value: any, delay?: number): any
}

interface IDebouncedFunction {
  (callback: Function, delay?: number): void
}

interface IDebounceFunctionHook {
  (): [IDebouncedFunction, () => void]
}

export const useDebounceState: IDebounceStateHook = (value, delay = 1000) => {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)


    return () => clearTimeout(timeout)
  }, [value, delay])

  return debouncedValue
}

export const useDebounceFunction: IDebounceFunctionHook = () => {
  const timeoutID = useRef<TIntervalTimer>(null)

  const clearTimeoutID = () => {
    if (timeoutID.current) {
      clearTimeout(timeoutID.current)
      timeoutID.current = null
    }
  }

  const debouncedFunction: IDebouncedFunction = useCallback((callback, delay) => {
    clearTimeoutID()

    timeoutID.current = setTimeout(callback, delay)
  }, [])

  return [debouncedFunction, clearTimeoutID]
}