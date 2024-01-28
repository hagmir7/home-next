import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className='footer-07 bg-white border-top border-bottom mt-2 nav'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-md-12 text-center'>
            <div className='footer-heading mt-3'>
              <Link href='/' className='logo h5'>Freewsad.com</Link>
            </div>
            <p className='menu d-flex justify-content-center mt-3 flex-wrap'>
              <Link href='/' className='nav-link mx-2'><a>Home</a></Link>
              <Link className='nav-link mx-2' href={'/pages/privacy'}> <a>Privacy Policy</a></Link>
              <Link href='/pages/about' className='nav-link mx-2'>About</Link>
              <Link href='/pages/contact' className='nav-link mx-2'>Contact</Link>
            </p>
          </div>
        </div>
        <div className='row mt-4'>
          <div className='col-md-12 text-center'>
            <p className='copyright' dir='auto'>
              Copyright© 2021 - {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
