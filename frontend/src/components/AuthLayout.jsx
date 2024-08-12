/* eslint-disable react/prop-types */
import store from "@/store/store"
import { useEffect } from "react"
// import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"


export const AuthLayout = ({
  children,
  authentication = true  // change this to false if you want to make unauthenticated users able to access some routes  // example: /login, /logout, /profile, /admin
}) => {
  const navigate = useNavigate()
  const authStatus = store.getState().auth.isLoggedIn

  useEffect(() => {
    if(authentication && authStatus !== authentication){
      navigate("/login")
    } else if(!authentication && authStatus !== authentication){
        navigate("/")
    }
}, [authStatus, navigate, authentication])

  return <>{children}</>
}
