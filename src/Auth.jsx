import { signInWithPopup } from 'firebase/auth'
import React from 'react'
import { auth, provider } from './firebase-config'
import Cookies from 'universal-cookie'
const cookies = new Cookies()
const Auth = ({set}) => {
    
    const signInWithGoogle =  async () =>{
        try {
            const res = await signInWithPopup(auth,provider);
            cookies.set("auth-token",res.user.refreshToken)
            set(true)
        } catch (error) {
            console.log(error)
        }
        
    }
  return (
    <div>
        <button onClick={signInWithGoogle}>google</button>
    </div>
  )
}

export default Auth