import { useEffect, useRef, useState } from 'react'
import { useSpring } from '@react-spring/web'

// Custom hook for one-time scroll animations
export const useScrollAnimation = (delay = 0, threshold = 0.3) => {
  const [hasAnimated, setHasAnimated] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const element = ref.current
    if (!element || hasAnimated) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsInView(true)
          setHasAnimated(true)
          observer.unobserve(element)
        }
      },
      { threshold }
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [hasAnimated, threshold])

  const animation = useSpring({
    opacity: isInView ? 1 : 0,
    transform: isInView ? 'translateY(0px)' : 'translateY(50px)',
    config: { tension: 120, friction: 25 },
    delay: isInView ? delay : 0,
  })

  return [ref, animation]
}

export const useStaggeredAnimation = (items, delay = 100) => {
  const [hasAnimated, setHasAnimated] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const element = ref.current
    if (!element || hasAnimated) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsInView(true)
          setHasAnimated(true)
          observer.unobserve(element)
        }
      },
      { threshold: 0.1 }
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [hasAnimated])

  const animations = items.map((_, index) => {
    return useSpring({
      opacity: isInView ? 1 : 0,
      transform: isInView ? 'translateY(0px)' : 'translateY(50px)',
      config: { tension: 120, friction: 25 },
      delay: isInView ? index * delay : 0,
    })
  })

  return [ref, animations]
}

export const useHoverAnimation = () => {
  const [isHovered, setIsHovered] = useState(false)
  
  const animation = useSpring({
    transform: isHovered ? 'scale(1.05)' : 'scale(1)',
    boxShadow: isHovered 
      ? '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
      : '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    config: { tension: 200, friction: 15 },
  })

  return [animation, setIsHovered]
}

export const useSlideAnimation = (direction = 'left', delay = 0) => {
  const [hasAnimated, setHasAnimated] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const element = ref.current
    if (!element || hasAnimated) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsInView(true)
          setHasAnimated(true)
          observer.unobserve(element)
        }
      },
      { threshold: 0.3 }
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [hasAnimated])

  const getTransform = () => {
    switch (direction) {
      case 'left':
        return isInView ? 'translateX(0px)' : 'translateX(-100px)'
      case 'right':
        return isInView ? 'translateX(0px)' : 'translateX(100px)'
      case 'up':
        return isInView ? 'translateY(0px)' : 'translateY(100px)'
      case 'down':
        return isInView ? 'translateY(0px)' : 'translateY(-100px)'
      default:
        return isInView ? 'translateY(0px)' : 'translateY(50px)'
    }
  }

  const animation = useSpring({
    opacity: isInView ? 1 : 0,
    transform: getTransform(),
    config: { tension: 120, friction: 25 },
    delay: isInView ? delay : 0,
  })

  return [ref, animation]
}

export const useFadeAnimation = (delay = 0) => {
  const [hasAnimated, setHasAnimated] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const element = ref.current
    if (!element || hasAnimated) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsInView(true)
          setHasAnimated(true)
          observer.unobserve(element)
        }
      },
      { threshold: 0.3 }
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [hasAnimated])

  const animation = useSpring({
    opacity: isInView ? 1 : 0,
    config: { tension: 120, friction: 25 },
    delay: isInView ? delay : 0,
  })

  return [ref, animation]
} 