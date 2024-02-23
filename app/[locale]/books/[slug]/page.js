import Books from '@/app/components/Books';
import React from 'react';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params, searchParams }, parent) {
    // read route params
    const slug = params.slug

    // fetch data
    const response = await fetch(`https://freesad.com/en/api/books/category/${slug}`);
    if (!response.ok) {
        return notFound()
    }
    const responseData = await response.json();
    return {
        title: `Download free ${responseData.category.name} books`,
        alternates: {
            canonical: 'https://www.freewsad.com/books/' + slug,
        },
        openGraph: {
            title: `Download free ${responseData.category.name} books`,
            url: '/books/' + slug,
            type: 'website',
            images: '/thumbnail.png',
            description: "You can enjoy the Topics and Books you love and download the original content, and share it all with your friends in FreeWsad.",
            type: 'website',
            image: {
                url: '/thumbnail.png',
                alt: "FreeWsad - The Best Website For Education",
                width: 600,
                height: 800,
            },
        } 
    }
}


export default async function BookPage(props) {
  return (
      <div className='container'>
          <Books url={`https://freesad.com/en/api/books/category/${props.params.slug}`} locale={props.params.locale} category={true}/>
      </div>
  )
}
