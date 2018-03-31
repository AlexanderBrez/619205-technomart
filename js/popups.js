var buyaction = document.querySelectorAll(".buy");
var cartpopup = document.querySelector(".cart-popup");
if (buyaction) {
for (var i = 0; i < buyaction.length; i++) {
  buyaction[i].addEventListener("click", function(event) {
    event.preventDefault();
    cartpopup.classList.add("modal-show");
  });
}; };
var cartclose = document.querySelector(".cart-popup-close-link");
if (cartclose) {
cartclose.addEventListener("click", function(evt) {
  evt.preventDefault();
  cartpopup.classList.remove("modal-show");
});
window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (cartpopup.classList.contains("modal-show")) {
      cartpopup.classList.remove("modal-show");
    }
  }
});
};
var mapopen = document.querySelector(".map-open");
var map = document.querySelector(".map-popup");
if (mapopen) {
  mapopen.addEventListener("click", function(evt) {
    evt.preventDefault();
    map.classList.add("modal-show-map");
  });
};
var mapclose = document.querySelector(".map-close");
if (mapclose) {
  mapclose.addEventListener("click", function(evt) {
    evt.preventDefault();
    map.classList.remove("modal-show-map");
  });
};
var pm = document.querySelector(".pm");
var contactspopup = document.querySelector(".contacts-popup");
var form = contactspopup.querySelector("form");
var username = contactspopup.querySelector("[name=name]");
var useremail = contactspopup.querySelector("[name=email]");
if (pm) {
  pm.addEventListener("click", function(evt) {
    evt.preventDefault();
    contactspopup.classList.add("modal-show");
    username.focus();
  });
  window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (contactspopup.classList.contains("modal-show")) {
        contactspopup.classList.remove("modal-show");
        contactspopup.classList.remove("modal-error");
      }
    }
  });
  form.addEventListener("submit", function(evt) {
    if (!username.value || !useremail.value) {
      evt.preventDefault();
      contactspopup.classList.remove("modal-error");
      contactspopup.offsetWidth = contactspopup.offsetWidth;
      contactspopup.classList.add("modal-error");
    }
  });
};
var contactsclose = contactspopup.querySelector(".contacts-popup-close-link");
if (contactsclose) {
  contactsclose.addEventListener("click", function(evt) {
    evt.preventDefault();
    contactspopup.classList.remove("modal-show");
    contactspopup.classList.remove("modal-error");
  });
};
