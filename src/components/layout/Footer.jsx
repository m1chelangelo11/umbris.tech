import { useLanguage } from './LanguageProvider'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="flex items-center justify-between px-global py-6">
      <span className="text-[0.7rem] text-dim">{t('foot_c')}</span>
    </footer>
  )
}
