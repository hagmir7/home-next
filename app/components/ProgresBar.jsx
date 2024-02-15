'use client'

import React, { useState, useEffect } from 'react'
import style from '@/app/style/progress.module.css'
export default function ProgresBar() {
  const [progress, SetProgress] = useState(10)
  useEffect(() => {
    const interval = setInterval(() => {
      SetProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 10
      )
    }, 600)

    return () => {
      clearInterval(interval)
    }
  }, [])
  return (
    <>
      <div className={style.loadingContainer}>
        <div
          className={style.loadingBar}
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <div className='container'>
        <div className='row d-flex justify-content-center'>
          <div className='col-10'>
            <div className='border-0 loading'>
              <div className='image rounded'></div>
              <div className='image rounded mt-3'></div>
              <div className='content'>
                <div></div>
              </div>
              <div className='content'>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
