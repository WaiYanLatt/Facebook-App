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

function showMent() {
  let addMent = document.querySelector(".add-ment");
  let ShowComment = document.querySelector(".show-comment");
  let valueMent = addMent.value;
  let CreateElement = document.createElement("div");
  let CreateElement1 = document.createElement("div");
  let Createimg = document.createElement("img");
  let src = document.createAttribute("src");
  src.value = "/ass/img/waiyan.jpg";
  Createimg.setAttributeNode(src);
  Createimg.classList.add("w-10");
  Createimg.classList.add("h-10");
  Createimg.classList.add("rounded-full");
  CreateElement.textContent = valueMent;
  CreateElement1.classList.add("ml-5");
  CreateElement1.classList.add("flex");
  CreateElement1.classList.add("space-x-2");
  CreateElement.classList.add("bg-gray-100");
  CreateElement.classList.add("w-80");
  CreateElement.classList.add("p-2");
  CreateElement.classList.add("rounded-lg");
  CreateElement.classList.add("font-semibold");
  CreateElement.classList.add("my-2");
  ShowComment.appendChild(CreateElement1);
  CreateElement1.appendChild(Createimg);
  CreateElement1.appendChild(CreateElement);
  addMent.value = "";
}

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
