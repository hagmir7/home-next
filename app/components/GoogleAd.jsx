'use client'

import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

const GoogleAd = ({
  classNames = 'w-100', // Default parameter instead of defaultProps
  slot,
  timeout = 200, // Default parameter instead of defaultProps
  googleAdId,
  style,
  format,
}) => {
  let googleInit = null

  useEffect(() => {
    googleInit = setTimeout(() => {
      if (typeof window !== 'undefined') {
        ;(window.adsbygoogle = window.adsbygoogle || []).push({})
      }
    }, timeout)

    return () => {
      if (googleInit) clearTimeout(googleInit)
    }
  }, [timeout])

  return (
    <div className={classNames} id={googleAdId} aria-atomic={slot}>
      <ins
        className='adsbygoogle'
        style={style || { display: 'block', textAlign: 'center' }}
        data-ad-client={googleAdId}
        data-ad-slot={slot}
        data-ad-format={format || 'auto'}
        data-full-width-responsive='true'
      ></ins>
    </div>
  )
}

GoogleAd.propTypes = {
  classNames: PropTypes.string,
  slot: PropTypes.string,
  timeout: PropTypes.number,
  googleAdId: PropTypes.string,
  style: PropTypes.object,
  format: PropTypes.string,
}

// Removed defaultProps
// GoogleAd.defaultProps = {
//   classNames: 'w-100',
//   timeout: 200,
// }

export default GoogleAd
