'use client'
import { useRouter, usePathname } from "next/navigation";

export default function LanguageSelector() {
  const router = useRouter()
    const pathname = usePathname()

  function handleChangeLanguage(locale) {
    router.push(`/${locale}${pathname}`)
  }

  return (
    <div>
      <button onClick={() => handleChangeLanguage('en')}>English</button>
      <button onClick={() => handleChangeLanguage('fr')}>French</button>
    </div>
  )
}
