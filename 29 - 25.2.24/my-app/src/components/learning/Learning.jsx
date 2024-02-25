import React from 'react';
import Clock from './Clock';

const Learning = () => {
  return (
    <div>
      <h3>Learning</h3>
      <Clock date={ new Date() }/>
    </div>
  )
}

export default Learning;
