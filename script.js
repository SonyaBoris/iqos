let baner = document.querySelector(".banner")
let modal = document.querySelector(".modal")
let open_banner = document.querySelector('.modal__content-btn');


open_banner.onclick = function () { 
  baner.classList.add('banner-open');
  modal.classList.add('modal-hidden')
};





