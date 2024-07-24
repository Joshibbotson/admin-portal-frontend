import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideFirebaseApp(() => initializeApp({"projectId":"jap-autos-accrington","appId":"1:395983695903:web:0d32e2a7120a0aa94b252a","storageBucket":"jap-autos-accrington.appspot.com","apiKey":"AIzaSyAcxEPzCVynn_Xr7MGtiHEqk1hLmarLtWw","authDomain":"jap-autos-accrington.firebaseapp.com","messagingSenderId":"395983695903","measurementId":"G-ZWVQ8JVSTY"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore())]
};
