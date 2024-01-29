import React from 'react'
import Link from 'next/link'
import BookCard from './BookCard'
import LoadBooks from './LoadBooks'

export default async function Books(props) {
  const response = await fetch(`https://freesad.com/api/books/${props.category ? props.category : ''}`)
  const books = await response.json()
  return (
    <div className='row pb-5 p-0 m-0'>
      <h1 className='d-none'>Download free PDF books</h1>
      {books.data.map((book) => (
        <BookCard
          key={book.slug}
          name={book.name}
          slug={book.slug}
          image={book.image}
        />
      ))}
      <LoadBooks category={props.category ? props.category : false} />
    </div>
  )
}
