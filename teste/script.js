// document.addEventListener("DOMContentLoaded", () => {
//   const navLinks = document.querySelectorAll("nav a");

//   navLinks.forEach((link) => {
//     link.addEventListener("click", (e) => {
//       // Previne o comportamento padrão do link de âncora
//       e.preventDefault();

//       // Pega o ID da seção do atributo href
//       const targetId = e.currentTarget.getAttribute("href");
//       const targetSection = document.querySelector(targetId);

//       if (targetSection) {
//         // Rola para a seção com um comportamento suave
//         targetSection.scrollIntoView({
//           behavior: "smooth",
//         });
//       }
//     });
//   });
// });

// document.addEventListener("DOMContentLoaded", () => {
//   const nav = document.querySelector(".carousel-nav");
//   const activeLink = document.querySelector(".active-link");

//   if (activeLink && nav) {
//     // Rola a navegação para o link ativo
//     nav.scrollLeft =
//       activeLink.offsetLeft - nav.offsetWidth / 2 + activeLink.offsetWidth / 2;
//   }
// });
