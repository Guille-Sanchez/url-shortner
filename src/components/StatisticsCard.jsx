import { useRef } from 'react'

function StatisticsCard () {
  const cards = [
    {
      image: 'icon-brand-recognition.svg',
      title: 'Brand Recognition',
      body: 'Boost your brand recognition with each click. Generic links don&apos;tmean a thing. Branded links help instil confidence in your content.'
    },
    {
      image: 'icon-detailed-records.svg',
      title: 'Detailed Records',
      body: 'Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.'
    },
    {
      image: 'icon-fully-customizable.svg',
      title: 'Fully Customizable',
      body: 'Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.'
    }
  ]
  const cardsIndex = useRef(0)
  return (
    <div className='statistics-container'>
      {cards.map((card, index) => {
        cardsIndex.current = index + 1
        return (
          <div key={card.title} style={{ position: 'relative' }}>
            <div className={`statistics-card ${card.title.toLowerCase().split(' ').join('-')}`}>
              <div className='traslate-bg-top'>
                <div className='image-container'>
                  <img src={card.image} alt={card.title} />
                </div>
              </div>

              <div className='information'>
                <h2 style={{ margin: 0, padding: '30px 0 20px 0' }}>{card.title}</h2>
                <p>
                  {card.body}
                </p>
              </div>
            </div>
            {(cardsIndex.current < cards.length) && <div className='join-line' />}
          </div>
        )
      })}
    </div>

  )
}

export default StatisticsCard
