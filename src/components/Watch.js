import Product from './Product'
import React from 'react'
import EmptyProd from './EmptyProd'
import './Product.css'

export default function Watch() {
  document.title = 'Apple | Watch';
  return (
    <div className="container">
      <Product name='Apple Watch Series 7' desc='Best iPhone' price={200} prodImg='https://www.apple.com/v/apple-watch-series-7/d/images/overview/display/display_dimension_s7_static__er47vve3gawm_large.jpg' />
      <EmptyProd/>
      <EmptyProd/>
    </div>
  )
}
