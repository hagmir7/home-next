import React from 'react';
import Books from '@/app/components/Books';
import initTranslations from '@/app/i18n';
import SearchBook from '@/app/components/SearchBook';


export async function generateMetadata({ params, searchParams }, parent) {
    const { locale } = params
    const { t } = await initTranslations(locale, ['translation']);
    const canonical = `https://www.freewsad.com${locale === 'en' ? '' : '/' + locale}/books`

    return {
        title: t("Download free PDF books"),
        description: t("meta_description"),
        image: 'https://www.freewsad.com/thumbnail.png',
        siteName: 'FreeWsad',
        keywords: ['books', 'download books', 'pdf books', 'free books', 'download free pdf books', 'free pdf books', 'programming books', 'online books'],
        alternates: {
            canonical,
            languages: {
                'en': '/books',
                'ar': '/ar/books',
                'fr': '/fr/books',
                'es': '/es/books'
            },
        },
        openGraph: {
            title: t("Download free PDF books"),
            images: 'https://www.freewsad.com/thumbnail.png',
            description: t("meta_description"),
            url: canonical,
            type: 'website',
            image: {
                url: 'https://www.freewsad.com/thumbnail.png',
                alt: t("Download free PDF books"),
                width: 600,
                height: 800,
            },
        },
    }
}

const BooksPage = async ({ params: {locale}}) => {
    const { t }  = await initTranslations(locale, ['translation']);
    return (
        <main className='container'>
            <div className="row my-3 d-flex justify-content-center">
                <div className="col-md-6 text-center">
                    <div className='h6'>{t('Discover Your Next Favorite Book With our Search Tool!')}</div>
                    <SearchBook />
                </div>
            </div>
            <div className="row">
                <Books 
                    url={`https://books.amtar.shop/${locale}/api/books/new`}
                    title={(<h1 className='d-none'>{t("Download free PDF books")}</h1>)}
                />
            </div>
        </main>
    );
};

export default BooksPage;



