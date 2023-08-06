
import React from 'react'
import { signInWithGoogle } from './firebase-functions'


const Auth = () => {
    
  return (
    <div className="auth-container">
    <div className="auth-card">
      <h2>Welcome to My Chat App</h2>
      <p>Sign in to start chatting</p>
      <button className="google-button" onClick={signInWithGoogle}>
        Sign in with Google
      </button>
    </div>
  </div>
  )
}

export default Auth