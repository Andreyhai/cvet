import React from "react";
import { useState, useEffect } from 'react';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  img: {
    // width: 200, // Фиксированная ширина изображения
    // height: 200, // Фиксированная высота изображения
    objectFit: 'cover', // Масштабирование изображения для занятия всего пространства
  },
}));

const MyComponent = (props) => {
  const [imgURL, setImgURL] = useState();


  const classes = useStyles();


  useEffect(() => {
    const storage = getStorage();
    const imageRef = ref(storage, props.url); // Укажите путь к вашей фотографии в хранилище Firebase

    getDownloadURL(imageRef)
      .then((url) => {
        setImgURL(url); // Устанавливаем URL в состояние компонента
      })
      .catch((error) => {
        // Обрабатываем ошибку получения URL для загрузки фотографии
        console.error('Error getting download URL: ', error);
      });
  }, []);

console.log(imgURL)
  
  return (
    // <div>
    <img
        src={imgURL}
        alt="Description"
        className={classes.img}
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "16px"
        }}
    />
    
  );
}

export default MyComponent;