import firebase from "firebase";

const config = {
	apiKey: "AIzaSyAESxBP6eMXqqjJdI1eMaUQIcQqHn-1mjw",
    authDomain: "expenses-93253.firebaseapp.com",
    projectId: "expenses-93253",
    storageBucket: "expenses-93253.appspot.com",
    messagingSenderId: "91606427345",
    appId: "1:91606427345:web:0805cbe6adda786d9ec7f0",
    measurementId: "G-D3CWZL2MB7"
}

const fire = firebase.initializeApp(config)
export default fire