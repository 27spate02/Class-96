//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyAY_VlCD_HMjT4Iv0rht4Xdqstaa-Ugj7g",
      authDomain: "class-93-fa5c5.firebaseapp.com",
      databaseURL: "https://class-93-fa5c5-default-rtdb.firebaseio.com",
      projectId: "class-93-fa5c5",
      storageBucket: "class-93-fa5c5.appspot.com",
      messagingSenderId: "740152072735",
      appId: "1:740152072735:web:7f28967e7f954c269b132a"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function send()
{
      msg= document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value = "";
      
}
