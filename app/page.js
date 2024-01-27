import Image from 'next/image'
import styles from './page.module.css'
import Books from './components/Books'

export default function Home() {
  return (
    <main className='container'>
      <div className="row">
        <Books />
      </div>
    </main>
  )
}
