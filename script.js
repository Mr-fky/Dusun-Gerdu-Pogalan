document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector("nav");
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinksContainer = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links a");
  const sections = document.querySelectorAll("section, header");

  // 1. Efek Berubah Warna Sticky Navbar Saat Digulir
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }

    // 2. Deteksi otomatis posisi menu aktif (Active State Indication)
    let currentSectionId = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= sectionTop - 140) {
        currentSectionId = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${currentSectionId}`) {
        link.classList.add("active");
      }
    });
  });

  // 3. Aktivasi Hamburger Menu untuk Mobile/HP
  menuToggle.addEventListener("click", () => {
    navLinksContainer.classList.toggle("active");
    
    // Animasi Simpel Transformasi Icon Hamburger
    const bars = menuToggle.querySelectorAll(".bar");
    if (navLinksContainer.classList.contains("active")) {
      bars[0].style.transform = "rotate(45deg) translate(5px, 5px)";
      bars[1].style.transform = "rotate(-45deg) translate(1px, -2px)";
    } else {
      bars[0].style.transform = "none";
      bars[1].style.transform = "none";
    }
  });

  // Otomatis menutup menu mobile jika tautan diklik
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      navLinksContainer.classList.remove("active");
      const bars = menuToggle.querySelectorAll(".bar");
      bars[0].style.transform = "none";
      bars[1].style.transform = "none";
    });
  });
});