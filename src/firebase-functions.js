import { signInWithPopup, signOut } from "firebase/auth";
import { auth, db, provider } from "./firebase-config";
import { doc, getDoc, onSnapshot, setDoc, updateDoc } from "firebase/firestore";
import { useContext } from "react";
import { userContext } from "./contexts/UserContext";

export const logOut = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.log(error);
  }
};

export const signInWithGoogle = async () => {
  try {
    const { user } = await signInWithPopup(auth, provider);
    console.log(user);
    createUserDocument(user);
  } catch (error) {
    console.log(error.message);
  }
};

const createUserDocument = async (user) => {
  const { uid, displayName, photoURL, email } = user;
  try {
    const userDocRef = doc(db, "users", uid);
    const userDocSnapshot = await getDoc(userDocRef);
    if (!userDocSnapshot.exists()) {
      await setDoc(userDocRef, {
        displayName,
        photoURL,
        email,
        chatRooms: [],
        uid,
      });
    } else {
      console.log("alredy created");
    }
  } catch (error) {
    console.log(error);
  }
};


export const handleAddRoom = async (room,uid) =>{
try {
  if(uid && room !==""){
  const userDocRef = doc(db,"users",uid)
  const userDocSnapshot = await getDoc(userDocRef)
  if(userDocSnapshot.exists()){
    const userData = userDocSnapshot.data()
    const updatedChatRooms = [...userData.chatRooms,room]
    await updateDoc(userDocRef,{
      chatRooms:updatedChatRooms
    })
    console.log("added")
  }
  else{
    console.log("user dosent exist")
  }
  }
  else{
 return;
  }
} catch (error) {
  console.log(error)
}
}





export const fetchUserFromFirestore = async (uid,setUser) => {
  try {
    const userDocRef = doc(db, "users", uid);
    const userDocSnapshot = await getDoc(userDocRef);
    
    if(userDocSnapshot.exists){
      setUser(userDocSnapshot.data())
    }
    const unsubscribe =  onSnapshot(userDocRef,(snapshot)=> setUser(snapshot.data())
    )
    return () => unsubscribe()
  } catch (error) {
    console.log("User document does not exist.");
  }
};
