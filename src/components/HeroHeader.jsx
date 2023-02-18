import GetStartedButton from './GetStartedButton'

export function HeroHeader () {
  return (
    <section className='banner-container'>
      <div className='hero-image'>
        <img src='illustration-working.svg' alt='A draw showing a person in front of a computer' />
      </div>
      <div className='inside'>
        <h1>More than just shorter links</h1>
        <p>Build your brand&apos;s recognition and get detailed insights
          on how your links are performing.
        </p>
        <GetStartedButton />
      </div>
    </section>
  )
}
