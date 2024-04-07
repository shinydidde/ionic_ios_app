import { IonContent, IonHeader, IonImg, IonPage, IonTitle, IonToolbar, IonCol, IonGrid, IonRow, IonIcon, IonText,
  IonCard, IonCardContent, IonCardHeader, IonButton, IonCardTitle
 } from '@ionic/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import { sparklesOutline } from 'ionicons/icons';
import 'swiper/css';
import 'swiper/css/effect-fade';
import './Tab1.css';
import { useState } from 'react';

const Tab1: React.FC = () => {
  const [items, setItems] = useState([
    {
      "RoomNo": 1,
      "RoomType": "Suite",
      "Occupancy": 2,
      "RoomPrice": 50,
      "Available": true,
      "RoomImage": "https://horsevalleyresort.francecentral.cloudapp.azure.com:8080/static/images/room-1.jpg",
      "RoomDesc": "Spacious suite with luxurious amenities and stunning views."
    },
    {
      "RoomNo": 2,
      "RoomType": "Family",
      "Occupancy": 4,
      "RoomPrice": 35,
      "Available": true,
      "RoomImage": "https://horsevalleyresort.francecentral.cloudapp.azure.com:8080/static/images/room-2.jpg",
      "RoomDesc": "Cozy family room with ample space and modern comforts for a relaxing stay."
    },
    {
      "RoomNo": 3,
      "RoomType": "Deluxe",
      "Occupancy": 2,
      "RoomPrice": 30,
      "Available": false,
      "RoomImage": "https://horsevalleyresort.francecentral.cloudapp.azure.com:8080/static/images/room-3.jpg",
      "RoomDesc": "Elegant deluxe room featuring upscale amenities and contemporary design."
    },
    {
      "RoomNo": 4,
      "RoomType": "Classic",
      "Occupancy": 2,
      "RoomPrice": 25,
      "Available": true,
      "RoomImage": "https://horsevalleyresort.francecentral.cloudapp.azure.com:8080/static/images/room-4.jpg",
      "RoomDesc": "Charming classic room with cozy furnishings and a serene ambiance."
    },
    {
      "RoomNo": 5,
      "RoomType": "Superior",
      "Occupancy": 2,
      "RoomPrice": 40,
      "Available": false,
      "RoomImage": "https://horsevalleyresort.francecentral.cloudapp.azure.com:8080/static/images/room-5.jpg",
      "RoomDesc": "Stylish superior room offering modern amenities and a sophisticated atmosphere."
    },
    {
      "RoomNo": 6,
      "RoomType": "Luxury",
      "Occupancy": 2,
      "RoomPrice": 60,
      "Available": true,
      "RoomImage": "https://horsevalleyresort.francecentral.cloudapp.azure.com:8080/static/images/room-6.jpg",
      "RoomDesc": "Sumptuous luxury room with opulent furnishings and breathtaking views."
    }
  ]
  );

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle><IonIcon icon={sparklesOutline} size="small" color="white"></IonIcon> Horse Valley Resort</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonGrid>
            <IonRow>
              <Swiper modules={[Autoplay, EffectFade]}
                autoplay = {true}
                effect='fade'
                >
                  <SwiperSlide>
                    <div className='slider'>
                      <IonImg src="https://luxuryescapes.com/inspiration/wp-content/uploads/2023/02/Mystical-Jungle-Pool.jpg" alt="The Wisconsin State Capitol building in Madison, WI at night"/>
                      <h1 className='caption'>Welcome to Horse Valley</h1>
                      <p>Resort</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className='slider'>
                      <IonImg src="https://deerhurstresort.com/uploads/2021/08/Fall-Aerial-banner.jpg" alt="The Wisconsin State Capitol building in Madison, WI at night"/>
                      <h1 className='caption'>Welcome to Horse Valley</h1>
                      <p>Join Us</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className='slider'>
                      <IonImg src="https://gokarna.com/templates/yootheme/cache/home-banner2-815115ab.jpeg" alt="The Wisconsin State Capitol building in Madison, WI at night"/>
                      <h1 className='caption'>Welcome to Horse Valley</h1>
                      <p>In Nature</p>
                    </div>
                  </SwiperSlide>
                </Swiper>
          </IonRow>
          </IonGrid>
          <IonText className='title'>
            <h1>Our Rooms</h1>
          </IonText>
          <IonGrid fixed={true}>
            <IonRow>
              {items.map(item => {
                return (
                  <IonCol size="12" key={item.RoomNo}>
                    <IonCard>
                      <img alt={item.RoomType} src={item.RoomImage} />
                      <IonCardHeader>
                        <IonCardTitle><span className='ion-float-left'>{item.RoomType}</span> <span className='ion-float-right'>€{item.RoomPrice}</span></IonCardTitle>
                      </IonCardHeader>
                      <IonCardContent>
                        <p className='ion-text-left'>{item.RoomDesc}</p>
                        <IonButton className='viewButton ion-margin-bottom' size='small' color='success' fill="outline">View Details</IonButton>
                      </IonCardContent>
                    </IonCard>
                  </IonCol>
                )
              })}
            </IonRow>
          </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
