import React from 'react'
import Head from 'next/head'

export async function generateMetadata({ params, searchParams }, parent) {
  // read route params
  const slug = params.slug
 
  // fetch data
  const response = await fetch(
    'https://freesad.com/api/book/' + slug
  )
  const book = await response.json()
 
 
  return {
    title: book.name,
    description: book.description.slice(0, 170),
    image: 'https://freesad.com' + book.image,
    keywords: ['books', book.tags],
    alternates: {
      canonical: 'http://localhost:3000/book/' + book.slug,
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
  
  return (
    <div>
      <Head>
        <title>This is the title</title>
        <meta
          name='description'
          content={book.description}
          key='desc'
        />
      </Head>
      {book.name}
    </div>
  )
}
