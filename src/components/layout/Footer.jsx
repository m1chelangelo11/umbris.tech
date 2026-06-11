import { useLanguage } from './useLanguage'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="mx-auto flex max-w-[90rem] items-center justify-between px-global py-6">
      <span className="text-[0.7rem] text-dim">{t('foot_c')}</span>
    </footer>
  )
}
