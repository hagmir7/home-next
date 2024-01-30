"use client"
import React, { useState, useEffect } from 'react';

const Progress = ({ progress }) => {
  const [barWidth, setBarWidth] = useState(0);

  useEffect(() => {
    setBarWidth(progress * 100);
  }, [progress])

  return (
    <div className='progress-bar'>
      <div className='progress-bar-fill' style={{ width: `${barWidth}%` }} />
    </div>
  )
}

export default Progress;
