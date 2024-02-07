'use client'

import React, {useState, useEffect} from 'react'
import style from '@/app/style/progress.module.css';
export default function ProgresBar() {
    const [progress, SetProgress] = useState(10);
    useEffect(()=>{
        const interval = setInterval(()=>{
            SetProgress((prevProgress) => prevProgress >= 100 ? 0 : prevProgress +10);
        }, 600);

        return () => {
           clearInterval(interval)
        }
    }, [])
  return (
    <>
      <div className={style.loadingContainer}>
        <div className={style.loadingBar} style={{ width: `${progress}%` }}></div>
      </div>
      <div>
        Loding..
      </div>
    </>
  )
}
