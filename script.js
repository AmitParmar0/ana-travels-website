
function toggleMenu() {
  document.getElementById("nav").classList.toggle("open");
}

document.querySelectorAll("#nav a").forEach(function(link) {
  link.addEventListener("click", function() {
    document.getElementById("nav").classList.remove("open");
  });
});

// Set today's date as the earliest journey date.
const dateInput = document.getElementById("date");
const today = new Date();
const localToday = new Date(
  today.getTime() - today.getTimezoneOffset() * 60000
).toISOString().split("T")[0];

dateInput.min = localToday;
dateInput.value = localToday;

document.getElementById("year").textContent =
  new Date().getFullYear();


document.getElementById("travelForm").addEventListener(
  "submit",
  function (event) {
    event.preventDefault();

    const from = document.getElementById("from").value.trim();
    const to = document.getElementById("to").value.trim();
    const date = document.getElementById("date").value;
    const passengers = document.getElementById("passengers").value;

    if (from.toLowerCase() === to.toLowerCase()) {
      document.getElementById("result").textContent =
        "Please choose two different cities.";
      return;
    }

    // Replace with your WhatsApp number:
    // Country code + mobile number, digits only.
    const phone = "9023801564";

    const message =
      "Hello ANA Travels! I would like to enquire about a trip.\n\n" +
      "From: " + from + "\n" +
      "Destination: " + to + "\n" +
      "Travel Date: " + date + "\n" +
      "Passengers: " + passengers + "\n\n" +
      "Please share the price and available options. Thank you.";

    const whatsappURL =
      "https://wa.me/" + phone +
      "?text=" + encodeURIComponent(message);

    window.open(whatsappURL, "_blank");
  }
);




/* ANA Travels: Show welcome popup every time */
(function () {
  const popup = document.getElementById("welcomePopup");
  const closeButton = document.getElementById("closeWelcome");
  const exploreButton = document.getElementById("exploreWelcome");

  if (!popup || !closeButton || !exploreButton) return;

  function closePopup() {
    popup.classList.remove("show");
    document.body.style.overflow = "";
  }

  function openPopup() {
    popup.classList.add("show");
    document.body.style.overflow = "hidden";
    closeButton.focus();
  }

  // Show the popup every time the page loads
  openPopup();

  closeButton.addEventListener("click", closePopup);

  exploreButton.addEventListener("click", function () {
    closePopup();
    document.getElementById("packages").scrollIntoView({
      behavior: "smooth"
    });
  });

  popup.addEventListener("click", function (event) {
    if (event.target === popup) closePopup();
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && popup.classList.contains("show")) {
      closePopup();
    }
  });
})();



/* ANA Travels Hero Image Slider */
document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".hero-slide");
  const dots = document.querySelectorAll(".hero-dot");

  if (!slides.length) return;

  let currentSlide = 0;
  let sliderTimer;

  function showSlide(index) {
    currentSlide = (index + slides.length) % slides.length;

    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === currentSlide);
    });

    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === currentSlide);
      dot.setAttribute(
        "aria-current",
        i === currentSlide ? "true" : "false"
      );
    });
  }

  function startSlider() {
    clearInterval(sliderTimer);

    sliderTimer = setInterval(() => {
      showSlide(currentSlide + 1);
    }, 5000);
  }

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      showSlide(index);
      startSlider();
    });
  });

  showSlide(0);
  startSlider();
});
