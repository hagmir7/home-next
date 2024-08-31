import Link from 'next/link';

export default function PostCard(props) {
  return (
    <div className='col-12 col-md-6 col-lg-4 mb-3' ref={props.last} key={props.slug}>
      <Link href={`/p/${props.slug}`}>
        <div className='img-content'>
          <img
            className='card-img-top m-0 p-0 border rounded'
            width='100%'
            height='100%'
            src={`https://al-kora.com${props.image}`}
            alt={props.title}
            title={props.title}
          />
        </div>
      </Link>
      <div className='card-body m-0 p-0 mt-2'>
        <Link href={`/p/${props.slug}`}>
          <div className='card-title h5 my-0 py-0 text-black'>
            {props.title}
          </div>
        </Link>
      </div>
    </div>
  )
}
