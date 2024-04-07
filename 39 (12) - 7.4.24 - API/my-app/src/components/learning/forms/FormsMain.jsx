import React from 'react'
import ProductNewOneField from './ProductNewOneField'
import ProductNewObject from './ProductNewObject'
import ProductNewClassInstance from './ProductNewClassInstance'

const FormsMain = () => {
  return (
    <div>
        <h2>Product New - One Field</h2>
        <ProductNewOneField/>

        <hr style={{marginTop: '25px'}}/>
        <h2>Product New - Object</h2>
        <ProductNewObject/>

        <hr style={{marginTop: '25px'}}/>
        <h2>Product New - Class Instance</h2>
        <ProductNewClassInstance/>
    </div>
  )
}

export default FormsMain
