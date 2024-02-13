import React from 'react';
import Books from '../components/Books';

export default async BooksPage => {
    return (
        <main className='container'>
            <div className="row">
                <Books title={(<h1 className='d-none'>Download free PDF books</h1>)} />
            </div>
        </main>
    );
};

