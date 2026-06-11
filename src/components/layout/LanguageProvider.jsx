import { useEffect, useState } from 'react'
import { translations } from '../../data/content'
import { LanguageContext } from './useLanguage'

const STORAGE_KEY = 'umbris-lang'

function getInitialLang() {
  if (typeof window === 'undefined') return 'pl'
  return localStorage.getItem(STORAGE_KEY) === 'en' ? 'en' : 'pl'
}

export default function LanguageProvider({ children }) {
  const [lang, setLang] = useState(getInitialLang)

  useEffect(() => {
    document.documentElement.lang = lang
    localStorage.setItem(STORAGE_KEY, lang)
  }, [lang])

  const t = (key) => translations[lang][key] ?? key

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}
