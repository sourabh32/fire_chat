import { signInWithPopup,signOut } from "firebase/auth";
import { auth, db, provider } from "./firebase-config";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { useContext } from "react";
import { userContext } from "./contexts/UserContext";


export const logOut = async () =>{
try {
    await signOut(auth)
} catch (error) {
    console.log(error)
}
}


export const signInWithGoogle =  async () =>{
    try {
        const {user} = await signInWithPopup(auth,provider);
        console.log(user)
        createUserDocument(user)
    } catch (error) {
        console.log(error.message)
    }
    
}



const createUserDocument = async (user) =>{
   const {uid,displayName,photoURL,email} = user
    try {
        const userDocRef = doc(db, "users", uid);
        const userDocSnapshot = await getDoc(userDocRef);
        if(!userDocSnapshot.exists()){
            await setDoc(userDocRef, {
               displayName,
               photoURL,
               email,
                chatRooms: [],
                uid
              });
        }
        else{
            console.log("alredy created")
        }
    } catch (error) {
        console.log(error)
    }

}


export const handleAddRoom = async (room,user) => {
    try {
      // Check if the user is authenticated
     
      if (user) {
        // Get the user's document reference
        const userDocRef = doc(db, 'users', user.id);
  
        // Fetch the user's existing data
        const userDocSnapshot = await getDoc(userDocRef);
        if (userDocSnapshot.exists()) {
          const userData = userDocSnapshot.data();
  
          // Update the chatRooms array with the new room value
          const updatedChatRooms = [...userData.chatRooms, room];
  
          // Update the user document with the updated chatRooms array
          await updateDoc(userDocRef, { chatRooms: updatedChatRooms });
  
          console.log('Room added successfully.');
        } else {
          console.log('User document does not exist.');
        }
      } else {
        console.log('User not authenticated.');
      }
    } catch (error) {
      console.error('Error adding room:', error);
    }
  };
  

export const fetchUserFromFirestore = async  (uid) =>{
    try {
        const userDocRef = doc(db, 'users', uid);
        const userDocSnapshot = await getDoc(userDocRef)
        return userDocSnapshot.data()
    } catch (error) {
        console.log('User document does not exist.');
    }
        
      
}