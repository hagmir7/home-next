'use client'

import { useRouter } from 'next/navigation'
import { useTranslation } from 'next-i18next'

export default function LanguageSwitcher() {
  const router = useRouter()

  const { t } = useTranslation()
  const currentLocale = router.locale

  const handleLanguageChange = (newLocale) => {
    router.push(`/`, `/`, { locale: newLocale })
  }

  return (
    <div>
      <button onClick={() => handleLanguageChange('en')}>{t('English')}</button>
      <button onClick={() => handleLanguageChange('ar')}>Spanish</button>
    </div>
  )
}
