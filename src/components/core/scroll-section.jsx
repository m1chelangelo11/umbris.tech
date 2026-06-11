import { useRef } from 'react'
import { useInView } from 'motion/react'
import { ScrollSectionContext } from './useScrollSection'

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

  return (
    <ScrollSectionContext.Provider value={isInView}>
      <div ref={ref} className={className}>
        {children}
      </div>
    </ScrollSectionContext.Provider>
  )
}
