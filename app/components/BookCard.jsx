import Link from 'next/link'
import React from 'react'

export default function BookCard(props) {
  return (
    <div className='book-card col-6 col-sm-6 col-md-3 col-lg-3 col-xl-2 mt-2 px-2'>
      <div className='card card-book shadow-sm overflow-hidden h-100 m-0'>
        <Link className='h-100' title={props.name} href={`/book/${props.slug}`}>
          <img
            height='100%'
            src={`https://books.amtar.shop${props.image}`}
            width='100%'
            alt={props.name}
            title={props.name}
          />
        </Link>
      </div>
    </div>
  )
}
