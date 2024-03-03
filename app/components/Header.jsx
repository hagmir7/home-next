import React from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic';
import initTranslations from '../i18n';

const AuthTools = dynamic(() => import('@/app/components/AuthTools'))

export default async function Header(props) {

  const { t } = await initTranslations(props.locale, ['translation']);
  return (
    <header className='navbar-light position-sticky top-0 header-static border-bottom bg-white shadow-sm'>
      <div className='navbar navbar-expand-lg p-0 position-relative'>
        <div className='d-flex justify-content-between w-100 px-3'>
          <div className='logo-content'>
            <Link
              href='/'
              title={t('Download the Best Free PDF books')}
              className='nav-item logo h4 m-0 my-1 h1'
            >
              <img
                width='45px'
                height='45px'
                title='Freewsad'
                loading='eager'
                className='logo'
                src='/android-chrome-384x384.png'
                alt='Freewsad'
              />
            </Link>
          </div>
          <div className='navbar-top d-none d-lg-block small bg-white mb-0'>
            <nav className='d-flex justify-content-between p-2 pb-0 nav'>
              <Link href='/' title={t('Home')} className='nav-item mx-4'>
                <img
                  title={t('Home')}
                  loading='eager'
                  className='nav-icon'
                  src='/assets/imgs/svg/home.svg'
                  alt={t('Home')}
                  width='30px'
                  height='30px'
                />
              </Link>

              <Link href='/blog' title={t('Blogs')} className='nav-item mx-4'>
                <img
                  title={t('Blogs')}
                  loading='eager'
                  className='nav-icon'
                  src='/assets/imgs/svg/post.svg'
                  alt={t('Blogs')}
                  width='30px'
                  height='30px'
                />
              </Link>

              <Link
                href='/books/categories'
                title={t('Books Categories')}
                className='nav-item mx-4'
              >
                <img
                  title={t('Books Categories')}
                  loading='eager'
                  className='nav-icon'
                  src='/assets/imgs/svg/menu.svg'
                  alt={t('Books Categories')}
                  width='30px'
                  height='30px'
                />
              </Link>
            </nav>
          </div>
          <div className='d-none d-lg-block my-1' style={{ zIndex: 100 }}>
            <AuthTools />
          </div>

          <>
            <Link
              className='navbar-toggler border-0 mt-2 p-0'
              href='/pages/menu'
              title={t('Menu')}
            >
              <img
                width='32'
                height='32'
                src='/assets/imgs/menu.svg'
                alt={t('Menu')}
                loading='eager'
                title={t('Menu')}
              />
            </Link>
          </>
        </div>
      </div>
    </header>
  )
}
