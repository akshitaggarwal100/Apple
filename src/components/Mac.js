import React from 'react'
import Product from './Product'

export default function Mac() {
  document.title = 'Apple | Mac';
  return (
    <div className="container">
      <Product name='Macbook Air' desc='Power. It’s in the Air.' price={900} prodImg='https://help.apple.com/assets/6062258EBFC7E7487E19DBB0/60622591BFC7E7487E19DBBA/en_US/540d7697864354f0c0bed1741209d7f1.png' />
      <Product name='Macbook Pro' desc='Supercharged for pros.' price={1100} prodImg='https://www.kindpng.com/picc/m/430-4300897_image-of-macbook-pro-macbook-pro-16-hd.png' />
      <Product name='Mac Pro' desc='Power to change everything' price={2500} prodImg='https://help.apple.com/assets/61804086EAFA8C6F1D59B7AD/61804089EAFA8C6F1D59B7C5/en_US/fbac8523b0d81e806024f9d46cb3b976.png' />
    </div>
  )
}
