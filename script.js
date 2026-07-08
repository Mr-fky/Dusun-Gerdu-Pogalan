document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector("nav");
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinksContainer = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links a");
  const sections = document.querySelectorAll("section, header");
  const navLogo = document.querySelector(".nav-logo");

  // 1. Efek Sticky Navbar saat di-scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      nav.classList.add("scrolled");
      // Jika menu mobile sedang tidak terbuka, ubah logo jadi hijau tua
      if (!navLinksContainer.classList.contains("active")) {
        navLogo.style.color = "var(--primary)";
      }
    } else {
      nav.classList.remove("scrolled");
      // Jika di paling atas, logo selalu putih
      navLogo.style.color = "var(--white)";
    }

    // 2. Deteksi otomatis posisi menu aktif (Scrollspy)
    let currentSectionId = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
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

  // 3. Tombol Buka/Tutup Menu Mobile (Aman & Lancar)
  menuToggle.addEventListener("click", (e) => {
    e.preventDefault();
    navLinksContainer.classList.toggle("active");
    menuToggle.classList.toggle("open"); // Menggunakan class CSS untuk animasi silang (X)

    // Sinkronisasi warna logo saat menu terbuka di layar mobile
    if (navLinksContainer.classList.contains("active")) {
      navLogo.style.color = "var(--white)";
    } else {
      if (window.scrollY > 40) {
        navLogo.style.color = "var(--primary)";
      } else {
        navLogo.style.color = "var(--white)";
      }
    }
  });

  // 4. Otomatis tutup menu mobile jika salah satu tautan diklik
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      navLinksContainer.classList.remove("active");
      menuToggle.classList.remove("open");
      if (window.scrollY > 40) {
        navLogo.style.color = "var(--primary)";
      }
    });
  });
});