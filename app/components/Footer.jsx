import React from 'react';
import Link from 'next/link'
import initTranslations from '../i18n';
import LanguageSwitcher from './LanguageSwitcher';


export default async function Footer(props) {

  const {t} = await initTranslations(props.locale, ['translation']);
  return (
    <footer className='footer-07 bg-white border-top border-bottom mt-2 nav'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-md-12 text-center'>
            <div className='footer-heading mt-3'>
              <Link
                href='/'
                title={t('Download the Best Free PDF books')}
                className='logo h5'
              >
                <img
                  src='/assets/imgs/freewsad-item.webp'
                  height='auto'
                  width='150px'
                  alt={t('meta_title')}
                  title={t('Download the Best Free PDF books')}
                />
              </Link>
            </div>
            <p className='menu d-flex justify-content-center mt-3 flex-wrap'>
              <Link href='/' className='nav-link mx-2'>
                {t('Home')}
              </Link>
              <Link className='nav-link mx-2' href={'/pages/privacy'}>
                {t('Privacy Policy')}
              </Link>
              <Link href='/pages/about' className='nav-link mx-2'>
                {t('About Us')}
              </Link>
              <Link
                href='/pages/contact'
                title={t('Contact Us')}
                className='nav-link mx-2'
              >
                {t('Contact Us')}
              </Link>

              <Link
                href='/books/categories'
                title={t('Categories')}
                className='nav-link mx-2'
              >
                {t('Categories')}
              </Link>
            </p>
            <LanguageSwitcher />
          </div>
        </div>
        <div className='row mt-4'>
          <div className='col-md-12 text-center'>
            <p className='copyright' dir='auto'>
              {t('Copyright')}© 2021 - {new Date().getFullYear()}{' '}
              {t('All rights reserved.')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
