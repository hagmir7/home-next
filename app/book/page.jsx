import Books from '../components/Books'
import SearchBook from '../components/SearchBook'

export const metadata = {
  title: 'Download New & Free PDF books',

  alternates: {
    canonical: 'https://www.freewsad.com/book',
  },
  openGraph: {
    title: 'Download New & Free PDF books',
    images: '/thumbnail.png',
    description:
      'You can enjoy the Topics and Books you love and download the original content, and share it all with your friends in FreeWsad.',
    url: '/book',
    type: 'website',
    image: {
      url: '/thumbnail.png',
      alt: 'Download New & Free PDF books',
      width: 600,
      height: 800,
    },
  },
}

export default function Home() {
  return (
    <main className='container'>
      <div className='row my-3 d-flex justify-content-center'>
        <div className='col-md-6 text-center'>
          <div className='h6'>
            Discover Your Next Favorite Book With our Search Tool!
          </div>
          <SearchBook />
        </div>
      </div>
      <div className='row'>
        <Books
          url={`https://freesad.com/en/api/books/new`}
          title={<h1 className='d-none'>Download New & free PDF books</h1>}
        />
      </div>
    </main>
  )
}
