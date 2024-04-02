import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

function Auth() {
    let user = true
    return user ? <Outlet /> : <Navigate replace to={'/loging'} />
}

export default Auth