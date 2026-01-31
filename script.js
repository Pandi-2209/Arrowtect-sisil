document.addEventListener("DOMContentLoaded", () => {

  /* ================= STICKY HEADER ================= */
  const header = document.querySelector(".header");
  window.addEventListener("scroll", () => {
    header.classList.toggle("sticky", window.scrollY > 80);
  });

const dropdown = document.getElementById("servicesDropdown");
const toggle = dropdown.querySelector(".dropdown-toggle");

toggle.addEventListener("click", (e) => {
  e.stopPropagation();
  dropdown.classList.toggle("active");
});

document.addEventListener("click", () => {
  dropdown.classList.remove("active");
});



  /* ================= DISCOVER BUTTON ================= */
  const discoverBtn = document.getElementById("discoverBtn");
  if (discoverBtn) {
    discoverBtn.addEventListener("click", () => {
      document.querySelector("#about")
        .scrollIntoView({ behavior: "smooth" });
    });
  }

  /* ================= SCROLL REVEAL (SMOOTH & STABLE) ================= */
  const reveals = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.unobserve(entry.target); // animate only once
        }
      });
    },
    { threshold: 0.15 }
  );

  reveals.forEach(el => observer.observe(el));

});

/* ================= LOGIN / PROFILE ================= */
const user = JSON.parse(localStorage.getItem("user"));
const loginBtn = document.getElementById("loginBtn");
const profileBox = document.getElementById("profileBox");

if (user && loginBtn && profileBox) {
  loginBtn.style.display = "none";
  profileBox.style.display = "flex";
  document.getElementById("profileName").innerText = user.name;
  document.getElementById("profileImg").src =
    user.picture || `https://ui-avatars.com/api/?name=${user.name}`;
}

function logout() {
  localStorage.removeItem("user");
  window.location.href = "login.html";
}

/* ================= CHATBOT ================= */
function toggleBot() {
  const bot = document.getElementById("chatbot");
  bot.style.display = bot.style.display === "flex" ? "none" : "flex";
}

function sendMessage() {
  const input = document.getElementById("userInput");
  const msg = input.value.trim();
  if (!msg) return;

  const chatBody = document.getElementById("chatBody");
  chatBody.innerHTML += `<div class="user-msg">${msg}</div>`;
  input.value = "";

  setTimeout(() => {
    chatBody.innerHTML += `<div class="bot-msg">${getBotReply(msg)}</div>`;
    chatBody.scrollTop = chatBody.scrollHeight;
  }, 600);
}

function getBotReply(msg) {
  msg = msg.toLowerCase();
  if (msg.includes("service")) return "We offer Skill Development, HR & Payroll, Textile ERP, and Corporate Consulting.";
  if (msg.includes("contact")) return "You can contact us via email or phone listed on the Contact page.";
  if (msg.includes("training")) return "We provide industry-focused skill training programs.";
  if (msg.includes("hi") || msg.includes("hello")) return "Hello 👋 How can I assist you?";
  return "Thanks for your message. Our team will get back to you soon.";
}

function toggleFAQ(button) {
  const item = button.closest(".faq-item");
  const answer = item.querySelector(".faq-answer");

  // Ensure icon span exists
  let icon = button.querySelector("span");
  if (!icon) {
    icon = document.createElement("span");
    icon.textContent = "+";
    button.appendChild(icon);
  }

  // Close all other FAQ items
  document.querySelectorAll(".faq-item").forEach(faq => {
    if (faq !== item) {
      faq.classList.remove("active");
      faq.querySelector(".faq-answer").style.maxHeight = null;

      const otherBtn = faq.querySelector(".faq-question");
      const otherIcon = otherBtn.querySelector("span");
      if (otherIcon) otherIcon.textContent = "+";
    }
  });

  // Toggle current FAQ
  if (item.classList.contains("active")) {
    item.classList.remove("active");
    answer.style.maxHeight = null;
    icon.textContent = "+";
  } else {
    item.classList.add("active");
    answer.style.maxHeight = answer.scrollHeight + "px";
    icon.textContent = "−";
  }
}

/* ================= PAGE TRANSITION ================= */
document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("page-transition");
  requestAnimationFrame(() => document.body.classList.add("show"));

  document.querySelectorAll("a").forEach(link => {
    if (link.href && !link.href.includes("#")) {
      link.addEventListener("click", e => {
        e.preventDefault();
        document.body.classList.remove("show");
        setTimeout(() => window.location.href = link.href, 400);
      });
    }
  });
})
  const scrollElements = document.querySelectorAll(
    ".scroll-reveal, .scroll-left, .scroll-right"
  );

  const scrollObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    },
    { threshold: 0.15 }
  );

  scrollElements.forEach((el) => scrollObserver.observe(el));


