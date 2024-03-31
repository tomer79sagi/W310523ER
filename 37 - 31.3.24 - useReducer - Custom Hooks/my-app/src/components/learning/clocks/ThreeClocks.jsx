import React from 'react'
import ClockTZ from './ClockTZ'

const ThreeClocks = () => {
  return (
    <div>
      <ClockTZ name='Tel Aviv'/>
      <ClockTZ name='New York (EST)' timeZone='America/New_York'/>
      <ClockTZ name='London' timeZone='Europe/London'/>
    </div>
  )
}

export default ThreeClocks;
