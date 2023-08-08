import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth, db } from "../firebase-config";
import { fetchUserFromFirestore } from "../firebase-functions";
import { doc, getDoc, onSnapshot } from "firebase/firestore";


export const userContext = createContext()



export const UserProvider = ({children})=>{
    const [user,setUser] = useState(null)
console.log("render")

   
 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
          if (currentUser) {
              const unsubscribeListener = await fetchUserFromFirestore(currentUser.uid,setUser)
              return () => unsubscribeListener();
            }
            else {
                setUser(null);
              }
          } 
        );
      
        return () => unsubscribe();
      }, []);
      
    const value = {user}
    return(
        <userContext.Provider value={value}>
            {children}
        </userContext.Provider>
    )
}