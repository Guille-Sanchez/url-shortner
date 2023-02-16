import URLsContextProvider from '../context/URLsContext'
import GetStartedButton from './GetStartedButton'
import ListLinkCards from './ListLinkCards'
import ShortenLinkForm from './ShortenLinkForm'

function Main () {
  return (
    <main>
      <section className='banner-container'>
        <img src='illustration-working.svg' alt='A draw showing a person in front of a computer' />
        <div className='banner-container inside'>
          <h1>More than just shorter links</h1>
          <p>Build your brand&apos;s recognition and get detailed insights
            on how your links are performing.
          </p>
          <GetStartedButton />
        </div>
      </section>

      <section>
        <URLsContextProvider>
          <ShortenLinkForm />
          <ListLinkCards />
        </URLsContextProvider>
      </section>

      <section className='advance-statistics'>
        <h2>Advanced Statistics</h2>
        <p>
          Track how your links are performing across the web with our
          advanced statistics dashboard.
        </p>
      </section>

      <section>
        <div className='statistics-card'>
          <div className='traslate-bg-top'>
            <div className='image-container'>
              <img src='icon-brand-recognition.svg' alt='Brand Recognition' />
            </div>
          </div>

          <div className='information'>
            <h2 style={{ margin: 0, padding: '30px 0 20px 0' }}>Brand Recognition</h2>
            <p>
              Boost your brand recognition with each click. Generic links don&apos;t
              mean a thing. Branded links help instil confidence in your content.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className='second-banner'>
          <div className='second-banner-top-bg' />
          <h2>Boost your links today</h2>
          <GetStartedButton />
        </div>
      </section>
    </main>
  )
}

export default Main
