import React, { createContext, useReducer, useState } from 'react'
import { initialState,reducer } from '../Reducer/reducer';


export const UserContext = createContext();


const Context = ({children}) => {

    const[state,dispatch]=useReducer(reducer,initialState);

  return (
    <>
    <UserContext.Provider value={{state,dispatch}}>
        {children}
    </UserContext.Provider>
    </>
  )
}

export default Context