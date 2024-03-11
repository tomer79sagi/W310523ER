import React from 'react'
import ProductNewOneField from './ProductNewOneField'
import ProductNewObject from './ProductNewObject'

const FormsMain = () => {
  return (
    <div>
        <h2>Product New - One Field</h2>
        <ProductNewOneField/>

        <hr style={{marginTop: '25px'}}/>
        <h2>Product New - Object</h2>
        <ProductNewObject/>
    </div>
  )
}

export default FormsMain
