"use client"

import React, { useRef, useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import Link from 'next/link';

export default function SearchBook(props) {

    const [books, setBooks] = useState([]);
    const [value, setValue] = useState(false);
    const focus = useRef();


    const Search = async (query) => {
        const value = query.target.value === '' ? setBooks('') : query.target.value;
        if (query.target.value !== '') {
            setValue(true);
            try {
                const response = await fetch(`https://freesad.com/en/api/book?q=${encodeURIComponent(value)}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setBooks(data);
            } catch (error) {
                console.log(error)
            }
        } else {
            setValue(false)
        }
    };


    return (
        <div className="px-2 w-100 position-relative ">
            <div className="input-group p-0 m-0 rounded-pill overflow-hidden border border-2">
                <span className="input-group-text px-3 border-0" onClick={() => (focus.current.focus())} id="basic-addon1"><SearchOutlined /></span>
                <input
                    onChange={Search}
                    placeholder="Search..."
                    className='form-control border-0'
                    type='search'
                    id='search'
                    autoComplete='off'
                    ref={focus}
                />
            </div>
            {
                value ?

                    <div className="list-group search-list position-absolute w-100 shadow text-start"
                        style={{ zIndex: '99', overflow: "auto", maxHeight: "300px" }}>
                        {books.map(item => (
                            <Link key={item.id} href={`/book/${item.slug}`} dir="auto" className="list-group-item list-group-item-action">{item.name}</Link>
                        ))}
                    </div>
                    : ''
            }

        </div>
    )
}
