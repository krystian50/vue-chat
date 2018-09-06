import firebase from 'firebase';

const config = {
  databaseURL: 'https://test2-206614.firebaseio.com',
};
const firebaseApp = firebase.initializeApp(config);
const db = firebaseApp.database();

export const messagesRef = db.ref('messages');

export default {
  messagesRef,
};
