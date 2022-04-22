import React from 'react'
import Product from './Product'

export default function Iphone() {
  document.title = 'Apple | iPhone';
  return (
    <>
      <div className="container">
        <Product name='iPhone 13 Pro' desc='Oh. So. Pro.' price={200} prodImg='https://pngimg.com/uploads/iphone_13/iphone_13_PNG31.png' />
        <Product name='iPhone 12' desc='Blast past fast.' price={180} prodImg='https://images.squarespace-cdn.com/content/v1/59d2bea58a02c78793a95114/1602686328042-601UYWSRVF16QBZ47WX8/iPhone+12+%28PRODUCT%29RED?format=500w' />
        <Product name='iPhone SE' desc='Love the power. Love the price.' price={150} prodImg='https://www.apple.com/v/iphone-se/h/images/overview/durability/drops/durable_static__e9mkf1yt8ziy_large.jpg' />
      </div>
    </>
  )
}
