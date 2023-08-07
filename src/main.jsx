import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { UserProvider } from './contexts/UserContext.jsx'
import { ChakraProvider } from '@chakra-ui/react'
import ChatProvider from './contexts/ChatContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <UserProvider>
    <ChakraProvider>
      <ChatProvider>
<App />
</ChatProvider>
</ChakraProvider>
  </UserProvider>
    
 
)
