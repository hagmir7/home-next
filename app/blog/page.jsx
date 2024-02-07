import React from 'react'
import PostCard from '../components/PostCard'
import LoadPosts from '../components/LoadPosts'


export default async () => {
  const response = await fetch('https://freesad.com/en/api/')
  const responsData = await response.json()
  return (
    <div className='container mt-3'>
        <h1 className='h3'>Last articles</h1>
      <div className='row'>
        {responsData.data.map((post) => {
          return (
            <PostCard
              title={post.title}
              key={post.slug}
              image={post.image ? post.image : '/assets/img/placholder.png'}
              slug={post.slug}
            />
          )
        })}

        <LoadPosts />
      </div>
    </div>
  )
}
