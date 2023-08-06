// Import the functions you need from the SDKs you need

const firebaseConfig = {
  apiKey: "AIzaSyANFbnrgcnKkBnTJJ8rbUzE5RGSTTDzSic",
  authDomain: "chat1app-6a1bf.firebaseapp.com",
  projectId: "chat1app-6a1bf",
  storageBucket: "chat1app-6a1bf.appspot.com",
  messagingSenderId: "651175019654",
  appId: "1:651175019654:web:d12d9b23fbb13847fffd07"
};
import { initializeApp } from "firebase/app";

import {getAuth,GoogleAuthProvider} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
import {getStorage,ref,getDownloadURL,uploadBytes} from "firebase/storage"




const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const provider = new GoogleAuthProvider()
provider.setCustomParameters({
    prompt:"select_account"
})

export const db = getFirestore(app)

export const storage = new getStorage(app)


 export const uploadImageToFirebaseStorage = async (imageFile) => {
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