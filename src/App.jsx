import './styles.css'
function App () {
  return (
    <>
      <header>
        <img src='logo.svg' alt='Shortly, a tool to shorten urls' />
        <nav />
        <div className='hamburger-button'>
          <div className='horizontal-line' />
          <div className='horizontal-line' />
          <div className='horizontal-line' />
        </div>
      </header>

      <main>
        <section className='banner-container'>
          <img src='illustration-working.svg' alt='A draw showing a person in front of a computer' />
          <div className='banner-container inside'>
            <h1>More than just shorter links</h1>
            <p>Build your brand&apos;s recognition and get detailed insights
              on how your links are performing.
            </p>
            <button>Get Started</button>
          </div>
        </section>

        <section>
          <div className='form-container'>
            <form>
              <div className='bg-form' />

              <input type='text' placeholder='Shorten a link here...' />
              <button>Shorten It!</button>
            </form>
          </div>
        </section>

        <section className='advance-statistics'>
          <h2>Advanced Statistics</h2>
          <p>
            Track how your links are performing across the web with our
            advanced statistics dashboard.
          </p>
        </section>

        <section>
          <div>
            <img src='icon-brand-recognition.svg' alt='Brand Recognition' />
            <h2>Brand Recognition</h2>
            <p>
              Boost your brand recognition with each click. Generic links don&apos;t
              mean a thing. Branded links help instil confidence in your content.
            </p>
          </div>
        </section>

        <section>
          <div>
            <h2>Boost your links today</h2>
            <button>Get Started</button>
          </div>
        </section>
      </main>
      {/* <footer>
        <img src='logo.svg' alt='Shortly, a tool to shorten urls' />
        <nav>
          <ul>
            <li><h3>Features</h3></li>
            <li>Link Shortening</li>
            <li>Branded Links</li>
            <li>Analytics</li>
          </ul>
          <ul>
            <li><h3>Resources</h3></li>
            <li>Blog</li>
            <li>Developers</li>
            <li>Support</li>
          </ul>
          <ul>
            <li><h3>Company</h3></li>
            <li>About</li>
            <li>Our Team</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
          <ul>
            <li><a href='#' /><img src='icon-facebook.svg' alt='Go to Facebook' /></li>
            <li><a href='#' /><img src='icon-twitter.svg' alt='Go to Twitter' /></li>
            <li><a href='#' /><img src='icon-pinterest.svg' alt='Go to Pinterest' /></li>
            <li><a href='#' /><img src='icon-instagram.svg' alt='Go to Instagram' /></li>

          </ul>
        </nav>
  </footer> */}
      <div className='attribution' style={{ display: 'none' }}>
        Challenge by <a href='https://www.frontendmentor.io?ref=challenge' target='_blank' rel='noreferrer'>Frontend Mentor</a>.
        Coded by <a href='#'>Your Name Here</a>.
      </div>
    </>
  )
}

export default App
