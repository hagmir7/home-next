import initTranslations from '@/app/i18n';
import Link from 'next/link'
import React from 'react';

export async function generateMetadata({ params, searchParams }, parent) {
  const { locale } = params
  const { t } = await initTranslations(locale, ['translation'])

  return {
    title: `${t('Books Categories')} - FreeWsad`,
    alternates: {
      canonical: 'https://www.freewsad.com/books/categories',
    },
  }
}


export default async function BookCategories({params : {locale}}) {
  const response = await fetch(`https://books.amtar.shop/${locale}/api/book/category`)
  const categories = await response.json();

  const {t} = await initTranslations(locale, ['translation']);


  return (
    <div className='container mt-3'>
      <div className='row justify-content-center'>
        <div className='col-12 col-md-6 col-lg-6 col-xl-6'>
          <h1 className='h5'>{t('Books Categories')}</h1>
          <div className='list-group'>
            {categories.map((item, index) => {
              return (
                <Link
                  key={index}
                  className='list-group-item list-group-item-action'
                  href={`/books/${item.slug}`}
                >
                  <img
                    src='/assets/imgs/svg/book.svg'
                    alt='Books'
                    width='30px'
                    height='30px'
                  />
                  &nbsp; {item.name}
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
