import React from 'react';
import Link from 'next/link';
import initTranslations from '@/app/i18n';


export async function generateMetadata({params, searchParams },parent) {
  const {locale} = params;
  const {t} = await initTranslations(locale, ['translation']);

  return {
    title: t('Menu - FreeWsad'),
    alternates: {
      canonical: '/pages/menu',
    },
  }
}

export default async function MenuPage({params : {locale}}) {
  const {t} = await initTranslations(locale, ['translation'])
  return (
    <div className="container">
      <div className="row justify-content-center mt-3">
        <div className="col-12 col-md-6 col-lg-6 col-xl-6">
          <h1 className='d-none'>{t('Menu - Freewsad More inforamation')}</h1>
          <div className="list-group">
            <Link className="list-group-item list-group-item-action" href="/"><img src="/assets/imgs/svg/home.svg" alt={t('Home')} width="30px" height="30px" />&nbsp; {t('Home')}</Link>
            <Link className="list-group-item list-group-item-action" href="/blog"><img src="/assets/imgs/svg/post.svg" alt={t('Blogs')} width="30px" height="30px" />&nbsp; {t('Blogs')}</Link>
            <Link className="list-group-item list-group-item-action" href="/books"><img src="/assets/imgs/svg/book.svg" alt={t("Books")} width="30px" height="30px" />&nbsp; {t("Books")}</Link>
            <Link className="list-group-item list-group-item-action" href="/books/categories"><img src="/assets/imgs/svg/book.svg" alt={t("Books Categories")} width="30px" height="30px" />&nbsp; {t("Books Categories")}</Link>
            <Link className="list-group-item list-group-item-action" href="/pages/about"><img src="/assets/imgs/svg/info.svg" alt={t('About Us')} width="30px" height="30px" />&nbsp; {t('About Us')}</Link>
            <Link className="list-group-item list-group-item-action" href="/pages/contact"><img src="/assets/imgs/svg/contact.svg" alt={t('Contact Us')} width="30px" height="30px" />&nbsp; {t('Contact Us')}</Link>
            <Link className="list-group-item list-group-item-action" href="/pages/privacy"><img src="/assets/imgs/svg/privacy.svg" alt={t('Privacy Policy')} width="30px" height="30px" />&nbsp; {t('Privacy Policy')}</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
