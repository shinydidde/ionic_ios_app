import React, { useState } from 'react';
import { IonButton, IonInput, IonImg } from '@ionic/react';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const firebaseConfig = {
  // Your Firebase config here
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const LoginComponent: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log('User logged in:', userCredential.user);
      // Redirect or navigate to the next screen upon successful login
    } catch (error: any) {
      console.error('Error logging in:', error.message);
      // Handle login error, e.g., display error message to the user
    }
  };

  return (
    <div>
      <IonInput
        type="email"
        placeholder="Email"
        value={email}
        onIonChange={(e) => setEmail(e.detail.value!)}
      />
      <IonInput
        type="password"
        placeholder="Password"
        value={password}
        onIonChange={(e) => setPassword(e.detail.value!)}
      />
      <IonButton onClick={handleLogin}>Login</IonButton>
    </div>
  );
};

export default LoginComponent;
