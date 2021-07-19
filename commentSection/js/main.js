// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAtC4xSa11CmE392GFVH_CJsw0MPE8My5M",
  authDomain: "comment-section-57498.firebaseapp.com",
  databaseURL: "https://comment-section-57498.firebaseio.com",
  projectId: "comment-section-57498",
  storageBucket: "comment-section-57498.appspot.com",
  messagingSenderId: "111939885550",
  appId: "1:111939885550:web:c86d829ac859baacc956ff",
  measurementId: "G-VJ17RZY21L"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

(function(){
  emailjs.init("user_sbb883fso0Yy7M8Zd8Kz4");
})();

setTimeout(() => {
  $(".loader_bg").fadeToggle();
}, 1600);

$(".navbar-nav>a").on("click", function() {
  $(".navbar-collapse").collapse("hide");
});

document.getElementById('submit').addEventListener('click', (e) => {
  const form = document.getElementById('form');
  var name = $('.validate-input input[name="name"]');
  var email = $('.validate-input input[name="email"]');
  var subject = $('.validate-input input[name="subject"]');
  var message = $('.validate-input textarea[name="message"]');
  e.preventDefault();

  var template_params = {
    "name": name,
    "email": email,
    "subject": subject,
    "message": message,
 }

 emailjs.sendForm('default_service', 'template_CtTyY81Y', '#form')
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });

  form.reset()

});

function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

const instance = new Typewriter("#writer", {
  loop: true
});
instance
  .typeString("<strong>DRIVEN</strong>")
  .pauseFor(1500)
  .deleteAll(15)
  .typeString("<strong>DISRUPTIVE</strong>")
  .pauseFor(1500)
  .deleteAll(15)
  .typeString("<strong>DYNAMIC</strong>")
  .pauseFor(1500)
  .deleteAll(15)
  .start();

document.getElementById("bottom-nav").addEventListener("click", () => {
  document.getElementById("home").scrollIntoView();
});
window.onscroll = function() {
  scrollFxn();
};

function scrollFxn() {
  if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
    document.querySelector("body").style.transition = "all .2s";
    document.querySelector("nav").style.boxShadow =
      "0 0.1rem 0.3rem rgba(0,0,0, 0.35)";
  } else {
    document.querySelector("body").style.transition = "all .2s";
    document.querySelector("nav").style.boxShadow = "0 0 0 rgba(0,0,0, 0.35)";
  }
  if (
    document.body.scrollTop > 1000 ||
    document.documentElement.scrollTop > 1000
  ) {
    document.getElementById("bottom-nav").style.opacity = "1";
  } else {
    document.getElementById("bottom-nav").style.opacity = "0";
  }

  if (
    document.body.scrollTop > 2000 ||
    document.documentElement.scrollTop > 2000
  ) {
    document.querySelector("nav").style.backgroundColor = "#09093f";
  } else if (
    document.body.scrollTop > 2500 ||
    document.documentElement.scrollTop > 2500
  ) {
    document.querySelector("nav").style.backgroundColor = "#ffffff";
  } else {
    document.querySelector("nav").style.backgroundColor = "#09093f";
  }
}

(function($) {
  "use strict";

  /*==================================================================
  [ Validate ]*/
  var name = $('.validate-input input[name="name"]');
  var email = $('.validate-input input[name="email"]');
  var subject = $('.validate-input input[name="subject"]');
  var message = $('.validate-input textarea[name="message"]');

  $(".validate-form").on("submit", function(e) {
    // e.preventDefault();
    var check = true;

    if (
      $(name)
        .val()
        .trim() == ""
    ) {
      showValidate(name);
      check = false;
    }

    if (
      $(subject)
        .val()
        .trim() == ""
    ) {
      showValidate(subject);
      check = false;
    }

    if (
      $(email)
        .val()
        .trim()
        .match(
          /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/
        ) == null
    ) {
      showValidate(email);
      check = false;
    }

    if (
      $(message)
        .val()
        .trim() == ""
    ) {
      showValidate(message);
      check = false;
    }

    return check;
  });

  $(".validate-form .input1").each(function() {
    $(this).focus(function() {
      hideValidate(this);
    });
  });

  function showValidate(input) {
    var thisAlert = $(input).parent();

    $(thisAlert).addClass("alert-validate");
  }

  function hideValidate(input) {
    var thisAlert = $(input).parent();

    $(thisAlert).removeClass("alert-validate");
  }
})(jQuery);

(function scrollRev() {
  const sr = ScrollReveal();
  sr.reveal(".p1", {
    duration: 800,
    origin: "left",
    distance: "10rem",
    mobile: true,
    opacity: 0,
    viewFactor: 0.5,
    easing: "ease-in-out",
    reset: true
  });
  sr.reveal(".p2", {
    duration: 800,
    origin: "bottom",
    distance: "6rem",
    mobile: false,
    opacity: 0,
    viewFactor: 0.5,
    easing: "ease-in-out",
    reset: true
  });
  sr.reveal(".p3", {
    duration: 800,
    origin: "right",
    distance: "10rem",
    mobile: true,
    opacity: 0,
    viewFactor: 0.5,
    easing: "ease-in-out",
    reset: true
  });

  sr.reveal(".p4", {
    duration: 1000,
    origin: "top",
    distance: "10rem",
    mobile: true,
    viewFactor: 0.5,
    easing: "ease-in-out",
    reset: true
  });
  sr.reveal(".p5", {
    duration: 1000,
    mobile: true,
    opacity: 0,
    viewFactor: 0.5,
    easing: "ease-in-out",
    reset: true
  });
  sr.reveal(".service", {
    duration: 1500,
    mobile: true,
    viewFactor: 0.5,
    easing: "ease-in-out",
    reset: false
  });
  sr.reveal(".donate__col", {
    duration: 1000,
    origin: "right",
    distance: "10rem",
    mobile: true,
    viewFactor: 0.5,
    easing: "ease-in",
    reset: true
  });
})();
