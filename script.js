
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
  "submit", function(event) {
    event.preventDefault();

    const from = document.getElementById("from").value.trim();
    const to = document.getElementById("to").value.trim();
    const date = dateInput.value;
    const passengers = document.getElementById("passengers").value;
    const result = document.getElementById("result");

    if (from.toLowerCase() === to.toLowerCase()) {
      result.textContent =
        "Please choose two different cities.";
      return;
    }

    result.textContent =
      "Your trip: " + from + " to " + to +
      " | Date: " + date +
      " | Passengers: " + passengers +
      ". Connect a booking service to check availability.";
  }
);
