var buyaction=document.querySelectorAll(".buy"),cartpopup=document.querySelector(".cart-popup");if(buyaction)for(var i=0;i<buyaction.length;i++)buyaction[i].addEventListener("click",function(e){e.preventDefault(),cartpopup.classList.add("modal-show")});var cartclose=document.querySelector(".cart-popup-close-link");cartclose&&(cartclose.addEventListener("click",function(e){e.preventDefault(),cartpopup.classList.remove("modal-show")}),window.addEventListener("keydown",function(e){27===e.keyCode&&(e.preventDefault(),cartpopup.classList.contains("modal-show")&&cartpopup.classList.remove("modal-show"))}));var mapopen=document.querySelector(".map-open"),map=document.querySelector(".map-popup");mapopen&&mapopen.addEventListener("click",function(e){e.preventDefault(),map.classList.add("modal-show-map")});var mapclose=document.querySelector(".map-close");mapclose&&mapclose.addEventListener("click",function(e){e.preventDefault(),map.classList.remove("modal-show-map")});var pm=document.querySelector(".pm"),contactspopup=document.querySelector(".contacts-popup"),form=contactspopup.querySelector("form"),username=contactspopup.querySelector("[name=name]"),useremail=contactspopup.querySelector("[name=email]");pm&&(pm.addEventListener("click",function(e){e.preventDefault(),contactspopup.classList.add("modal-show"),username.focus()}),window.addEventListener("keydown",function(e){27===e.keyCode&&(e.preventDefault(),contactspopup.classList.contains("modal-show")&&(contactspopup.classList.remove("modal-show"),contactspopup.classList.remove("modal-error")))}),form.addEventListener("submit",function(e){username.value&&useremail.value||(e.preventDefault(),contactspopup.classList.remove("modal-error"),contactspopup.offsetWidth=contactspopup.offsetWidth,contactspopup.classList.add("modal-error"))}));var contactsclose=contactspopup.querySelector(".contacts-popup-close-link");contactsclose&&contactsclose.addEventListener("click",function(e){e.preventDefault(),contactspopup.classList.remove("modal-show"),contactspopup.classList.remove("modal-error")});
