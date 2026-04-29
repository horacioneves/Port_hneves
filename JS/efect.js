// Ano automático no rodapé
document.getElementById("year").textContent = new Date().getFullYear();

// Menu mobile (abrir/fechar)
const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("open");
});

// Fechar menu ao clicar num link (mobile)
menu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => menu.classList.remove("open"));
});

// Filtro simples de projetos (destaques)
const filterBtn = document.getElementById("filterBtn");
const projects = document.querySelectorAll(".project");
let showingFeaturedOnly = false;

filterBtn.addEventListener("click", () => {
  showingFeaturedOnly = !showingFeaturedOnly;

  projects.forEach((card) => {
    const featured = card.dataset.featured === "true";
    card.style.display = showingFeaturedOnly && !featured ? "none" : "block";
  });

  filterBtn.textContent = showingFeaturedOnly
    ? "Mostrar todos"
    : "Mostrar apenas destaques";
});