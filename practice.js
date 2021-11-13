
var firebaseConfig = {
    apiKey: "AIzaSyBCZHlkbLejFdY24ZUoIrC8m9rjAmjOVEo",
    authDomain: "kwitter-8c5aa.firebaseapp.com",
    databaseURL: "https://kwitter-8c5aa-default-rtdb.firebaseio.com",
    projectId: "kwitter-8c5aa",
    storageBucket: "kwitter-8c5aa.appspot.com",
    messagingSenderId: "1008015102564",
    appId: "1:1008015102564:web:9ec4b516a4821af723c571",
    measurementId: "G-DEQNPNV4GH"
  };
  firebase.initializeApp(firebaseConfig);
  // Initialize Firebase
function addUser()
{
user_name= document.getElementById("user_name").value;
firebase.database().ref("/").child(user_name).update({
    purpose : "adding user"

});
}