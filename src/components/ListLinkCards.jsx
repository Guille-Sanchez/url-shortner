import { useContext, useEffect, useState } from 'react'
import { userURLContext } from '../context/URLsContext.jsx'
import LinkCard from './LinkCard.jsx'

function ListLinkCards () {
  const { userURL } = useContext(userURLContext)
  const [allUserLinkCards, setAllUserLinkCards] = useState([])
  const userLinks = [...allUserLinkCards]

  useEffect(() => {
    let subscribed = true
    console.log(userURL)
    if (subscribed && userURL.short_link) {
      console.log('hola')
      setAllUserLinkCards((prev) => [...prev, { ...userURL }])
    }
    return () => {
      subscribed = false
    }
  },
  [userURL])

  return (
    <>
      {
        userLinks?.map((cards, index) => {
          return (
            <LinkCard key={index} userURL={cards} />
          )
        })
      }
    </>
  )
}

export default ListLinkCards

/*
  useEffect(() => {
    let storedURLs = window.localStorage.getItem('userLinks')
    if (storedURLs && allUserLinkCards.length === 0) {
      storedURLs = JSON.parse(storedURLs)
      // storedURLs.map(item => console.log(`userlinks=${item}`))
      // console.log('reads value')
      setAllUserLinkCards((prev) => [...prev, ...storedURLs])
      // console.log('deletes value')
      window.localStorage.removeItem('userLinks')
    }
  }, []) */

// const links = [...allUserLinkCards, { ...userURL }]
// window.localStorage.setItem('userLinks', JSON.stringify(links))
