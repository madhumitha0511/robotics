import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const pos = useRef({ x: 0, y: 0 })
  const ring = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY }
      if (dotRef.current) {
        dotRef.current.style.left = e.clientX + 'px'
        dotRef.current.style.top = e.clientY + 'px'
      }
    }

    const animate = () => {
      ring.current.x += (pos.current.x - ring.current.x) * 0.12
      ring.current.y += (pos.current.y - ring.current.y) * 0.12
      if (ringRef.current) {
        ringRef.current.style.left = ring.current.x + 'px'
        ringRef.current.style.top = ring.current.y + 'px'
      }
      requestAnimationFrame(animate)
    }
    animate()

    const onEnter = () => {
      if (dotRef.current) {
        dotRef.current.style.width = '12px'
        dotRef.current.style.height = '12px'
        dotRef.current.style.opacity = '0.6'
      }
      if (ringRef.current) {
        ringRef.current.style.width = '44px'
        ringRef.current.style.height = '44px'
      }
    }
    const onLeave = () => {
      if (dotRef.current) {
        dotRef.current.style.width = '6px'
        dotRef.current.style.height = '6px'
        dotRef.current.style.opacity = '1'
      }
      if (ringRef.current) {
        ringRef.current.style.width = '28px'
        ringRef.current.style.height = '28px'
      }
    }

    document.addEventListener('mousemove', onMove)
    document.querySelectorAll('a, button, .card-hover').forEach(el => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    return () => {
      document.removeEventListener('mousemove', onMove)
    }
  }, [])

  return (
    <>
      <div ref={dotRef} className="cursor" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  )
}
