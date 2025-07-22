// ✅ Active bouton nan meni an selon paj la
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll("nav ul li a");
  const currentUrl = window.location.pathname;

  navLinks.forEach((link) => {
    if (currentUrl.includes(link.getAttribute("href"))) {
      link.classList.add("active-nav");
    }
  });
});

// ✅ Ouvri/ferme kesyon nan FAQ (si gen)
function toggleFaq(element) {
  element.classList.toggle("active");
  const answer = element.nextElementSibling;
  if (answer) {
    answer.style.display = answer.style.display === "block" ? "none" : "block";
  }
}

// ✅ Scroll dous si w gen lyen entèn ak id
const smoothLinks = document.querySelectorAll('a[href^="#"]');
smoothLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    const targetId = link.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      e.preventDefault();
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// ✅ Bouton "retounen anlè" (si ou vle mete l pita)
const backToTopBtn = document.getElementById("backToTop");
if (backToTopBtn) {
  window.addEventListener("scroll", () => {
    backToTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
  });

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
