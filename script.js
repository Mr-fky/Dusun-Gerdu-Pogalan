/* ==========================================================================
⚡ FILE LOGIKA UTAMA: script.js (Menu Hamburger & Slide Drag-to-Scroll)
========================================================================== */

const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

// 1. Logika Klik Menu Hamburger di HP
if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    navLinks.classList.toggle('active');
    
    const bars = menuToggle.querySelectorAll('.bar');
    if (navLinks.classList.contains('active')) {
      bars[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
      bars[1].style.transform = 'rotate(-45deg) translate(5px, -5px)';
    } else {
      bars[0].style.transform = 'none';
      bars[1].style.transform = 'none';
    }
  });

  // Otomatis Menutup Menu jika salah satu link navigasi diklik
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      const bars = menuToggle.querySelectorAll('.bar');
      bars[0].style.transform = 'none';
      bars[1].style.transform = 'none';
    });
  });
}

// 2. Sistem Drag-to-Scroll Menggunakan Mouse Klik-Tarik (Untuk Simulasi Laptop)
function gabungFiturGeser(selector) {
  const slider = document.querySelector(selector);
  if (!slider) return;

  let isDown = false;
  let startX;
  let scrollLeft;

  slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('grabbing');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });

  slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('grabbing');
  });

  slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('grabbing');
  });

  slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2; // Mengatur sensitivitas/kecepatan geseran
    slider.scrollLeft = scrollLeft - walk;
  });
}

// Mengaktifkan fitur drag-geser pada kontainer Galeri dan UMKM secara bersamaan
gabungFiturGeser('.gallery-slider');
gabungFiturGeser('.umkm-flex');