import React from 'react';
import Link from 'next/link';
import Loder from '../components/Loader';

export default async BooksPage => {
    const response = await fetch("https://freesad.com/api/books")
    const books = await response.json()
    return (
        <div>
            <h1>Books pages</h1>
            {
                books.data.map(book => {
                    return <div><Link href={`/books/${book.slug}`}>{book.name}</Link></div>
                })
            }
            <Loder />
        </div>
    );
};

