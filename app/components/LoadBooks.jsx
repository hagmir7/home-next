'use client'
import React, { useState, useEffect } from 'react'
import BookCard from './BookCard'

export default function LoadBooks(props) {
  const [page, setPage] = useState(2)
  const [data, setData] = useState([])
  const [sniper, setSniper] = useState(false)
  const [hasNext, setHasNext] = useState(true)


  const loadMore = () => {
     setSniper(true)
     setPage((currnetPage) => {
       getBooks(currnetPage)
       return currnetPage + 1
     })
   }

const getBooks = async (pageNumber = 2) => {
  const response = await fetch(
    `https://freesad.com/en/api/books/${props.category ? props.category : ''}?page=${pageNumber}`
  )
  const result = await response.json() // Extract JSON data from response
  setSniper(false);
  setData((prevData) => [
    ...prevData,
    ...result.data.map((item) => (
      <BookCard
        slug={item.slug}
        title={item.name}
        image={item.image}
        key={item.id}
      />
    )),
  ])
  setHasNext(result.has_next) 
}

  return (
    <>
      {data}
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
