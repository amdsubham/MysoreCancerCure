  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyB9NQiyrM6A6GhSqzzR8uPeqD3xiGRBKhI",
    authDomain: "mysorecancercare-e2354.firebaseapp.com",
    databaseURL: "https://mysorecancercare-e2354.firebaseio.com",
    projectId: "mysorecancercare-e2354",
    storageBucket: "mysorecancercare-e2354.appspot.com",
    messagingSenderId: "700542492795",
    appId: "1:700542492795:web:df1f3b346786fd035d02de",
    measurementId: "G-NEWD6RCMWK"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

//Reference messages collection
let messagesRef = firebase.database().ref('contactform');

//listen to form
document.getElementById('contactForm').addEventListener('submit', submitForm);
function check(){
    //console.log("Hii ");

}

function submitForm(e) {
    e.preventDefault();
    console.log("Hii Into");

    // get Values
    //let nameone = getElementById('name').value;
    //console.log(nameone);
    let name = getInputVal('name');
    console.log(name);
    let email = getInputVal('email');
    let phone = getInputVal('phone');
    let description = getInputVal('description');
    //console.log("Hospital"+hospital);
    console.log(name+"  ::  "+email+"  ::  "+phone+"  ::   "+description);



    


    //save message

    saveMessage(name, email, phone, description);

    //show alert
    //document.querySelector('.alert').style.display = 'block';

    //Hide alert after 3 s
    // setTimeout(function () {
    //     document.querySelector('.alert').style.display = 'none';
    // }, 3000)
    //clear form
    document.getElementById('contactForm').reset();
}
//function to get form values

function getInputVal(id) {
    return document.getElementById(id).value;
}

//save message to firebase
function saveMessage(name, email, phone, description) {
    let newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        email: email,
        phone: phone,
        description:description,

    })
}
// function refresh_data() {
//     // - - - do some things here - - -
//     setTimeout (refresh_data(),refresh_rate); // mb not really correct
// }