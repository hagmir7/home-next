import CopyRight from '@/app/components/CopyRight'
import Link from 'next/link'


export default async function Post(props) {
  const response = await fetch(`https://freesad.com/en/api/post/${props.params.slug}`)
  const responsData = await response.json()
  return (
    <div className='container-lg mt-3' style={{ height: 'auto!important' }}>
      <div className='row' style={{ height: 'auto!important' }}>
        <div
          className='col-12 col-md-7 col-lg-8 col-xl-8 mb-3 m-0'
          style={{ height: 'auto!important' }}
        >
        <article className='blog-post' style={{ height: 'auto!important' }}>
            <h1 dir='auto' className='blog-post-title h4 mt-2'> {responsData.title}</h1>
            <img className='rounded' src={`https://freesad.com/${responsData.image}`} width="100%" height="auto" alt={responsData.title} />
            <p dir='auto' className='text-left h6 text-muted fw-bold mt-2'> At {new Date(responsData.created).toLocaleDateString()}{' '}</p>
            <div dangerouslySetInnerHTML={{ __html: responsData.body }} />
            <div></div>

        </article>
        
        </div>
        <div
          className='col-12 col-md-5 col-lg-4 col-xl-4 position-relative mb-3'
          style={{ height: 'auto!important' }}
        >


          <CopyRight />
        </div>
      </div>
      {/* <PostCards /> */}
    </div>
  )
}
