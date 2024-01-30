'use client'
import { useState } from "react";
import Progress from "./Progress";

export default Loader = () => {
  const [progress, setProgress] = useState(0)

  // Simulate loading progress
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => Math.min(prevProgress + 0.1, 1))
    }, 500)

    return () => clearInterval(interval)
  }, [])

  return (
    // ... other page content
    <Progress progress={progress} />
  )
}
