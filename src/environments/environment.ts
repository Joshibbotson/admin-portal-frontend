import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyAcxEPzCVynn_Xr7MGtiHEqk1hLmarLtWw',
    authDomain: 'jap-autos-accrington.firebaseapp.com',
    projectId: 'jap-autos-accrington',
    storageBucket: 'jap-autos-accrington.appspot.com',
    messagingSenderId: '395983695903',
    appId: '1:395983695903:web:0d32e2a7120a0aa94b252a',
    measurementId: 'G-ZWVQ8JVSTY',
  },
};

// Initialize Firebase
const app = initializeApp(environment.firebase);
const analytics = getAnalytics(app);
