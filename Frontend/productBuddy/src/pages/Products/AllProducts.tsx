import React from 'react'
import BasicExample from './ProductCard'
import ProductCard from './ProductCard'

function AllProducts() {
  return (
    <div className='m-10'>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
    </div>
  )
}

export default AllProducts
