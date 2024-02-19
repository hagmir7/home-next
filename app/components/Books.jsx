import React from 'react'
import BookCard from './BookCard'
import LoadBooks from './LoadBooks'

export default async function Books(props) {
  const response = await fetch(props.url)
  const books = await response.json()
  return (
    <>
      {props.category ? (
        <h1 className='h5 mt-2'>Download free {books.category.name} books</h1>
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
        <LoadBooks url={props.url}  />
      </div>
    </>
  )
}
