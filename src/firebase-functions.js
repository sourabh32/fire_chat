import { signInWithPopup, signOut } from "firebase/auth";
import { auth, db, provider, storage } from "./firebase-config";
import { addDoc, doc, getDoc, onSnapshot, serverTimestamp, setDoc, updateDoc } from "firebase/firestore";
import { useContext } from "react";
import { userContext } from "./contexts/UserContext";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

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
    
    if(userDocSnapshot.exists()){
      
    
    const unsubscribe =  onSnapshot(userDocRef,(snapshot)=> setUser(snapshot.data())
    )
    return () => unsubscribe()
  }
    
  } catch (error) {
    console.log("User document does not exist.");
  }
};


 const uploadImageToFirebaseStorage = async (imageFile) => {
  try {
    const storageRef = ref(storage, `images/${imageFile.name}`);
    await uploadBytes(storageRef, imageFile);

   
    const imageUrl = await getDownloadURL(storageRef);
     console.log("added")
    return imageUrl;
  } catch (error) {
    console.error('Error uploading image:', error);
    throw error; // Rethrow the error for handling in the calling code
  }

}

 export const uploadImage = async (selectedImage,user,message,messageRef) => {
  
  const imgUrl = await uploadImageToFirebaseStorage(selectedImage)
    
    
    await addDoc(messageRef,{
      text:message,
      createdAt:serverTimestamp(),
      user:user.displayName,
      
     type:"img",
     imgUrl
     })
     
};
