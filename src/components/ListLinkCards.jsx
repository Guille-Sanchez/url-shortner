import { useContext } from 'react'
import { userURLContext } from '../context/URLsContext.jsx'
import { useStorageToSaveURL } from '../hooks/useStorageToSaveURL.js'
import { useReadSavedURL } from '../hooks/useReadSavedURL'
import LinkCard from './LinkCard.jsx'

function ListLinkCards () {
  const { userURL } = useContext(userURLContext)
  const { allUserLinkCards, setAllUserLinkCards, setSavesIfRefresh } = useStorageToSaveURL({ userURL })

  useReadSavedURL({ allUserLinkCards, setAllUserLinkCards, setSavesIfRefresh })

  return (
    <>
      {
        allUserLinkCards?.map((cards, index) => {
          return (
            <LinkCard key={index} userURL={cards} />
          )
        })
      }
    </>
  )
}

export default ListLinkCards
