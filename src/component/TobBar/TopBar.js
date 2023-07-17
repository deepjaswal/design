import React from 'react'

const TopBar = () => {
  return (
    <>
    <div className='topbar-block'>
        <div className='topbar-block-inner'>
            <div className='arrows'></div>
        </div>
        <div className='btns-block'>
            <a href='#' className='btn-pri btn'>Sign up</a>
            <a href='#' className='btn-sec btn'>Login</a>
        </div>
    </div>
    </>
  )
}

export default TopBar