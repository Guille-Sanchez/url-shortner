import { useState } from 'react'
import ButtonRemoveCard from './ButtonRemoveCard'

function LinkCard ({ userURL, index, setAllUserLinkCards }) {
  function clipboard () {
    navigator.clipboard.writeText(userURL.short_link)
    setCopyText((prev) => !prev)
  }

  const [copyText, setCopyText] = useState(false)
  return (
    <div className='link-card'>
      <p className='original-link'>{userURL.original_link}</p>
      <hr />
      <a href={userURL.short_link} className='short-link'>{userURL.short_link}</a>
      <div className='btn'>
        <ButtonRemoveCard
          position={index}
          setAllUserLinkCards={setAllUserLinkCards}
        />
        <button
          onClick={clipboard}
          className={copyText ? 'copied' : 'copy'}
        >
          {copyText ? 'Copied' : 'Copy'}
        </button>
      </div>
    </div>
  )
}

export default LinkCard
