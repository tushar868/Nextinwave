'use strict';

/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}


document.getElementById('load-more-btn').addEventListener('click', function() {
  // Get all hidden service cards
  const hiddenCards = document.querySelectorAll('.service-card.hidden');
  
  // Show all the hidden service cards
  hiddenCards.forEach(card => {
    card.classList.remove('hidden');
  });
  
  // Hide the "Load More" button after cards are displayed
  this.style.display = 'none';
});



/**
 * toggle navbar
 */

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navToggler = document.querySelector("[data-nav-toggler]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  navToggler.classList.toggle("active");
}

addEventOnElem(navToggler, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  navToggler.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNavbar);



/**
 * header active
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});



function openDaySchedule(url) {
  
  daySchedule.initPopupWidget({
    url: url,
    type: "popup",
    color: {
      primary: '#000',
      secondary: '#fff',
    },
  });
}


function handleRazorpayPayment(e) {
  e.preventDefault(); 

  
  var options = {
    "key": "rzp_live_sqHlEOuFYQAYAY", 
    "amount": "9999", 
    "currency": "INR",
    "name": "Next In Wave",
    "description": "Partnership Collaboration Fee",
    
    "handler": function (response) {
      
      alert("Payment successful! Payment ID: " + response.razorpay_payment_id);

      
      var paymentInput = document.createElement("input");
      paymentInput.type = "hidden";
      paymentInput.name = "razorpay_payment_id";
      paymentInput.value = response.razorpay_payment_id;
      document.querySelector('.contact-form').appendChild(paymentInput);

      
      document.querySelector('.contact-form').submit();
    },
    "prefill": {
      "name": document.querySelector('input[name="full_name"]').value,
      "email": document.querySelector('input[name="email_address"]').value,
      "contact": document.querySelector('input[name="phone"]').value
    },
    "theme": {
      "color": "#3399cc"
    }
  };

  var rzp1 = new Razorpay(options);
  rzp1.open();
}

document.querySelector('.contact-form').addEventListener('submit', handleRazorpayPayment);