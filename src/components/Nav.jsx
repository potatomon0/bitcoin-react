import React from 'react'
import {Link} from 'react-router-dom' //link is like the anchor tag

function Nav() {
  return (
    <div className='nav'>
        <Link to="/price">
            <div>Crypto Price</div>
        </Link>
        <Link to="/currencies">
            <div>Currencies</div>
        </Link>
    </div>
  )
}

export default Nav