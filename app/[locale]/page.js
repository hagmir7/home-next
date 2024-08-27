import Books from '@/app/components/Books'
import SearchBook from '@/app/components/SearchBook'
import initTranslations from '../i18n'



export default async function Home({ params: { locale } }) {
  const { t } = await initTranslations(locale, ['translation'])
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
          url={`https://freesad.com/${locale}/api/books/`}
          title={(<h1 className='d-none'>{t("FreeWsad - Download FREE PDF books")}</h1>)}
        />
      </div>
    </main>
  )
}
