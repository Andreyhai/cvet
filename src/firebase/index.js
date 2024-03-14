// import firebase from "firebase/app"
import { initializeApp } from 'firebase/app'; 
// import firebase from 'firebase/app';
import "firebase/storage";
import { useState } from 'react';

// v9 compat packages are API compatible with v8 code
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import "firebase/compat/database";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCD-6pOKnZNUl_2l60pnVlMPemO0voMLXQ",
  authDomain: "cvetochnaya-lavka-aaf29.firebaseapp.com",
  projectId: "cvetochnaya-lavka-aaf29",
  storageBucket: "cvetochnaya-lavka-aaf29.appspot.com",
  messagingSenderId: "505535316506",
  appId: "1:505535316506:web:581f0b4db6ea7e726ec7a3",
  measurementId: "G-WVTPB4VD6W"
};

firebase.initializeApp(firebaseConfig)

const storage = firebase.storage()


const Index = () => {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    const storageRef = storage.ref();
    const imageRef = storageRef.child(`images/${image.name}`);
    imageRef.put(image).then((snapshot) => {
      console.log('Uploaded a file!', snapshot);
      // Здесь вы можете добавить код для сохранения ссылки на изображение в базе данных, если это необходимо
    });
  };

  return (
    <div>
      <input type="file" onChange={handleImageChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default Index;