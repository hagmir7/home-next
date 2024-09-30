import Books from "@/app/components/Books"
import SearchBook from "@/app/components/SearchBook"
import initTranslations from "@/app/i18n"


export async function generateMetadata({ params }) {

  const { locale } = params;
  const { t } = await initTranslations(locale, ['translation']);
  const canonical = `https://www.freewsad.com/${locale === "en" ? '' : locale + "/"}books/trending`
 
  return {
    title: t('Download the Best Free PDF books'),
    alternates: {canonical},
    openGraph: {
      title: t('Download the Best Free PDF books'),
      images: 'https://www.freewsad.com/thumbnail.png',
      description: t('meta_description'),
      url: canonical,
      type: 'website',
      image: {
        url: 'https://www.freewsad.com/thumbnail.png',
        alt: t('Download the Best Free PDF books'),
        width: 600,
        height: 800,
      },
    },
  }
}

export default async function Trending({params : {locale}}) {
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
          url={`https://freesad.com/${locale}/api/books`}
          title={<h1 className='d-none'>{t("Download the Best Free PDF books")}</h1>}
        />
      </div>
    </main>
  )
}
