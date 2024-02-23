import React from 'react';
import Books from '@/app/components/Books';

export default async BooksPage => {
    return (
        <main className='container'>
            <div className="row">
                <Books 
                    url={`https://freesad.com/en/api/books/`}
                    title={(<h1 className='d-none'>Download free PDF books</h1>)}
                />
            </div>
        </main>
    );
};

