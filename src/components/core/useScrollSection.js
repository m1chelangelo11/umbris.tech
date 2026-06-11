import { createContext, useContext } from 'react'

export const ScrollSectionContext = createContext(null)

export function useScrollSection() {
  return useContext(ScrollSectionContext)
}
