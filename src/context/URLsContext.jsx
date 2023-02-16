import { createContext, useState } from 'react'

export const userURLContext = createContext()
function URLsContextProvider ({ children }) {
  const [userURL, setUserURL] = useState({ short_link: '', original_link: '' })

  return (
    <userURLContext.Provider value={{
      userURL,
      setUserURL
    }}
    >
      {children}
    </userURLContext.Provider>
  )
}

export default URLsContextProvider
