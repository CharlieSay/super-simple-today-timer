'use client'
import moment from 'moment'
import { useEffect, useState } from 'react'

export const Timer = () => {
  const [time, setTime] = useState<string>()
  useEffect(() => {
    const interval = setInterval(
      () => setTime(moment().format('h:mm:ss a')),
      1000,
    )

    return () => clearInterval(interval)
  }, [time])
  return <h1>{time}</h1>
}
