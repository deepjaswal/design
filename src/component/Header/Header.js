import React from 'react'

const Header = () => {
  return (
    <header>
        <div className='side-header-innerdata'>
            <nav>
                <ul>
                    <li>
                        <a href='#'>Home</a>
                    </li>
                    <li>
                        <a href='#'>Search</a>
                    </li>
                </ul>
                <ul className='library-link'>
                    <li>
                        <a href='#'>Your library</a>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
  )
}

export default Header