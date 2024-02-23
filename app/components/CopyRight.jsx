import Link from 'next/link'
import React from 'react';
import initTranslations from '../i18n';

export default async function CopyRight(props) {
  const { t } = await initTranslations(props.locale, ['translation'])
  return (
    <div
      className='position-sticky'
      style={{ top: '55px', height: ' auto !important' }}
    >
      <div className='p-2 mt-3 bg-light card shadow-sm border'>
        <span className='h4 p-1'>{t('Copyrights')}</span>
        <div>
          <p>
            {t('copy-right')}
            <Link href='/pages/contact'>{t('Contact Us')}</Link>,{' '}
            {t('or by email at')}:{' '}
            <a href='mailto:support@freewsad.com'> support@freewsad.com.</a>
          </p>{' '}
        </div>
        <p>
          <Link href='/pages/about'>{t('More About us')}</Link>
        </p>
      </div>
    </div>
  )
}
