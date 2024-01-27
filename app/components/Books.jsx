import React from 'react'
import Link from 'next/link'
import BookCard from './BookCard'
import LoadBooks from './LoadBooks'

export default async function Books() {
  const response = await fetch('https://freesad.com/api/books')
  const books = await response.json()
  return (
    <div className='row pb-5'>
      {books.data.map((book) => (
        <BookCard
          key={book.slug}
          name={book.name}
          slug={book.slug}
          image={book.image}
        />
      ))}
      <LoadBooks />
    </div>
  )
}
