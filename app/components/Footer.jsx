import React from 'react';
import Link from 'next/link'


export default function Footer() {
  return (
    <footer className='footer-07 bg-white border-top border-bottom mt-2 nav'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-md-12 text-center'>
            <div className='footer-heading mt-3'>
              <Link href='/' className='logo h5'>
                <img src="/assets/imgs/freewsad-item.webp" height="auto"  width="150px" alt="FreeWsad - Download free books" />
              </Link>
            </div>
            <p className='menu d-flex justify-content-center mt-3 flex-wrap'>
              <Link href='/' className='nav-link mx-2'>Home</Link>
              <Link className='nav-link mx-2' href={'/pages/privacy'}> Privacy Policy</Link>
              <Link href='/pages/about' className='nav-link mx-2'>About Us</Link>
              <Link href='/pages/contact' className='nav-link mx-2'>Contact Us</Link>
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
