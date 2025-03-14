const firebaseConfig = {
    apiKey: "AIzaSyBcSi7UUU_eIxltYEn34aT-gbcal3HZfAc",
    authDomain: "coffeelist-2cc55.firebaseapp.com",
    projectId: "coffeelist-2cc55",
    storageBucket: "coffeelist-2cc55.appspot.com",
    messagingSenderId: "748039146216",
    appId: "1:748039146216:web:da1b6c753ddc50b788575d",
    measurementId: "G-QCPFYGZWDD"
  };
  
  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const storage = firebase.storage();
  const auth = firebase.auth();