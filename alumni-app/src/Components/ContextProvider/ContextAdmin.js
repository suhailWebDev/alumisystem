import React, { createContext, useReducer, useState } from 'react'
import { adminreducer } from '../Reducer/adminreducer';


export const initialState=null;
export const AdminContext = createContext();


const ContextAdmin = ({children}) => {

    const[adminstate,dispatchadmin]=useReducer(adminreducer,initialState);

  return (
    <>
    <AdminContext.Provider value={{adminstate,dispatchadmin}}>
        {children}
    </AdminContext.Provider>
    </>
  )
}

export default ContextAdmin