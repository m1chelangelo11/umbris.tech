import { createContext, useContext, useEffect, useRef } from 'react'
import Lenis from 'lenis'

const LenisContext = createContext(null)

export function useLenis() {
  return useContext(LenisContext)
}

const NAV_OFFSET = 64

export default function LenisProvider({ children }) {
  const lenisRef = useRef(null)

  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
      anchors: {
        offset: -NAV_OFFSET,
      },
    })

    lenisRef.current = lenis

    if (!window.location.hash) {
      lenis.scrollTo(0, { immediate: true })
    }

    const resizeObserver = new ResizeObserver(() => {
      lenis.resize()
    })
    resizeObserver.observe(document.documentElement)

    return () => {
      resizeObserver.disconnect()
      lenis.destroy()
      lenisRef.current = null
    }
  }, [])

  return (
    <LenisContext.Provider value={lenisRef}>{children}</LenisContext.Provider>
  )
}
