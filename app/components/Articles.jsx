'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Articles() {
  const [posts, setPosts] = useState(null)

  const fetcher = async () => {
    
    const response = await fetch('https://freesad.com/ar/api/', {
        next: {
            revalidate: 300
        }
    })
    const posts = await response.json()
    setPosts(posts)
  }

  useEffect(() => {
    fetcher()
  }, [])

  return (
    <div>
      <h1>Articles</h1>
      {!posts ? "Loading" :posts.data.map((article) => (
        <div key={article.id}>
          <Link href={`/blog/${article.slug}`}>
            {article.title}
          </Link>
        </div>
      ))}
    </div>
  )
}
