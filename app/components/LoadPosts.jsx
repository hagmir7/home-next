"use client"
import PostCard from './PostCard';
import { useEffect, useState, useCallback, useRef } from 'react'

export default async function LoadPosts() {


    useEffect(() => {
          loadMore()
    }, [])


    const [data, setData] = useState('');

    const [spiner, setSpener] = useState(false)
    const observer = useRef()


    const [page, setPage] = useState(1)

    const loadMore = () => {
      setPage((currnetPage) => {
        loadPosts(currnetPage)
        return currnetPage + 1
      })
    }

    const lastPostElement = useCallback(
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


  const loadPosts = async (page_number) => {
    try {
        const response = await fetch(`https://freesad.com/en/api/?page=${page_number}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        console.log(data)

        if (data.has_next) {
            setData(prevList => {
                setSpener(false);
                return [...new Set([...prevList, data.data.map((item, index) => {
                    if (data.data.length === index + 1) {
                        return (<PostCard last={lastPostElement} key={item.slug} title={item.title} image={item.image ? item.image : item.imageURL ? item.imageURL : '/assets/img/placholder.png'} slug={item.slug} />)
                    } else {
                        return (<PostCard title={item.title} key={item.slug} image={item.image ? item.image : item.imageURL ? item.imageURL : '/assets/img/placholder.png'} slug={item.slug} />)
                    }
                })])]
            });
        } else {
            setData(prevList => {
                return [...new Set([...prevList, data.data.map((item) => {
                    return (<PostCard title={item.title} key={item.slug} image={item.image ? item.image : item.imageURL ? item.imageURL : '/assets/img/placholder.png'} slug={item.slug} />)
                })])]
            });
            setSpener(true);
        }
    } catch (error) {
        console.log("Error", error);
    }
};

  return (
    <>
      {data}
      {!spiner ? (
        <div className='text-center'>
          <div className='row'>
            Loading
          </div>
          <div className='spinner-border' role='status'></div>
        </div>
      ) : (
        <div className='my-3 d-flex justify-content-center'>
          <a className='border btn rounded-pill mx-2  disabled bg-white w-50'>
            This is All
          </a>
        </div>
      )}
    </>
  )
}
