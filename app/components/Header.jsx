import React from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import SearchBook from './SearchBook'
const AuthTools = dynamic(() => import('@/app/components/AuthTools'))

export default function Header() {


  return (
    <header className='navbar-light position-sticky top-0 header-static border-bottom bg-white shadow-sm'>
      <div className='navbar navbar-expand-lg p-0 position-relative'>
        <div className='d-flex justify-content-between w-100 px-3'>
          <div className='logo-content'>
            <Link href='/' className='nav-item logo h4 m-0 my-1 h1'>
              <img
                width='auto'
                height='45px'
                title='Freewsad'
                loading='eager'
                className='logo'
                src='https://freesad.com/media/avatar/rounded-pill.png'
                alt='Freewsad'
              />
            </Link>
          </div>
          <div className='navbar-top d-none d-lg-block small bg-white mb-0'>
            <nav className='d-flex justify-content-between p-2 pb-0 nav'>
              <Link href='/' className='nav-item mx-4'>
                <img
                  title='Home'
                  loading='eager'
                  className='nav-icon'
                  src='/assets/imgs/svg/home.svg'
                  alt='Home'
                  width='30px'
                  height='30px'
                />
              </Link>

              <Link href='/blog' className='nav-item mx-4'>
                <img
                  title='Blog'
                  loading='eager'
                  className='nav-icon'
                  src='/assets/imgs/svg/post.svg'
                  alt='Blog'
                  width='30px'
                  height='30px'
                />
              </Link>

              <Link href='/books/categories' className='nav-item mx-4'>
                <img
                  title='Categories'
                  loading='eager'
                  className='nav-icon'
                  src='/assets/imgs/svg/menu.svg'
                  alt='Blog'
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
            >
              <img
                width='32'
                height='32'
                src='/assets/imgs/menu.svg'
                alt='Menu'
                loading='eager'
                title='Menu'
              />
            </Link>
          </>
        </div>
      </div>
    </header>
  )
}
