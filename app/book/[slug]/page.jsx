import React from 'react'
import { useRouter } from 'next/router'
import Books from '@/app/components/Books'
import DownloadBook from '@/app/components/DownloadBook'

export default function Page() {
  const router = useRouter()
  const { slug } = router.query

  const fetchBook = async () => {
    const response = await fetch(`https://freesad.com/api/book/${slug}`)
    const book = await response.json()
    return book
  }

  const language = 'en'
  const book = fetchBook()

  if (!book) {
    return <div>Loading...</div>
  }
  return <div>{book.name}</div>
}
