import React from 'react'

function Footer () {
  return (
    <footer>
      <img src='logo-footer.svg' alt='Shortly, a tool to shorten urls' />

      <nav>
        <ul>
          <li><h3>Features</h3></li>
          <li><a href='#'>Link Shortening</a></li>
          <li><a href='#'>Branded Links</a></li>
          <li><a href='#'>Analytics</a></li>
        </ul>

        <ul>
          <li><h3>Resources</h3></li>
          <li><a href='#'>Blog</a></li>
          <li><a href='#'>Developers</a></li>
          <li><a href='#'>Support</a></li>
        </ul>

        <ul>
          <li><h3>Company</h3></li>
          <li><a href='#'>About</a></li>
          <li><a href='#'>Our Team</a></li>
          <li><a href='#'>Careers</a></li>
          <li><a href='#'>Contact</a></li>
        </ul>

        <ul className='media-icons'>
          <li><a href='#' /><img src='icon-facebook.svg' alt='Go to Facebook' /></li>
          <li><a href='#' /><img src='icon-twitter.svg' alt='Go to Twitter' /></li>
          <li><a href='#' /><img src='icon-pinterest.svg' alt='Go to Pinterest' /></li>
          <li><a href='#' /><img src='icon-instagram.svg' alt='Go to Instagram' /></li>
        </ul>

      </nav>
    </footer>
  )
}

export default Footer
