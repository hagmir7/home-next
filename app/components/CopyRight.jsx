import Link from 'next/link'
import React from 'react';

export default function CopyRight() {
  return (
    <div
      className='position-sticky'
      style={{ top: '55px', height: ' auto !important' }}
    >
      <div className='p-2 mt-3 bg-light card shadow-sm border'>
        <span className='h4 p-1'>Copyrights</span>
        <div>
          <p>
            We respect the property rights of others, and are always careful not
            to infringe on their rights, so authors and publishing houses have
            the right to demand that an article or book download link be removed
            from the site. If you find an article or book of yours and do not
            agree to the posting of a download link, or you have a suggestion or
            complaint, write to us through the{' '}
            <Link href='/pages/contact'>Contact Us</Link>, or by email at :{' '}
            <a href='mailto:support@freewsad.com'> support@freewsad.com.</a>
          </p>{' '}
        </div>
        <p>
          <Link href='/pages/about'>More About us</Link>
        </p>
      </div>
    </div>
  )
}
