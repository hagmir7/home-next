import Books from '@/app/components/Books';
import React from 'react';

export const metadata = {
    title: 'My Awesome Page',
    description: 'This page is truly awesome!',
    openGraph: {
        // Open Graph metadata
    },
    twitter: {
        // Twitter metadata
    },
};

export default async function BookPage(props) {
  return (
      <div className='container'>
          <Books category={props.params.slug} />
      </div>
  )
}
