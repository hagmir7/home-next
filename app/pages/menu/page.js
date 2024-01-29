import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Menu - FreeWsad',
  alternates: {
    canonical: '/pages/menu',
  },
}

export default function MenuPage() {
  return (
    <div className="container">
      <div className="row justify-content-center mt-3">
        <div className="col-12 col-md-6 col-lg-6 col-xl-6">
          <h1 className='d-none'>Menu - Freewsad More inforamation</h1>
          <div className="list-group">
            <Link className="list-group-item list-group-item-action" href="/"><img src="/assets/imgs/svg/home.svg" alt="Home" width="30px" height="30px" />&nbsp; Home</Link>
            <Link className="list-group-item list-group-item-action" href="/blog"><img src="/assets/imgs/svg/post.svg" alt="Blogs" width="30px" height="30px" />&nbsp; Blogs</Link>
            <Link className="list-group-item list-group-item-action" href="/books"><img src="/assets/imgs/svg/book.svg" alt="Books" width="30px" height="30px" />&nbsp; Books</Link>
            <Link className="list-group-item list-group-item-action" href="/pages/about"><img src="/assets/imgs/svg/info.svg" alt="About Us" width="30px" height="30px" />&nbsp; About Us</Link>
            <Link className="list-group-item list-group-item-action" href="/pages/contact"><img src="/assets/imgs/svg/contact.svg" alt="Contact Us" width="30px" height="30px" />&nbsp; Contact Us</Link>
            <Link className="list-group-item list-group-item-action" href="/pages/privacy"><img src="/assets/imgs/svg/privacy.svg" alt="Privacy Policy" width="30px" height="30px" />&nbsp; Privacy Policy</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
