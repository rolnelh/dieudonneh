gsap.registerPlugin(ScrollTrigger);

// Animation d'entrée du menu
gsap.from("#sidebar .sidebar-link", {
  opacity: 0,
  y: 20,
  stagger: 0.2, // Effet enchaîné pour chaque lien
  duration: 0.8,
  ease: "power2.out",
  scrollTrigger: {
    trigger: "#sidebar",
    start: "top 90%", // Déclenchement quand 90% du sidebar est visible
    toggleActions: "play none none reverse"
  }
});

// Animation du bouton
gsap.from("#sidebar button", {
  opacity: 0,
  scale: 0.8,
  duration: 1,
  delay: 0.5,
  ease: "elastic.out(1, 0.5)",
  scrollTrigger: {
    trigger: "#sidebar",
    start: "top 80%",
    toggleActions: "play none none reverse"
  }
});


gsap.utils.toArray("section").forEach((section, index) => {
  gsap.from(section, {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: section,
      start: "top 80%", // Déclenche quand 80% de la section est visible
      toggleActions: "play none none reverse",
    },
  });
});



// Effet fondu doux pour le span
gsap.from("#hero span", {
  opacity: 0,
  duration: 0.8,
  ease: "power2.out",
  scrollTrigger: {
    trigger: "#hero",
    start: "top 80%",
  },
});

// Animation plus fluide du H1 (mot par mot)
const h1 = document.querySelector("#hero h1");
const words = h1.innerText.split(" ");
h1.innerHTML = words.map(word => `<span class="inline-block opacity-0">${word}</span>`).join(" ");

gsap.to("#hero h1 span", {
  opacity: 1,
  y: 0,
  duration: 0.8, // Réduction du temps d'animation
  ease: "power2.out", // Transition plus douce
  stagger: 0.2, // Réduction du délai entre chaque mot
  scrollTrigger: {
    trigger: "#hero",
    start: "top 75%",
  },
});

// Apparition fluide du bouton
gsap.from("#hero button", {
  opacity: 0,
  scale: 0.9,
  duration: 0.6,
  ease: "power2.out",
  delay: 0.4,
  scrollTrigger: {
    trigger: "#hero",
    start: "top 70%",
  },
});





