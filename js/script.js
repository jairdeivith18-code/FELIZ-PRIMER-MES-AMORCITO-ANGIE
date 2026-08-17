const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.14 });

document.querySelectorAll(".reveal").forEach((el) => {
  observer.observe(el);
});

function startStory() {
  document.querySelector(".message").scrollIntoView({
    behavior: "smooth"
  });
  burstHearts(18);
}

function burstHearts(cantidad) {
  const box = document.getElementById("hearts");

  for (let i = 0; i < cantidad; i++) {
    const h = document.createElement("div");

    h.className = "heart-float";
    h.textContent = ["♥", "♡", "❤", "✦"][
      Math.floor(Math.random() * 4)
    ];

    h.style.left = Math.random() * 100 + "%";
    h.style.fontSize = (12 + Math.random() * 22) + "px";
    h.style.animationDuration = (4 + Math.random() * 5) + "s";
    h.style.animationDelay = (Math.random() * 1.2) + "s";
    h.style.color = Math.random() > 0.5 ? "#ff9bc8" : "#ffffff";

    box.appendChild(h);

    setTimeout(() => h.remove(), 10000);
  }
}

setInterval(() => burstHearts(1), 1800);