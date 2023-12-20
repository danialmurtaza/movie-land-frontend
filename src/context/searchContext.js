import React, { useState } from 'react'

export const SearchContext = React.createContext({
  searchTerm: "",
  setSearchTerm: () => {}
})

export const SearchContextProvider = (props) => {

  const setSearchTerm = (searchTerm) => {
    setState({...state, searchTerm: searchTerm})
  }

  const initState = {
    searchTerm: "",
    setSearchTerm: setSearchTerm
  } 

  const [state, setState] = useState(initState)

  return (
    <SearchContext.Provider value={state}>
      {props.children}
    </SearchContext.Provider>
  )
}