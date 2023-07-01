let sugge = document.querySelector(".sugge");
let card1 = document.querySelector(".card");
let btn1 = document.querySelector(".btn1");
let menu = document.querySelector(".menu");
let menuCard = document.querySelector(".menu-card");
let mess = document.querySelector(".mess");
let messBtn = document.querySelector(".mess-btn");
let noti = document.querySelector(".noti-card");
let notiBtn = document.querySelector(".noti-btn");
let proBtn = document.querySelector(".probtn");
let pro = document.querySelector(".profile");
let zIn = document.querySelector(".z-in");
let Cardforphone = document.querySelector(".cardforphone");
let btnPhone = document.querySelector(".srcbtnforphone");
let btnPhone2 = document.querySelector(".srcbtnforphone2");
let Menuphone = document.querySelector(".menuphone");
let Menuphonebtn = document.querySelector(".menuphonebtn");
let phoneMess = document.querySelector(".phonemess");
let Messenger = document.querySelector(".messephone");
let notiPhone = document.querySelector(".notiphone");
let Noticard = document.querySelector(".noticard");
let Profile = document.querySelector(".profilephone");
let Profilecard = document.querySelector(".profilecard");
let SecondNav = document.querySelector(".secondnev")

sugge.addEventListener("click", () => {
  card1.classList.remove("hidden");
});

btn1.addEventListener("click", () => {
  card1.classList.add("hidden");
});

menu.addEventListener("click", () => {
  menuCard.classList.toggle("hidden");
  zIn.classList.toggle("index");
});

messBtn.addEventListener("click", () => {
  mess.classList.toggle("hidden");
  zIn.classList.toggle("index");
});

notiBtn.addEventListener("click", () => {
  noti.classList.toggle("hidden");
  zIn.classList.toggle("index");
});

proBtn.addEventListener("click", () => {
  pro.classList.toggle("hidden");
  zIn.classList.toggle("index");
});

btnPhone.addEventListener("click", () => {
  Cardforphone.classList.remove("hidden");
});

btnPhone2.addEventListener("click", () => {
  Cardforphone.classList.add("hidden");
});

Menuphonebtn.addEventListener("click", () => {
  Menuphone.classList.toggle("hidden");
});

Messenger.addEventListener("click", () => {
  phoneMess.classList.toggle("hidden");
});

notiPhone.addEventListener("click", () => {
  Noticard.classList.toggle("hidden");
});

Profile.addEventListener("click", () => {
  Profilecard.classList.toggle("hidden");
});

$(".responsive").slick({
  dots: false,
  infinite: true,
  autoplay: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});


$(".hero").slick({
  dots: false,
  infinite: true,
  autoplay: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});
