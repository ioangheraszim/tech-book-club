// hooks/useInView.js
import { useEffect, useState, useRef } from 'react'

export default function useInView(options = {}) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
        observer.unobserve(entry.target)
      }
    }, options)

    if (ref.current) observer.observe(ref.current)

    return () => observer.disconnect()
  }, [ref, options])

  return [ref, isVisible]
}
