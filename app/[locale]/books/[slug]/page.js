import Books from '@/app/components/Books';
import React from 'react';
import { notFound } from 'next/navigation';
import initTranslations from '@/app/i18n';

export async function generateMetadata({ params, searchParams }, parent) {
    // read route params
    const slug = params.slug;
    const { t } = await initTranslations(params.locale, ['translation']);
    const canonical = `https://www.freewsad.com/${params.locale === 'en' ? '' : params.locale + '/'}books/${slug}`;

    // fetch data
    const response = await fetch(`https://freesad.com/en/api/books/category/${slug}`);
    if (!response.ok) {
        return notFound()
    }
    const responseData = await response.json();
    return {
        title: t('book_category', { category: responseData.category.name }),
        alternates: {canonical},
        openGraph: {
            title: t('book_category', { category: responseData.category.name }),
            url: canonical,
            type: 'website',
            images: '/thumbnail.png',
            description: t("meta_description"),
            type: 'website',
            image: {
                url: '/thumbnail.png',
                alt: t('book_category', { category: responseData.category.name }),
                width: 600,
                height: 800,
            },
        } 
    }
}


export default async function BookPage(props) {
  return (
      <div className='container'>
          <Books url={`https://freesad.com/en/api/books/category/${props.params.slug}?page=1`} locale={props.params.locale} category={true}/>
      </div>
  )
}
