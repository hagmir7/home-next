'use client'
import React, { useEffect, useState, useCallback, useRef } from 'react'
import PostCard from './PostCard'

export default function LoadPosts(props) {
  const [data, setData] = useState([])
  const [spinner, setSpinner] = useState(false)
  const [page, setPage] = useState(2)

  const observer = useRef()

  useEffect(() => {
    loadPost(page)
  }, [page])

  const loadMore = () => {
    setPage((currentPage) => currentPage + 1);
    // loadPost(page);
  }

  const lastPost = useCallback(
    (node) => {
      if (observer.current) observer.current.disconnect()
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          loadMore()
        }
      })
      if (node) observer.current.observe(node)
    },
    [page]
  )

  const loadPost = async (pageNumber) => {
    try {
      const response = await fetch(`https://al-kora.com/${props.locale}/api/?page=${pageNumber}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      const responseData = await response.json()

      setData((prevData) => [...prevData, ...responseData.data])

      if (responseData.has_next) {
        setSpinner(false)
      } else {
        setSpinner(true)
      }
      
    } catch (error) {
      console.log('Error', error)
    }
  }

  return (
    <>
      {data.map((item, index) => (
        <PostCard
          key={item.slug}
          title={item.title}
          image={item.image ? item.image : '/assets/img/placholder.png'}
          slug={item.slug}
          last={index === data.length - 1 ? lastPost : null}
        />
      ))}
      <div className='my-3 d-flex justify-content-center'>
        {!spinner ? (
          <div className='spinner-border' role='status'></div>
        ) : (
          <button className='border btn rounded-pill mx-2 disabled bg-white w-50'>
            This is All
          </button>
        )}
      </div>
    </>
  )
}
