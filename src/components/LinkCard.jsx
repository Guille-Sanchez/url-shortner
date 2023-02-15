import { useState } from 'react'

function LinkCard ({ userURL }) {
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
      <button
        onClick={clipboard}
        className={copyText ? 'copied' : 'copy'}
      >
        {copyText ? 'Copied' : 'Copy'}
      </button>
    </div>
  )
}

export default LinkCard
