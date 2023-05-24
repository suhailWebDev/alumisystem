import React, { createContext, useReducer, useState } from 'react'
import { staffreducer } from '../Reducer/staffreducer';



export const initialState=null;
export const StaffContext = createContext();


const ContextStaff = ({children}) => {

    const[staffstate,dispatchstaff]=useReducer(staffreducer,initialState);

  return (
    <>
    <StaffContext.Provider value={{staffstate,dispatchstaff}}>
        {children}
    </StaffContext.Provider>
    </>
  )
}

export default ContextStaff