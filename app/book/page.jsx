import React from 'react';
import Link from 'next/link'
import Books from '@/app/components/Books'
import DownloadBook from '@/app/components/DownloadBook'

export default async function page() {
  const response = await fetch('https://freesad.com/api/book/' + props.params.slug)
  const book = await response.json()
  const options = {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
    timeZone: 'UTC',
  }

  const language = "en" // navigator.language.slice(0, 2)
  return (
    <div>{book.name}</div>
  )
}
