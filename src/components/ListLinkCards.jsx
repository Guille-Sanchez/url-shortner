import { useEffect, useState } from 'react'
import LinkCard from './LinkCard.jsx'

function ListLinkCards ({ userURL }) {
  console.log('hola')
  const [allUserLinkCards, setAllUserLinkCards] = useState([])
  const userLinks = [...allUserLinkCards]

  useEffect(() => {
    let storedURLs = window.localStorage.getItem('userLinks')
    if (storedURLs && allUserLinkCards.length === 0) {
      storedURLs = JSON.parse(storedURLs)
      storedURLs.map(item => console.log(`userlinks=${item}`))
      console.log('reads value')
      setAllUserLinkCards((prev) => [...prev, ...storedURLs])
      console.log('deletes value')
      window.localStorage.removeItem('userLinks')
    }
  }, [])

  useEffect(() => {
    let subscribed = true

    if (subscribed) {
      const links = [...allUserLinkCards, { ...userURL }]
      window.localStorage.setItem('userLinks', JSON.stringify(links))
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
  read
  useEffect(() => {
    console.log(window.localStorage.getItem('userLinks'))
  let storedLinks = window.localStorage.getItem('userLinks')
  if (storedLinks) {
    storedLinks = JSON.parse(storedLinks)
    storedLinks.map(item => console.log(`userlinks=${item}`))
    console.log(`userlinks=${storedLinks[0].original_link}`)
    setAllUserLinkCards((prev) => [...prev, ...storedLinks])
    window.localStorage.removeItem('userLinks')
  }
  }, [])

  write
      const userLinks = [...allUserLinkCards, { ...userURL }]
      window.localStorage.setItem('userLinks', JSON.stringify(userLinks))

      {
        allUserLinkCards?.map((cards, index) => {
          return (
            <LinkCard key={index} userURL={cards} />
          )
        })
      }

*/
