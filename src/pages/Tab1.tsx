import {
  IonContent, IonHeader, IonImg, IonPage, IonTitle, IonToolbar, IonCol, IonGrid, IonRow, IonIcon, IonText,
  IonCard, IonCardContent, IonCardHeader, IonButton, IonCardTitle, IonList, IonItem, IonLabel
} from '@ionic/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import { sparklesOutline } from 'ionicons/icons';
import 'swiper/css';
import 'swiper/css/effect-fade';
import './Tab1.css';
import { useState, useEffect } from 'react';
import { fetchRoomsData } from '../firebaseUtils/addFirestoreData';
import { useHistory } from 'react-router';

const Tab1: React.FC = () => {
  const history = useHistory();
  const [collections, setCollections] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedCollections = await fetchRoomsData();
      setCollections(fetchedCollections);
    };

    fetchData();
  }, []);

  const handleNavigate = (room: any) => {
      history.push('/room/'+ room.RoomNo, {room}); // Navigate to the next page with selected room details
  };

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
              autoplay={true}
              effect='fade'
            >
              <SwiperSlide>
                <div className='slider'>
                  <IonImg src="https://luxuryescapes.com/inspiration/wp-content/uploads/2023/02/Mystical-Jungle-Pool.jpg" alt="The Wisconsin State Capitol building in Madison, WI at night" />
                  <h1 className='caption'>Welcome to Horse Valley</h1>
                  <p>Resort</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='slider'>
                  <IonImg src="https://deerhurstresort.com/uploads/2021/08/Fall-Aerial-banner.jpg" alt="The Wisconsin State Capitol building in Madison, WI at night" />
                  <h1 className='caption'>Welcome to Horse Valley</h1>
                  <p>Join Us</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='slider'>
                  <IonImg src="https://gokarna.com/templates/yootheme/cache/home-banner2-815115ab.jpeg" alt="The Wisconsin State Capitol building in Madison, WI at night" />
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
            {collections.map(collection => {
              return (
                <div key={collection.id}>
                  {collection.data.map((item: any) => (
                  <IonCol size="12" key={item.RoomNo}>
                  <IonCard>
                    <img alt={item.RoomType} src={item.RoomImage} />
                    <IonCardHeader>
                      <IonCardTitle><span className='ion-float-left'>{item.RoomType}</span> <span className='ion-float-right'>€{item.RoomPrice}</span></IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>
                      <p className='ion-text-left'>{item.RoomTitle}</p>
                      <IonButton onClick={()=>handleNavigate(item)} className='viewButton ion-margin-bottom' size='small' color='success' fill="outline">View Details</IonButton>
                    </IonCardContent>
                  </IonCard>
                </IonCol>
                ))}
                </div>
              )
            })}
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
