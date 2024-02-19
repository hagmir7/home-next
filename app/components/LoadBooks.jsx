'use client'
import React, { useState, useEffect, useRef } from 'react'
import BookCard from './BookCard'

export default function LoadBooks(props) {
  const [page, setPage] = useState(2)
  const [data, setData] = useState([])
  const [sniper, setSniper] = useState(false)
  const [hasNext, setHasNext] = useState(true)

  const loadMore = () => {
    setSniper(true)

    setPage((currentPage) => currentPage + 1)
    getBooks(page)
  }

  const getBooks = async (pageNumber = 2) => {
    try {
      const response = await fetch(`${props.url}?page=${pageNumber}`)
      const result = await response.json()

       const pagination_response = await fetch(`${props.url}?page=1`)
       const pagination = await pagination_response.json()
       if(pagination.has_next === false) {
        setHasNext(false)
      }else{
         setData((prevData) => [
           ...prevData,
           ...result.data.map((item, index) => ({
             slug: item.slug,
             title: item.name,
             image: item.image,
             key: item.id,
           })),
         ])
         setHasNext(result.has_next)
      }
      setSniper(false)


     
    } catch (error) {
      console.error('Error fetching books:', error)
      setSniper(false)
    }
  }

  useEffect(() => {
    return () => {
      if(hasNext){
        setSniper(true)

        setPage((currentPage) => currentPage + 1)
        getBooks(page)
      }
    }
  }, [])



  return (
    <>
      {data.map((book) => (
        <BookCard
          slug={book.slug}
          title={book.title}
          image={book.image}
          key={book.key}
        />
      ))}
      <div className='d-flex justify-content-center'>
        <button
          onClick={loadMore}
          className={`btn mt-3 px-5 rounded-pill ${
            hasNext ? 'btn-primary' : 'bg-white disabled border-0'
          }`}
          disabled={!hasNext || sniper}
        >
          {sniper ? (
            <div
              className='spinner-border'
              style={{ height: '25px', width: '25px' }}
              role='status'
            ></div>
          ) : hasNext ? (
            'Load More'
          ) : (
            'This is All'
          )}
        </button>
      </div>
    </>
  )
}


