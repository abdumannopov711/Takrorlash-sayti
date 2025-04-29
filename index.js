// Menu ochish uchun
let elMenuOpen = document.getElementById('menu-toggle').addEventListener('click', function() {
let menu = document.getElementById('menu-mobile');
    menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
  });
  
  // Menu yopish uchun
  document.getElementById('close-btn').addEventListener('click', function() {
    const menu = document.getElementById('menu-mobile');
    menu.style.display = 'none';
  });

  // modal oyna_________________________________________________________________________________

let elOpenBtn1 = document.getElementById("openBtn1");
let elModal1 = document.getElementById("modal1");
let elCloseBtn1 = document.getElementById("closeBtn1");

elOpenBtn1.addEventListener("click", function () {
  elModal1.style.display = "flex"; // birinchi ko‘rsatamiz
  setTimeout(() => {
    elModal1.classList.add("show"); // keyin opacity o‘zgaradi
  }, 10); // biroz kechikish beramiz
});

elCloseBtn1.addEventListener("click", function () {
  elModal1.classList.remove("show"); // opacity 0 bo‘ladi
  setTimeout(() => {
    elModal1.style.display = "none"; // keyin yo‘q qilamiz
  }, 400); // animatsiya tugashi bilan (CSS dagi 0.4s)
});


let elOpenBtn2 = document.getElementById("openBtn2");
let elModal2 = document.getElementById("modal2");
let elCloseBtn2 = document.getElementById("closeBtn2");

elOpenBtn2.addEventListener("click", function () {
  elModal2.style.display = "flex"; // birinchi ko‘rsatamiz
  setTimeout(() => {
    elModal2.classList.add("show"); // keyin opacity o‘zgaradi
  }, 10); // biroz kechikish beramiz
});

elCloseBtn2.addEventListener("click", function () {
  elModal2.classList.remove("show"); // opacity 0 bo‘ladi
  setTimeout(() => {
    elModal2.style.display = "none"; // keyin yo‘q qilamiz
  }, 400); // animatsiya tugashi bilan (CSS dagi 0.4s)
});

  // slide_______________________________________________________________________________________________

let prevBtn = document.querySelector(".prev");
let nextBtn = document.querySelector(".next");
let slides = document.querySelectorAll(".slide");

let currenSlide = 0;

function showSlide(index) {
  if (index < 0) {
    currenSlide = slides.length - 1;
  }
  else if (index >= slides.length) {
    currenSlide = 0;
  }
  else {
    currenSlide = index;
  }

  slides.forEach(slide => slide.classList.remove("active"));
  slides[currenSlide].classList.add("active");
} 


prevBtn.addEventListener("click", function() {
  showSlide(currenSlide - 1);
});

nextBtn.addEventListener("click", function() {
  showSlide(currenSlide + 1);
});

showSlide(currenSlide);