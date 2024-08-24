'use client'

import React, { useRef, useState } from 'react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/navigation'


export default function SearchBook() {
    const [books, setBooks] = useState([]);
    const [value, setValue] = useState(false);
    const focus = useRef();
    const { t, i18n } = useTranslation();
    const currentLang = i18n.language

    const Search = async (query) => {
        const inputValue = query.target.value;
        if (inputValue === '') {
            setBooks([]);
            setValue(false);
        } else {
            setValue(true);
            try {
                const response = await fetch(`https://al-kora.com/${currentLang}/api/book?q=${encodeURIComponent(inputValue)}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setBooks(data);
            } catch (error) {
                console.log(error);
            }
        }
    };

    return (
        <div className="px-2 w-100 position-relative">
            <div className="input-group p-0 m-0 rounded-pill overflow-hidden border border-2">
                <span className="input-group-text px-3 border-0" onClick={() => focus.current.focus()} id="basic-addon1">
                    <svg xmlns='http://www.w3.org/2000/svg' width='20px' height='20px' viewBox='0 0 1024 1024'>
                        <path fill='currentColor' d='M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1c-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6M570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4' />
                    </svg>
                </span>
                <input
                    onChange={Search}
                    placeholder={t("Search") + "..."}
                    className='form-control border-0'
                    type='search'
                    id='search'
                    autoComplete='off'
                    ref={focus}
                />
            </div>
            {value && (
                <div className="list-group search-list position-absolute w-100 shadow text-start" style={{ zIndex: '99', overflow: "auto", maxHeight: "300px" }}>
                    {books.map(item => (
                        <Link key={item.id} href={`/book/${item.slug}`} dir="auto" className="list-group-item list-group-item-action">{item.name}</Link>
                    ))}
                </div>
            )}
        </div>
    );
}
