import { useRef, useState } from 'react'
import LinkCard from './LinkCard.jsx'
import validURL from './moockups/validURL.json'

function ShortenLinkForm () {
  // const [userURL, setUserURL] = useState('')
  const [userURL, setUserURL] = useState({ short_link: '', original_link: '' })
  const linkToShort = useRef('')

  function obtainShortenLink () {
    // https://www.rollingstone.com/music/music-lists/best-albums-of-all-time-1062063/david-bowie-the-rise-and-fall-of-ziggy-stardust-1063193/
    // const API_TO_SHORTHEN_LINKS = 'https://api.shrtco.de/v2/shorten?url='
    // const SEND_TO_SHORT = API_TO_SHORTHEN_LINKS + linkToShort.current

    const URL_INFO = validURL
    const shortLink = { short_link: URL_INFO.result.full_short_link, original_link: URL_INFO.result.original_link }
    setUserURL((prev) => ({ ...prev, ...shortLink }))
    console.log(shortLink)
  }

  function verifyUrl (e) {
    linkToShort.current = e.target.value
    console.log(linkToShort.current)
  }

  function onSubmitLink (e) {
    e.preventDefault()
    obtainShortenLink({ linkToShort })
  }
  return (
    <section>
      <div className='form-container'>
        <form onSubmit={onSubmitLink}>
          <div className='bg-form' />

          <input onChange={verifyUrl} type='text' placeholder='Shorten a link here...' />
          <button type='submit'>Shorten It!</button>
        </form>
      </div>
      {userURL?.short_link && <LinkCard userURL={userURL} />}
    </section>
  )
}

export default ShortenLinkForm
