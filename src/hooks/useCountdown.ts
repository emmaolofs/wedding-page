import { useEffect, useState } from 'react'
import { getCountdown, type CountdownParts } from '../lib/dateUtils'

export function useCountdown(target: Date): CountdownParts {
  const [countdown, setCountdown] = useState(() => getCountdown(target))

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(getCountdown(target))
    }, 1000)

    return () => clearInterval(interval)
  }, [target])

  return countdown
}
