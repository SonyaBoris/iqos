let button = document.getElementById("button")
let wrapper = document.getElementById("wrapper")
let modal =  document.getElementById("modal")
let time =  document.getElementById("time")
let calendar = document.getElementById("calendar")
let times = document.getElementById("calendar__content")
let closeBtn = document.getElementById("close")
let closeBtn2 = document.getElementById("close2")
let formBtn = document.getElementById("formBtn")
let thunks = document.getElementById("thunks")
let ok = document.getElementById("ok")


button.onclick = function () { 
  wrapper.classList.add("active")
  modal.classList.add("active")
};
closeBtn.onclick = function () { 
  wrapper.classList.remove("active")
  modal.classList.remove("active")
};
closeBtn2.onclick = function () { 
  wrapper.classList.remove("active")
  modal.classList.remove("active")
  thunks.classList.remove("active")
};

time.onclick = function(){
  calendar.classList.toggle("active")
}

times.onclick = function(){
  calendar.classList.remove("active")
}
formBtn.onclick = function(){
  modal.classList.remove("active")
  thunks.classList.add("active")
}
ok.onclick = function(){
  wrapper.classList.remove("active")
  thunks.classList.remove("active")
}




