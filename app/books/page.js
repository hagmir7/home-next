import React from 'react';
import Books from '../components/Books';

export default async BooksPage => {
    return (
        <main className='container'>
            <div className="row">
                <Books />
            </div>
        </main>
    );
};

