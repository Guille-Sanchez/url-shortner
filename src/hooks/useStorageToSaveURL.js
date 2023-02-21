import { useEffect, useState } from 'react'

export function useStorageToSaveURL ({ userURL }) {
  const [allUserLinkCards, setAllUserLinkCards] = useState([])
  const [savesIfRefresh, setSavesIfRefresh] = useState(false)

  useEffect(() => {
    let subscribed = true
    if (subscribed && userURL.short_link.length > 0) { // Saves links
      const links = [...allUserLinkCards, { ...userURL }]
      window.localStorage.setItem('userLinks', JSON.stringify(links))
      setAllUserLinkCards((prev) => [...prev, { ...userURL }])
    } if (savesIfRefresh && subscribed) { // Loads links after refreshing page
      const links = [...allUserLinkCards]
      window.localStorage.setItem('userLinks', JSON.stringify(links))
      setSavesIfRefresh(() => false)
    }
    return () => {
      subscribed = false
    }
  },
  [userURL, savesIfRefresh])
  return ({ allUserLinkCards, setAllUserLinkCards, setSavesIfRefresh })
}
