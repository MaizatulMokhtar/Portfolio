const mobileMenuBtn = document.getElementById("mobileMenuBtn"), mobileMenu = document.getElementById("mobileMenu");
mobileMenuBtn.addEventListener("click", () => mobileMenu.classList.toggle("hidden"));

const scrollSpyLinks = document.querySelectorAll(".scroll-spy");
scrollSpyLinks.forEach(link => link.addEventListener("click", () => mobileMenu.classList.add("hidden")));

window.addEventListener("scroll", () => {
  let current = "";
  document.querySelectorAll("section[id]").forEach(section => {
    if (scrollY >= section.offsetTop - 200) current = section.getAttribute("id");
  });
  scrollSpyLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("data-section") === current) link.classList.add("active");
  });
});

const observerOptions = { threshold: 0.1, rootMargin: "0px 0px -100px 0px" };
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => { if (entry.isIntersecting) entry.target.style.opacity = "1"; });
}, observerOptions);

document.querySelectorAll(".stagger-item").forEach(el => observer.observe(el));

// Slideshow functionality
document.querySelectorAll(".slideshow").forEach(slideshow => {
  const images = slideshow.querySelectorAll(".slideshow-img");
  const prevBtn = slideshow.nextElementSibling;
  const nextBtn = prevBtn.nextElementSibling;
  let currentIndex = 0;

  function showImage(index) {
    images.forEach((img, i) => {
      img.classList.toggle("opacity-100", i === index);
      img.classList.toggle("opacity-0", i !== index);
    });
  }

  function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  }

  function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
  }

  nextBtn.addEventListener("click", nextImage);
  prevBtn.addEventListener("click", prevImage);

  // Auto-play every 4 seconds
  setInterval(nextImage, 4000);
});

// City Tour ERP Modal Logic
const citytourModal = document.getElementById("citytourModal");
const citytourViewBtn = document.getElementById("citytourViewBtn");
const citytourModalClose = document.getElementById("citytourModalClose");

citytourViewBtn.addEventListener("click", (e) => {
  e.preventDefault();
  citytourModal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
});

citytourModalClose.addEventListener("click", () => {
  citytourModal.classList.add("hidden");
  document.body.style.overflow = "";
});

citytourModal.addEventListener("click", (e) => {
  if (e.target === citytourModal) {
    citytourModal.classList.add("hidden");
    document.body.style.overflow = "";
  }
});

// Modal Slideshow Logic
const modalSlideshow = document.querySelector(".modal-slideshow");
if (modalSlideshow) {
  const modalImages = modalSlideshow.querySelectorAll(".modal-slideshow-img");
  const modalPrevBtn = document.querySelector(".modal-slideshow-prev");
  const modalNextBtn = document.querySelector(".modal-slideshow-next");
  let modalCurrentIndex = 0;

  function showModalImage(index) {
    modalImages.forEach((img, i) => {
      img.classList.toggle("opacity-100", i === index);
      img.classList.toggle("opacity-0", i !== index);
    });
  }

  function nextModalImage() {
    modalCurrentIndex = (modalCurrentIndex + 1) % modalImages.length;
    showModalImage(modalCurrentIndex);
  }

  function prevModalImage() {
    modalCurrentIndex = (modalCurrentIndex - 1 + modalImages.length) % modalImages.length;
    showModalImage(modalCurrentIndex);
  }

  modalNextBtn.addEventListener("click", nextModalImage);
  modalPrevBtn.addEventListener("click", prevModalImage);

  // Auto-play every 4 seconds
  setInterval(nextModalImage, 4000);
}

// ============================================
// Modal Functions for MM SPORT POINT
// ============================================
const mmsportModal = document.getElementById("mmsportModal");
const mmsportViewBtn = document.getElementById("mmsportViewBtn");
const mmsportModalClose = document.getElementById("mmsportModalClose");

mmsportViewBtn.addEventListener("click", (e) => {
  e.preventDefault();
  mmsportModal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
});

mmsportModalClose.addEventListener("click", () => {
  mmsportModal.classList.add("hidden");
  document.body.style.overflow = "";
});

mmsportModal.addEventListener("click", (e) => {
  if (e.target === mmsportModal) {
    mmsportModal.classList.add("hidden");
    document.body.style.overflow = "";
  }
});

// MM Sport Slideshow
const modalSlideshowMmsport = document.querySelector(".modal-slideshow-mmsport");
if (modalSlideshowMmsport) {
  const modalImagesMmsport = modalSlideshowMmsport.querySelectorAll(".modal-slideshow-img-mmsport");
  const modalPrevBtnMmsport = document.querySelector(".modal-slideshow-prev-mmsport");
  const modalNextBtnMmsport = document.querySelector(".modal-slideshow-next-mmsport");
  let modalCurrentIndexMmsport = 0;

  function showModalImageMmsport(index) {
    modalImagesMmsport.forEach((img, i) => {
      img.classList.toggle("opacity-100", i === index);
      img.classList.toggle("opacity-0", i !== index);
    });
  }

  function nextModalImageMmsport() {
    modalCurrentIndexMmsport = (modalCurrentIndexMmsport + 1) % modalImagesMmsport.length;
    showModalImageMmsport(modalCurrentIndexMmsport);
  }

  function prevModalImageMmsport() {
    modalCurrentIndexMmsport = (modalCurrentIndexMmsport - 1 + modalImagesMmsport.length) % modalImagesMmsport.length;
    showModalImageMmsport(modalCurrentIndexMmsport);
  }

  modalNextBtnMmsport.addEventListener("click", nextModalImageMmsport);
  modalPrevBtnMmsport.addEventListener("click", prevModalImageMmsport);
  setInterval(nextModalImageMmsport, 4000);
}

// ============================================
// Modal Functions for SRDA
// ============================================
const srdaModal = document.getElementById("srdaModal");
const srdaViewBtn = document.getElementById("srdaViewBtn");
const srdaModalClose = document.getElementById("srdaModalClose");

srdaViewBtn.addEventListener("click", (e) => {
  e.preventDefault();
  srdaModal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
});

srdaModalClose.addEventListener("click", () => {
  srdaModal.classList.add("hidden");
  document.body.style.overflow = "";
});

srdaModal.addEventListener("click", (e) => {
  if (e.target === srdaModal) {
    srdaModal.classList.add("hidden");
    document.body.style.overflow = "";
  }
});

// SRDA Slideshow
const modalSlideshowSrda = document.querySelector(".modal-slideshow-srda");
if (modalSlideshowSrda) {
  const modalImagesSrda = modalSlideshowSrda.querySelectorAll(".modal-slideshow-img-srda");
  const modalPrevBtnSrda = document.querySelector(".modal-slideshow-prev-srda");
  const modalNextBtnSrda = document.querySelector(".modal-slideshow-next-srda");
  let modalCurrentIndexSrda = 0;

  function showModalImageSrda(index) {
    modalImagesSrda.forEach((img, i) => {
      img.classList.toggle("opacity-100", i === index);
      img.classList.toggle("opacity-0", i !== index);
    });
  }

  function nextModalImageSrda() {
    modalCurrentIndexSrda = (modalCurrentIndexSrda + 1) % modalImagesSrda.length;
    showModalImageSrda(modalCurrentIndexSrda);
  }

  function prevModalImageSrda() {
    modalCurrentIndexSrda = (modalCurrentIndexSrda - 1 + modalImagesSrda.length) % modalImagesSrda.length;
    showModalImageSrda(modalCurrentIndexSrda);
  }

  modalNextBtnSrda.addEventListener("click", nextModalImageSrda);
  modalPrevBtnSrda.addEventListener("click", prevModalImageSrda);
  setInterval(nextModalImageSrda, 4000);
}

// ============================================
// Modal Functions for eSIM
// ============================================
const esimModal = document.getElementById("esimModal");
const esimViewBtn = document.getElementById("esimViewBtn");
const esimModalClose = document.getElementById("esimModalClose");

esimViewBtn.addEventListener("click", (e) => {
  e.preventDefault();
  esimModal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
});

esimModalClose.addEventListener("click", () => {
  esimModal.classList.add("hidden");
  document.body.style.overflow = "";
});

esimModal.addEventListener("click", (e) => {
  if (e.target === esimModal) {
    esimModal.classList.add("hidden");
    document.body.style.overflow = "";
  }
});

// eSIM Slideshow
const modalSlideshowEsim = document.querySelector(".modal-slideshow-esim");
if (modalSlideshowEsim) {
  const modalImagesEsim = modalSlideshowEsim.querySelectorAll(".modal-slideshow-img-esim");
  const modalPrevBtnEsim = document.querySelector(".modal-slideshow-prev-esim");
  const modalNextBtnEsim = document.querySelector(".modal-slideshow-next-esim");
  let modalCurrentIndexEsim = 0;

  function showModalImageEsim(index) {
    modalImagesEsim.forEach((img, i) => {
      img.classList.toggle("opacity-100", i === index);
      img.classList.toggle("opacity-0", i !== index);
    });
  }

  function nextModalImageEsim() {
    modalCurrentIndexEsim = (modalCurrentIndexEsim + 1) % modalImagesEsim.length;
    showModalImageEsim(modalCurrentIndexEsim);
  }

  function prevModalImageEsim() {
    modalCurrentIndexEsim = (modalCurrentIndexEsim - 1 + modalImagesEsim.length) % modalImagesEsim.length;
    showModalImageEsim(modalCurrentIndexEsim);
  }

  modalNextBtnEsim.addEventListener("click", nextModalImageEsim);
  modalPrevBtnEsim.addEventListener("click", prevModalImageEsim);
  setInterval(nextModalImageEsim, 4000);
}