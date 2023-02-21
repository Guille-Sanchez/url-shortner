import React from 'react'

function deleteURL (position, setAllUserLinkCards) {
  const links = JSON.parse(window.localStorage.getItem('userLinks'))
  window.localStorage.removeItem('userLinks')

  links.splice(position, 1)

  window.localStorage.setItem('userLinks', JSON.stringify(links))
  setAllUserLinkCards(() => links)

  window.localStorage.setItem('userLinks', JSON.stringify(links))
  setAllUserLinkCards(() => links)
}

function ButtonRemoveCard ({ position, setAllUserLinkCards }) {
  return (
    <button className='btn-delete' onClick={() => deleteURL(position, setAllUserLinkCards)}>Delete</button>
  )
}

export default ButtonRemoveCard
