import React from 'react'
import Product from './Product'
import EmptyProd from './EmptyProd'
import './Product.css'

export default function Ipad() {
  document.title = 'Apple | iPad';
  return (
    <div className="container">
      <Product name='iPad Pro' desc='Supercharged by the Aplle M1 chip' price={400} prodImg='https://www.apple.com/v/ipad-pro/ai/images/overview/experience/intro_summary_static__epib5tclp926_large.png' />
      <EmptyProd/>
      <EmptyProd/>
    </div>
  )
}
