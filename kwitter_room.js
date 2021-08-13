
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyCLnu22vepxeXYp53o8nLbdKpuUfHio1ug",
    authDomain: "lets-kwitter-chat.firebaseapp.com",
    databaseURL: "https://lets-kwitter-chat-default-rtdb.firebaseio.com",
    projectId: "lets-kwitter-chat",
    storageBucket: "lets-kwitter-chat.appspot.com",
    messagingSenderId: "730229071616",
    appId: "1:730229071616:web:cb23d7c4f071f9eccf5de5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name=localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML="Welcome "+user_name+" !";
  function addRoom(){
        room_name=document.getElementById("room_name").value;
        firebase.database().ref("/").child(room_name).update({
              purpose:"Adding room name."
        });
        localStorage.setItem("room_name",room_name);
        window.location="kwitter_page.html";
  }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";
snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
   console.log("room_name - "+Room_names);
   row="<div class='room_name' id="+ Room_names +" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div> <hr>";
   document.getElementById("output").innerHTML+=row;
    //End code 
    });});}
getData();
function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("room_name",name);
    window.location="kwitter_page.html";
}
function logOut(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";
}