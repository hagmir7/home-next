'use client'

import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next"


const languages = [
  {
    code: 'en',
    name: 'ُEnglish',
  },
  {
    code: 'ar',
    name: 'العربية',
  },
  {
    code: 'fr',
    name: 'Française',
  },
  {
    code: 'es',
    name: 'Español',
  },
]



const LanguageSwitcher = () => {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (lang) => {
    const currentLang = i18n.language
    i18n.changeLanguage(lang, (err, t) => {
      if (err) return console.log('something went wrong loading', err)

      if (currentLang !== lang) {
        const originalPath = window.location.pathname
        const replacedPath = originalPath.replace(currentLang, lang)

        if (originalPath !== replacedPath) {
          // File path has been replaced
          window.location.pathname = replacedPath
        } else {
          // File path remains the same
          const newPath = `/${lang}${originalPath}`
          window.location.pathname = newPath
        }
      }
    })
  }

  return (
    <div className='w-100 d-flex justify-content-center'>
      <div className='change-lang'>
        {languages.map((lang) => (
          <button
            dir={lang.code === 'ar' ? 'rtl' : 'ltr'}
            lang={lang.code}
            key={lang.code}
            onClick={() => handleLanguageChange(lang.code)}
          >
            {lang.name}
          </button>
        ))}
      </div>
    </div>
  )
}

export default LanguageSwitcher
