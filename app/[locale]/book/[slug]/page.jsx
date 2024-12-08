import React from 'react'
import Link from 'next/link'
import Books from '@/app/components/Books'
import dynamic from 'next/dynamic'
import CopyRight from '@/app/components/CopyRight'
import GoogleAd from '@/app/components/GoogleAd'
import initTranslations from '@/app/i18n'
import { notFound } from 'next/navigation'
import PageNotFound from '../../404/page'

const DownloadBook = dynamic(() => import('@/app/components/DownloadBook'))

export async function generateMetadata({ params }) {
  try {
    const response = await fetch(
      `https://api.facepy.com/${params.locale}/api/book/${params.slug}`
    )

    if (!response.ok) {
      return notFound()
    }

    const book = await response.json()
    const canonical = `https://www.freewsad.com/${
      params.locale === 'en' ? '' : params.locale + '/'
    }book/${book.slug}`

    return {
      title: book.name,
      description: book.description?.slice(0, 170) || '',
      images: ['https://api.facepy.com' + book.image],
      keywords: ['books', ...(book.tags || [])],
      alternates: {
        canonical,
      },
      openGraph: {
        title: book.name,
        images: ['https://api.facepy.com' + book.image],
        description: book.description?.slice(0, 170) || '',
        url: canonical,
        type: 'article',
        image: {
          url: 'https://api.facepy.com' + book.image,
          alt: book.name,
          width: 600,
          height: 800,
        },
      },
    }
  } catch (error) {
    console.error('Error generating metadata:', error)
    return notFound()
  }
}

export default async function BookPage({ params }) {
  try {
    const { t } = await initTranslations(params.locale, ['translation'])
    const response = await fetch(
      `https://api.facepy.com/${params.locale}/api/book/${params.slug}`
    )

    if (!response.ok) {
      return notFound()
    }

    const book = await response.json()
    const options = {
      year: 'numeric',
      month: 'long',
      day: '2-digit',
      timeZone: 'UTC',
    }

    return (
      <div className='container-lg mt-3'>
        <GoogleAd slot='4567237334' googleAdId='ca-pub-6043226569102012' />
        <div className='row'>
          <div className='col-12 col-md-7 col-lg-8 col-xl-8 mb-3 m-0 p-1'>
            <article className='blog-post'>
              <h1 dir='auto' className='blog-post-title h5 mt-2'>
                {book.title || book.name}
              </h1>

              <div className='row mx-1'>
                <div className='col-12 col-md-12 col-lg-3 col-xl-3 p-0'>
                  <div className='card book-img overflow-hidden m-auto'>
                    <img
                      src={`https://api.facepy.com${book.image}`}
                      alt={book.name}
                      width='100%'
                      height='auto'
                    />
                  </div>
                </div>
                <div className='col-12 col-lg-9 col-sm-12 p-0 mt-2 mt-lg-0 ps-lg-3'>
                  <h2 className='h4 p-0 m-0 d-sm-none'>{t('About book')}</h2>
                  <ul className='list-group pe-0 pe-md-3'>
                    {book.author && (
                      <li className='list-group-item d-flex justify-content-between align-items-center'>
                        {t('Author')}
                        <span className='badge bg-primary rounded-pill w-75 fs-6 fw-normal p-1'>
                          {book.author}
                        </span>
                      </li>
                    )}

                    <li className='list-group-item d-flex justify-content-between align-items-center'>
                      {t('File type')}
                      <span className='badge bg-primary rounded-pill w-75 fs-6 fw-normal p-1'>
                        {book.book_type || book.file_type}
                      </span>
                    </li>

                    <li className='list-group-item d-flex justify-content-between align-items-center'>
                      {t('Language')}
                      <span className='badge bg-primary rounded-pill w-75 fs-6 fw-normal p-1'>
                        {book.language?.name}
                      </span>
                    </li>

                    <li className='list-group-item d-flex justify-content-between align-items-center'>
                      {t('Downloads')}
                      <span
                        dir='auto'
                        className='badge bg-primary rounded-pill w-75 fs-6 fw-normal p-1'
                      >
                        {new Intl.NumberFormat(params.locale, {
                          notation: 'compact',
                        }).format(Number(book.views))}
                      </span>
                    </li>

                    <li className='list-group-item d-flex justify-content-between align-items-center'>
                      {t('Pages')}
                      <span className='badge bg-primary rounded-pill w-75 fs-6 fw-normal p-1'>
                        {book.pages}
                      </span>
                    </li>

                    {book.category && (
                      <li className='list-group-item d-flex justify-content-between align-items-center'>
                        {t('Category')}
                        <Link
                          href={`/books/${
                            book.category.slug || book.category.id
                          }`.toLowerCase()}
                          className='badge bg-primary rounded-pill w-75 fs-6 fw-normal p-1'
                          dir='auto'
                        >
                          {book.category.name}
                        </Link>
                      </li>
                    )}

                    {book.size && (
                      <li className='list-group-item d-flex justify-content-between align-items-center'>
                        {t('Size')}
                        <span
                          className='badge bg-primary rounded-pill w-75 fs-6 fw-normal p-1'
                          dir='auto'
                        >
                          {book.size}
                        </span>
                      </li>
                    )}

                    <li className='list-group-item d-flex justify-content-between align-items-center'>
                      {t('Date')}
                      <span
                        dir='auto'
                        className='badge bg-primary rounded-pill w-75 fs-6 fw-normal p-1'
                      >
                        {new Intl.DateTimeFormat(params.locale, options).format(
                          new Date(book.created_at)
                        )}
                      </span>
                    </li>
                  </ul>
                </div>

                <div className='mt-2'>
                  <h2 className='h4 p-0 m-0 mt-3'>{t('Download book')}</h2>
                  <DownloadBook file={book.file} />
                </div>
              </div>

              <h2 dir='auto' className='h4 p-0 m-0 mt-2'>
                {book.name}
              </h2>
              <div
                className='mt-2 book-description'
                dir='auto'
                dangerouslySetInnerHTML={{ __html: book.body }}
              />
            </article>
          </div>

          <div className='col-12 col-md-5 col-lg-4 col-xl-4 position-relative mb-3'>
            <GoogleAd slot='4567237334' googleAdId='ca-pub-6043226569102012' />
            <CopyRight locale={params.locale} />
          </div>
        </div>
        <Books
          url={`https://api.facepy.com/${params.locale}/api/books/new`}
        />
      </div>
    )
  } catch (error) {
    console.error('Error rendering BookPage:', error)
    return notFound()
  }
}
