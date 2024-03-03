import Books from '@/app/components/Books';
import SearchBook from '@/app/components/SearchBook';
import initTranslations from '@/app/i18n';

export const metadata = {
  title: 'Download New free PDF books',

  alternates: {
    canonical: 'https://www.freewsad.com/books/new',
  },
  openGraph: {
    title: 'Download New free PDF books',
    images: 'https://www.freewsad.com/thumbnail.png',
    description: 'You can enjoy the Topics and Books you love and download the original content, and share it all with your friends in FreeWsad.',
    url: '/books/new',
    type: 'website',
    image: {
      url: 'https://www.freewsad.com/thumbnail.png',
      alt: 'Download New free PDF books',
      width: 600,
      height: 800,
    },
  },
}

export default async function Trending({params: {locale}}) {
  const { t } = await initTranslations(locale, ['translation'])
  return (
    <main className='container'>
      <div className='row my-3 d-flex justify-content-center'>
        <div className='col-md-6 text-center'>
          <div className='h6'>
            {t('Discover Your Next Favorite Book With our Search Tool!')}
          </div>
          <SearchBook />
        </div>
      </div>
      <div className='row'>
        <Books
          url={`https://freesad.com/${locale}/api/books/new`}
          title={<h1 className='d-none'>{t('Download New free PDF books')}</h1>}
        />
      </div>
    </main>
  )
}
