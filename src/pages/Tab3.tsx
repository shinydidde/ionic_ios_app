import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonBackButton, IonImg } from '@ionic/react';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { app } from '../firebaseUtils/firebaseConfig'; // Import your Firebase configuration
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import './Tab3.css';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';

const storage = getStorage(app);

interface LocationState {
  room?: any; // Define the room property with type 'any'
}

const Tab3: React.FC = () => {
  const location = useLocation<LocationState>(); // Specify the type of the location state
  const room = location.state?.room; // Access the room details passed as props
  const [image, setImage] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string>('');

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      setImage(files[0]);
    }
  };

  const handleUpload = async () => {
    if (!image) return;

    const storageRef = ref(storage, `${Date.now()}_${image.name}`);

    try {
      await uploadBytes(storageRef, image);
      const downloadURL = await getDownloadURL(storageRef);
      setImageUrl(downloadURL);
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  const [photoUrl, setPhotoUrl] = useState<string | null>(null);

  const takePicture = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Uri
    });

    const imageUrl = image.webPath;
    if (imageUrl) {
      setPhotoUrl(imageUrl);
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref={ '/room/'+room} />
          </IonButtons>
          <IonTitle>Add Review</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <div>
          <input type="file" onChange={handleImageChange} />
          <IonButton onClick={handleUpload}>Upload Image</IonButton>
          {imageUrl && <IonImg src={imageUrl} alt="Uploaded" />}
        </div>
        <IonButton expand="block" onClick={takePicture}>
          Add photo
        </IonButton>
        {photoUrl && <img src={photoUrl} alt="Captured Image" />}
      </IonContent>
    </IonPage>
  );
};

export default Tab3;

