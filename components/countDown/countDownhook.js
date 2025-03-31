import { useEffect, useState, useRef } from 'react'

const useCountDown = (initialTime = 60) => {
  let timerRef = useRef(null)
  const [countdown, setCountdown] = useState(initialTime);
  const [isCounting, setIsCounting] = useState(false);

  const startCountDown = () => {
    if (!isCounting) {
      setCountdown(initialTime)
      setIsCounting(true)
      timerRef.current = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(timerRef.current)
            setIsCounting(false)
            return initialTime
          }
          return prev - 1
        }
        )
      }, 1000)
    }
  }

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  return {
    countdown,
    isCounting,
    startCountDown
  }
}

export default useCountDown

