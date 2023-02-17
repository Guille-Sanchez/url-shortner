import URLsContextProvider from '../context/URLsContext'
import GetStartedButton from './GetStartedButton'
import { HeroHeader } from './HeroHeader'
import ListLinkCards from './ListLinkCards'
import ShortenLinkForm from './ShortenLinkForm'
import StatisticsCard from './StatisticsCard'

function Main () {
  return (
    <main>
      <HeroHeader />
      <section className='form-section'>
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
        <StatisticsCard />
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
