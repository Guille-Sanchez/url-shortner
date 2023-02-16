import { useEffect } from 'react'

export function useSavedURL ({ allUserLinkCards, setAllUserLinkCards, setSavesIfRefresh }) {
  useEffect(() => { // reads when
    let subscribed = true
    let storedURLs = window.localStorage.getItem('userLinks')
    if ((storedURLs && allUserLinkCards.length === 0) && subscribed) {
      storedURLs = JSON.parse(storedURLs)
      setAllUserLinkCards((prev) => [...prev, ...storedURLs])
      window.localStorage.removeItem('userLinks')
      setSavesIfRefresh(() => true)
    }
    return () => {
      subscribed = false
    }
  }, [])
}
