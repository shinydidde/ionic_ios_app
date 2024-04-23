import {
  IonContent, IonHeader, IonImg, IonPage, IonTitle, IonToolbar, IonGrid, IonRow, IonText, IonIcon, IonChip, IonAvatar, IonLabel, IonButton, IonButtons, IonBackButton
} from '@ionic/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import './Tab2.css';
import { Camera, CameraResultType } from '@capacitor/camera';
import { fastFood, flame, paw, star, starHalfOutline, tv, wifi } from 'ionicons/icons';
import { useState } from 'react';
import { useLocation } from 'react-router';

interface LocationState {
  room?: any; // Define the room property with type 'any'
}

const Tab2: React.FC = () => {
  const location = useLocation<LocationState>(); // Specify the type of the location state
  const room = location.state?.room; // Access the room details passed as props

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" />
          </IonButtons>
          <IonTitle>Room Details</IonTitle>
        </IonToolbar>
      </IonHeader>
      {room && (
        <IonContent fullscreen>
          <IonGrid>
            <IonRow>
              <Swiper modules={[Autoplay]}
                autoplay={true}
                effect='fade'
              >
                <SwiperSlide>
                  <div className='slider'>
                    <IonImg src="https://content.api.news/v3/images/bin/c941e50b5ff779bef03467602b3a9eeb" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='slider'>
                    <IonImg src="https://content.api.news/v3/images/bin/2b151ca576b2b106ab2864e5777304f4" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='slider'>
                    <IonImg src="https://content.api.news/v3/images/bin/862ec137f23ef018639dbd9d3d57e767" />
                  </div>
                </SwiperSlide>
              </Swiper>
            </IonRow>
            <IonText color="white">
              <h1>{room.RoomType} - €{room.RoomPrice} <span className='ion-float-right'>
                <IonIcon icon={star} size='small'></IonIcon>
                <IonIcon icon={star} size='small'></IonIcon>
                <IonIcon icon={star} size='small'></IonIcon>
                <IonIcon icon={star} size='small'></IonIcon>
                <IonIcon icon={starHalfOutline} size='small'></IonIcon>
              </span></h1>
            </IonText>
            <IonRow>
              <IonChip>
                <IonIcon icon={wifi} size='small'></IonIcon>
                <IonLabel>Wifi</IonLabel>
              </IonChip>
              <IonChip>
                <IonIcon icon={paw} size='small'></IonIcon>
                <IonLabel>Pet Friendly</IonLabel>
              </IonChip>
              <IonChip>
                <IonIcon icon={fastFood} size='small'></IonIcon>
                <IonLabel>Breakfast</IonLabel>
              </IonChip>
              <IonChip>
                <IonIcon icon={flame} size='small'></IonIcon>
                <IonLabel>Heater</IonLabel>
              </IonChip>
              <IonChip>
                <IonIcon icon={tv} size='small'></IonIcon>
                <IonLabel>Tv</IonLabel>
              </IonChip>
            </IonRow>
            <IonRow>
              <p>{room.RoomDesc}</p>
            </IonRow>
            <IonRow>
              <IonButton href='/tab3'>Add Review</IonButton>
            </IonRow>
          </IonGrid>
        </IonContent>
      )}
    </IonPage>
  );
};

export default Tab2;
