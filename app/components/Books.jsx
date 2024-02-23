import React from 'react'
import BookCard from './BookCard'
import LoadBooks from './LoadBooks'
import initTranslations from '../i18n';

export default async function Books(props) {
  const response = await fetch(props.url)
  const books = await response.json();
  const { t } = await initTranslations(props.locale, ['translation'])

  return (
    <>
      {props.category ? (
        <h1 className='h5 mt-2'>
          {t('book_category', { category: books.category.name })}
        </h1>
      ) : (
        props.title
      )}
      <div className='row pb-5 p-0 m-0'>
        {books.data.map((book) => (
          <BookCard
            key={book.slug}
            name={book.name}
            slug={book.slug}
            image={book.image}
          />
        ))}
        <LoadBooks locale={props.locale} url={props.url} />
      </div>
    </>
  )
}
