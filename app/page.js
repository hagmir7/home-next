import Image from 'next/image'
import styles from './page.module.css'
import Books from './components/Books'
import Loader from '@/app/components/Loader'

export default function Home() {
  return (
    <main className='container'>
      <div className="row">
        <Books />
      </div>
      <Loader />
    </main>
  )
}
