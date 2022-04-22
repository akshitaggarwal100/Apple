import React from 'react'
import Product from './Product'
import EmptyProd from './EmptyProd'
import './Product.css'

export default function Airpod() {
  document.title = 'Apple | Airpod';
  return (
    <div className="container">
      <Product name='Airpods Max' desc='exhilarating high-fidelity audio and the effortless magic of AirPods' price={900} prodImg='https://www.apple.com/v/airpods/q/images/overview/airpods_max__f265q4g4ddym_large.png' />
      <EmptyProd/>
      <EmptyProd/>
    </div>
  )
}
