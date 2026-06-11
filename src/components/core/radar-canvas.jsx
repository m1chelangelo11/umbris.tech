import { useEffect, useRef } from 'react'

export default function RadarCanvas({
  className = 'pointer-events-none absolute inset-0 h-full w-full',
  accentRgb = '254,113,65',
  ringCount = 30,
  ringSpeed = 0.02,
  maxAlpha = 0.78,
  originX = 0.78,
  originY = 0.5,
  blips = true,
}) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    function resize() {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    const resizeObserver = new ResizeObserver(resize)
    resizeObserver.observe(canvas)

    const activeBlips = []
    let nextSpawn = 0
    let rafId

    function spawnBlip(t, W, H) {
      activeBlips.push({
        x: W * 0.05 + Math.random() * W * 0.9,
        y: H * 0.05 + Math.random() * H * 0.9,
        born: t,
        life: 2 + Math.random() * 3.5,
        size: 1.2 + Math.random() * 2,
        maxAlpha: 0.22 + Math.random() * 0.45,
      })
    }

    function frame(ts) {
      const t = ts * 0.001
      const W = canvas.width
      const H = canvas.height
      ctx.clearRect(0, 0, W, H)
      const ox = W * originX
      const oy = H * originY
      const maxR = Math.hypot(W, H) * 1.1

      for (let i = 0; i < ringCount; i++) {
        const phase = (i / ringCount + t * ringSpeed) % 1
        const r = phase * maxR
        const alpha = (1 - phase) ** 1.3 * maxAlpha
        ctx.beginPath()
        ctx.arc(ox, oy, r, 0, Math.PI * 2)
        ctx.strokeStyle = `rgba(${accentRgb},${alpha.toFixed(3)})`
        ctx.lineWidth = 1.1
        ctx.stroke()
      }

      if (blips) {
        if (t > nextSpawn) {
          spawnBlip(t, W, H)
          nextSpawn = t + 0.35 + Math.random() * 0.7
        }

        for (let i = activeBlips.length - 1; i >= 0; i--) {
          const b = activeBlips[i]
          const prog = (t - b.born) / b.life
          if (prog >= 1) {
            activeBlips.splice(i, 1)
            continue
          }
          let a
          if (prog < 0.15) a = b.maxAlpha * (prog / 0.15)
          else if (prog > 0.75) a = b.maxAlpha * (1 - (prog - 0.75) / 0.25)
          else a = b.maxAlpha

          ctx.beginPath()
          ctx.arc(b.x, b.y, b.size, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(${accentRgb},${a.toFixed(3)})`
          ctx.fill()
        }
      }

      rafId = requestAnimationFrame(frame)
    }
    rafId = requestAnimationFrame(frame)

    return () => {
      cancelAnimationFrame(rafId)
      resizeObserver.disconnect()
    }
  }, [accentRgb, ringCount, ringSpeed, maxAlpha, originX, originY, blips])

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />
}
