import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

function ProtectedRoute() {
    const user = useSelector((state)=> state.user.userDetails);
    const isLogin = !!user;
  return (
    isLogin ? <Outlet/> : <Navigate to={'/signin'}/>
  )
}

export default ProtectedRoute;