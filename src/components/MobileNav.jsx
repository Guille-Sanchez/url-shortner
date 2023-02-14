export function MobileNav ({ showNavMobile }) {
  return (
    <nav className={showNavMobile ? 'mobile-nav-show' : 'mobile-nav-hide'}>
      <div>
        <ul>
          <li><a href='#'>Features</a></li>
          <li><a href='#'>Pricing</a></li>
          <li><a href='#'>Resources</a></li>
          <li><hr /></li>
          <li><a href='#'>Login</a></li>
          <li><button>Sing Up</button></li>
        </ul>
      </div>
    </nav>
  )
}
