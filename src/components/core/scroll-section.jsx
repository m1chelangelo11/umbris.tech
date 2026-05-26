import { createContext, useContext, useEffect, useRef } from 'react'
import { useInView } from 'motion/react'
import { useLenis } from '@/components/layout/LenisProvider'

const ScrollSectionContext = createContext(null)

export function useScrollSection() {
  return useContext(ScrollSectionContext)
}

/**
 * Jedna animacja scroll dla całej sekcji — wszystkie ScrollText w środku startują razem.
 */
export function ScrollSection({
  children,
  className = '',
  once = true,
  amount = 0.25,
  margin = '0px 0px -12% 0px',
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, amount, margin })
  const lenisRef = useLenis()

  useEffect(() => {
    if (isInView) {
      lenisRef?.current?.resize()
    }
  }, [isInView, lenisRef])

  return (
    <ScrollSectionContext.Provider value={isInView}>
      <div ref={ref} className={className}>
        {children}
      </div>
    </ScrollSectionContext.Provider>
  )
}
