import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
  IonBackButton,
} from '@ionic/react';
import { SplashScreen } from '@capacitor/splash-screen';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, homeOutline, square, triangle } from 'ionicons/icons';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';
import NotFoundPage from './pages/404';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import AddRoomPage from './components/AddDataToFirestore';

setupIonicReact();

const App: React.FC = () => {
  return(
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet animated={false}>
          <Route exact path="/">
            <Tab1 />
          </Route>
          <Route path="/tab3">
            <Tab3 prevUrl={`/room/:id`}/>
          </Route>
          <Route path={`/room/:id`} component={Tab2} />
          <Route path='/addRoom' component={AddRoomPage} />
          <Route component={NotFoundPage} />
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="tab1" href="/">
            <IonIcon aria-hidden="true" icon={homeOutline} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
)};

// Inside your component or wherever appropriate in your app initialization
SplashScreen.hide();

export default App;
