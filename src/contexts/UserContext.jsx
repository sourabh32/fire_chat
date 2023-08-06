import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase-config";
import { fetchUserFromFirestore } from "../firebase-functions";


export const userContext = createContext()



export const UserProvider = ({children})=>{
    const [user,setUser] = useState(null)
console.log("render")

    // console.log(user.uid)
 
    useEffect(()=>{
        const unsubscribe =  onAuthStateChanged(auth,async (currentUser)=>{
            if(currentUser){
                console.log(currentUser)
                const user = await fetchUserFromFirestore(currentUser.uid)
                console.log(user)
               setUser(user)
            }
            else{
                setUser(null)
            }
            
        })
        return () => unsubscribe();
    },[])
    const value = {name:"sourabh",user}
    return(
        <userContext.Provider value={value}>
            {children}
        </userContext.Provider>
    )
}