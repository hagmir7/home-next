import React from 'react'
import ContactForm from '@/app/components/ContactForm'
import initTranslations from '@/app/i18n'


export const metadata = {
  title: 'Contact Us - FreeWsad',
  alternates: {
    canonical: '/about',
  },
}

export default async function ContactPage({params: {locale}}) {

  const { t } = await initTranslations(locale, ['translation']);


  return (
    <div className='container'>
      <div className='row justify-content-center my-3'>
        <div className='col-md-6'>
          <h1 className='h3'>{t('Contact Us')}</h1>
          <ContactForm />
        </div>
      </div>
    </div>
  )
}
