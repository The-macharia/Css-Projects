// firebase configurations

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDaKGI195wFunIUUuFvrXBPFST5WtP9gsA",
  authDomain: "blackandwhite-fd081.firebaseapp.com",
  databaseURL: "https://blackandwhite-fd081.firebaseio.com",
  projectId: "blackandwhite-fd081",
  storageBucket: "blackandwhite-fd081.appspot.com",
  messagingSenderId: "736970153355",
  appId: "1:736970153355:web:dfc44bb417be2b0f28238e",
  measurementId: "G-QVCL10239S"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();


let now = new Date()
const year = now.getFullYear()
const month = now.getMonth()
const day = now.getDate()
const messageDate = `${day}-${month}-${year}`;

const db = firebase.firestore();
const messages = db.collection(messageDate)

const form = document.querySelector('form')
const submit = document.querySelector('#submit');

const formInvalid = document.querySelector('.form__message');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const textMessageInput = document.querySelector('#textarea');


submit.addEventListener('click', (e) => {
  e.preventDefault();
  const name = nameInput.value;
  const email = emailInput.value;
  const textMessage = textMessageInput.value;

  const person = {
    name: name,
    email: email,
    message: textMessage
  };
  // console.log(person)

  if(person.name !== '' && person.email !== '' && person.message !== ''){
    formInvalid.style.opacity= '0';
    addPerson(person.name, person.email, person.message);
  }

  else{
    formInvalid.style.opacity = '1';
    formInvalid.style.padding = '1rem';
  }

  const service_id = "default_service";
  const template_id = "blackandwhite";
  emailjs.send(service_id, template_id, person);
  form.reset()
})

const addPerson = (name, email, mes) => {
  db.collection(messageDate).doc('messages').collection('test').doc().set({
    name: name,
    email: email,
    message: mes
  })
}


function openCity (evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

// enable the navigation functionality
(function closeNavigation () {
  var nodeList, i;
  nodeList = document.querySelectorAll('.navigation__link');

  for (i = 0; i < nodeList.length; i++) {
    nodeList[i].addEventListener('click', () => {
      document.querySelector('.navigation__checkbox').checked = false
    });
  }

})();

document.getElementById('donate-btn').addEventListener('click', () =>{
  document.getElementById('donate').scrollIntoView();
})

if(nameInput !== ' ' && emailInput !== '' && textMessageInput !== ''){
  formInvalid.style.opacity= '0';
}