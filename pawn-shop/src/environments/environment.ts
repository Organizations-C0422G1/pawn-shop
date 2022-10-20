// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import firebase from 'firebase';

export const environment = {
  production: false,
   firebaseConfig : {
     apiKey: 'AIzaSyCzeHgia5re8yTgC7O8OH6cgc5_EZ3ykw4',
     authDomain: 'contract-uyennt.firebaseapp.com',
     databaseURL: 'https://contract-uyennt-default-rtdb.asia-southeast1.firebasedatabase.app/',
     projectId: 'contract-uyennt',
     storageBucket: 'contract-uyennt.appspot.com',
     messagingSenderId: '163445808235',
     appId: '1:163445808235:web:2e2ce5510ff8d1a71f252e',
     measurementId: 'G-PZ8KTQ2CEZ'
   }
};



/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
