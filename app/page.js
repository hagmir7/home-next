import Books from './components/Books'
import SearchBook from './components/SearchBook'

export default function Home() {
  return (
    <main className='container'>
      <div className="row my-3 d-flex justify-content-center">
      <div className="col-md-6 text-center">
          <div className='h6'>Discover Your Next Favorite Book With our Search Tool!</div>
          <SearchBook />
        </div>
      </div>
      <div className="row">
        <Books
          url={`https://freesad.com/en/api/books/`}
          title={(<h1 className='d-none'>FreeWsad - Download FREE PDF books</h1>)}
        />
      </div>
    </main>
  )
}
