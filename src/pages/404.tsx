import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const NotFoundPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      <a href="/home">
        <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 mt-5 mb-5">
            <img src='https://media2.giphy.com/media/ymul7sYyJeC6ypAUQu/giphy.gif?cid=6c09b952hpjj0ur32yz6kb4ft7grfppuh2a1sxrzre58cdkx&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=s'/>
            <h1 className='ion-text-center'>404</h1>
          </div>
        </div>
      </div>
        </a>
      </IonContent>
    </IonPage>
  );
};

export default NotFoundPage;
