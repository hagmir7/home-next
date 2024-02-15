import React from 'react'
import Link from 'next/link'
import Books from '@/app/components/Books'
import dynamic from 'next/dynamic'
import CopyRight from '@/app/components/CopyRight';
import GoogleAd from '@/app/components/GoogleAd';
const DownloadBook = dynamic(() => import('@/app/components/DownloadBook'));

export async function generateMetadata({ params, searchParams }, parent) {
  // read route params
  const slug = params.slug

  // fetch data
  const response = await fetch('https://freesad.com/en/api/book/' + slug)
  const book = await response.json()

  return {
    title: book.name,
    description: book.description.slice(0, 170),
    image: 'https://freesad.com' + book.image,
    keywords: ['books', book.tags],
    alternates: {
      canonical: 'https://www.freewsad.com/book/' + book.slug,
    },
    openGraph: {
      title: book.name,
      images: ['https://freesad.com' + book.image],
      description: book.description.slice(0, 170),
      url: '/book/' + book.slug,
      type: 'website',
      image: {
        url: 'https://freesad.com' + book.image,
        alt: book.name,
        width: 600,
        height: 800,
      },
    },
  }
}

export default async function BookPage(props) {
  const response = await fetch(
    'https://freesad.com/api/book/' + props.params.slug
  )
  const book = await response.json()
  const options = {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
    timeZone: 'UTC',
  }

  const language = 'en' // navigator.language.slice(0, 2)

  return (
    <div className='container-lg mt-3' style={{ height: 'auto!important' }}>
      <GoogleAd slot='4567237334' googleAdId='ca-pub-6043226569102012' />
      <div className='row' style={{ height: 'auto!important' }}>
        <div
          className='col-12 col-md-7 col-lg-8 col-xl-8 mb-3 m-0 p-1'
          style={{ height: 'auto!important' }}
        >
          <article className='blog-post' style={{ height: 'auto!important' }}>
            <h1 dir='auto' className='blog-post-title h5 mt-2'>
              {book.title ? book.title : book.name}
            </h1>

            <div className='row mx-1'>
              <div className='col-12 col-md-12 col-lg-3 col-xl-3 p-0 '>
                <div className='card book-img overflow-hidden m-auto'>
                  <img
                    src={`https://freesad.com${book.image}`}
                    alt={book.name}
                    width='100%'
                    height='auto'
                  />
                </div>
              </div>
              <div className='col-12 col-lg-9 col-sm-12 p-0 mt-2 mt-lg-0 ps-lg-3 '>
                <h2 className='h4 p-0 m-0 d-sm-none'>About Book</h2>
                <ul className='list-group pe-0 pe-md-3'>
                  {!book.author ? (
                    ''
                  ) : (
                    <li className='list-group-item d-flex justify-content-between align-items-center'>
                      Author
                      <span className='badge bg-primary rounded-pill w-75 fs-6 fw-normal p-1'>
                        {book.author}
                      </span>
                    </li>
                  )}

                  <li className='list-group-item d-flex justify-content-between align-items-center'>
                    File type
                    <span className='badge bg-primary rounded-pill w-75 fs-6 fw-normal p-1'>
                      {book.book_type ? book.book_type : book.file_type}
                    </span>
                  </li>
                  <li className='list-group-item d-flex justify-content-between align-items-center'>
                    Language
                    <span className='badge bg-primary rounded-pill w-75 fs-6 fw-normal p-1'>
                      {book.language.name}
                    </span>
                  </li>

                  <li className='list-group-item d-flex justify-content-between align-items-center'>
                    Downloads
                    <span
                      dir='auto'
                      className='badge bg-primary rounded-pill w-75 fs-6 fw-normal p-1'
                    >
                      {new Intl.NumberFormat(language, {
                        notation: 'compact',
                      }).format(Number(book.views))}
                    </span>
                  </li>

                  <li className='list-group-item d-flex justify-content-between align-items-center'>
                    Pages
                    <span className='badge bg-primary rounded-pill w-75 fs-6 fw-normal p-1'>
                      {book.pages}
                    </span>
                  </li>

                  {!book.category ? (
                    ''
                  ) : (
                    <li className='list-group-item d-flex justify-content-between align-items-center'>
                      Category
                      <Link
                        href={`/books/${
                          book.category.slug
                            ? book.category.slug
                            : book.category.id
                        }`.toLocaleLowerCase()}
                        className='badge bg-primary rounded-pill w-75 fs-6 fw-normal p-1'
                        dir='auto'
                      >
                        {book.category.name}
                      </Link>
                    </li>
                  )}

                  {!book.size ? (
                    ''
                  ) : (
                    <li className='list-group-item d-flex justify-content-between align-items-center'>
                      Size
                      <span
                        className='badge bg-primary rounded-pill w-75 fs-6 fw-normal p-1'
                        dir='auto'
                      >
                        {book.size}
                      </span>
                    </li>
                  )}

                  <li className='list-group-item d-flex justify-content-between align-items-center'>
                    Date
                    <span
                      dir='auto'
                      className='badge bg-primary rounded-pill w-75 fs-6 fw-normal p-1'
                    >
                      {new Intl.DateTimeFormat(language, options).format(
                        new Date(book.created_at)
                      )}
                    </span>
                  </li>
                </ul>
              </div>
              <div className='mt-2'></div>

              {/* Download book */}
              <h2 className='h4 p-0 m-0 mt-3'>Download book</h2>
              <DownloadBook file={book.file} />
            </div>
            <h2 dir='auto' className='h4 p-0 m-0 mt-2'>
              {book.name}
            </h2>
            <div
              className='mt-2 book-description'
              dir='auto'
              dangerouslySetInnerHTML={{ __html: book.description }}
            />
          </article>
        </div>
        <div
          className='col-12 col-md-5 col-lg-4 col-xl-4 position-relative mb-3'
          style={{ height: 'auto!important' }}
        >
          <GoogleAd slot='4567237334' googleAdId='ca-pub-6043226569102012' />
          <CopyRight />
        </div>
      </div>
      <Books title={<h2 className='h4'>More free PDF books</h2>} />
    </div>
  )
}
