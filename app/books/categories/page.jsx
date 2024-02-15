import Link from 'next/link'
import React from 'react'

export const metadata = {
  title: 'Book Categories - FreeWsad',
  alternates: {
    canonical: 'https://freewsad.com/books/categories',
  }
}


export default async function BookCategories() {
  const response = await fetch('https://freesad.com/en/api/book/category')
  const categories = await response.json()


  return (
    <div className='container mt-3'>
      <div className='row justify-content-center'>
        <div className='col-12 col-md-6 col-lg-6 col-xl-6'>
         <h1 className='h5'>Books Categories</h1>
          <div className='list-group'>
            {categories.map((item, index) => {
              return (
                <Link
                  key={index}
                  className='list-group-item list-group-item-action'
                  href={`/books/${item.slug}`}
                >
                  <img
                    src='/assets/imgs/svg/book.svg'
                    alt='Books'
                    width='30px'
                    height='30px'
                  />
                  &nbsp; {item.name}
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
