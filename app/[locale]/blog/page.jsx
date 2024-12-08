import React from 'react'
import PostCard from '@/app/components/PostCard'
import LoadPosts from '@/app/components/LoadPosts'
import initTranslations from '@/app/i18n'


export default async ({ params: { locale } }) => {
  const response = await fetch(`https://api.facepy.com/${locale}/api/`)
  const responsData = await response.json();

  const {t} = await initTranslations(locale, ['translation']);
  return (
    <div className='container mt-3'>
      <h1 className='h3'>{t('Last articles')}</h1>
      <div className='row'>
        {responsData.data.map((post) => {
          return (
            <PostCard
              title={post.title}
              key={post.slug}
              image={post.image ? post.image : '/assets/img/placholder.png'}
              slug={post.slug}
            />
          )
        })}

        <LoadPosts locale={locale} />
      </div>
    </div>
  )
}
