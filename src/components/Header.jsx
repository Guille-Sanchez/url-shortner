import { useState } from 'react'
import { MobileNav } from './MobileNav'

function Header () {
  const [showNavMobile, setShowNavMobile] = useState(false)
  function showNav (e) {
    e.preventDefault()
    setShowNavMobile((prev) => !prev)
  }
  return (
    <>
      <header>
        <img src='logo.svg' alt='Shortly, a tool to shorten urls' />
        <nav />

        <button className='hamburger-button' onClick={showNav}>
          <div className='horizontal-line' />
          <div className='horizontal-line' />
          <div className='horizontal-line' />
        </button>

      </header>

      <MobileNav showNavMobile={showNavMobile} />
    </>
  )
}

export default Header
