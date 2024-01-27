import React from 'react';

export const metadata = {
    title: 'My Awesome Page',
    description: 'This page is truly awesome!',
    openGraph: {
        // Open Graph metadata
    },
    twitter: {
        // Twitter metadata
    },
};

export default async function BookPage(props) {
    const response = await fetch("https://freesad.com/api/book/"+props.params.slug)
    const book = await response.json()
  return (
      <div>{book.name}</div>
  )
}
