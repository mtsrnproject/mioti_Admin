import React, { useState, useContext, createContext } from 'react'
const AdminContext = createContext(null)

export const AdminProvider = ({ childern }) => {
  const [user, setUser] = useState(null)

  const login = () => {
    setUser(user)
  }
  const logout = () => {
    setUser(null)
  }
  return <AdminContext.Provider value={{ user, login, logout }}>{childern}</AdminContext.Provider>
}

export const useAdmin = () => {
  return useContext(AdminContext)
}
