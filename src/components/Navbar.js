import React from 'react'
import {Link} from 'react-router-dom'
import './Product.css'

export default function Navbar() {
  return (
    <header>
          <nav>
            <ul>
              <li><Link to = '/'>Apple</Link></li>
              <li><Link to = '/Mac'>Mac</Link></li>
              <li><Link to = '/iPad'>iPad</Link></li>
              <li><Link to = '/iPhone'>iPhone</Link></li>
              <li><Link to = '/Watch'>Watch</Link></li>
              <li><Link to = '/Airpod'>Airpod</Link></li>
            </ul>
          </nav>
        </header>
  )
}
