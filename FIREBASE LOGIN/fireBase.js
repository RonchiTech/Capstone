var app_fireBase = {};
(function(){
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBBfUML5q_-TEl3aOX-yzNhmbIHvQ6FHP8",
    authDomain: "capstone-abea9.firebaseapp.com",
    databaseURL: "https://capstone-abea9.firebaseio.com",
    projectId: "capstone-abea9",
    storageBucket: "capstone-abea9.appspot.com",
    messagingSenderId: "512230966749"
  };
    firebase.initializeApp(config);
    app_fireBase = firebase;
})()