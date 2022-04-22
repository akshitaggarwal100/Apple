import React from 'react'
import Product from './Product'
import EmptyProd from './EmptyProd'
// import {
//     BrowserRouter as Router,
//     Routes,
//     Route,
// } from 'react-router-dom'
import {Link} from 'react-router-dom'

export default function Home() {
    document.title = 'Apple'
    return (

        <div id='section'>
            <div className="container">
                    <Product name='iPhone 13 Pro' desc='Oh. So. Pro.' price={200} prodImg='https://pngimg.com/uploads/iphone_13/iphone_13_PNG31.png' />
                <Product name='iPad Pro' desc='Supercharged by the Aplle M1 chip' price={400} prodImg='https://www.apple.com/v/ipad-pro/ai/images/overview/experience/intro_summary_static__epib5tclp926_large.png' />
                <Product name='Macbook Pro' desc='Supercharged for pros' price={900} prodImg='https://www.kindpng.com/picc/m/430-4300897_image-of-macbook-pro-macbook-pro-16-hd.png' />
            </div>

            <div className="container">
                <Product name='Apple Watch Series 7' desc='Best iPhone' price={200} prodImg='https://www.apple.com/v/apple-watch-series-7/d/images/overview/display/display_dimension_s7_static__er47vve3gawm_large.jpg' />
                <Product name='Airpods Max' desc='exhilarating high-fidelity audio and the effortless magic of AirPods' price={900} prodImg='https://www.apple.com/v/airpods/q/images/overview/airpods_max__f265q4g4ddym_large.png' />
                <EmptyProd />
            </div>
        </div>

    )
}
