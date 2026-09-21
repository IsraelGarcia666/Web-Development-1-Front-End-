// Exercise 1

function showTable() {
  const animal = "Axolotl";
  const habitat = "Freshwater lakes and canals";
  const diet = "Worms, insects, and small fish";

  const tableHTML = `
                <table>
                    <tr>
                        <th>Animal</th>
                        <th>Habitat</th>
                        <th>Diet</th>
                    </tr>
                    <tr>
                        <td>${animal}</td>
                        <td>${habitat}</td>
                        <td>${diet}</td>
                    </tr>
                </table>
            `;

  const tableContainer = document.querySelector("#tableContainer");
  tableContainer.innerHTML = tableHTML;
}

// Exercise 2

const exercise2Heading = document.querySelector("#exercise2-heading");

exercise2Heading.addEventListener("mouseover", function () {
  console.log("Stepped over me with a mouse!");
});

const exercise1Heading = document.querySelector("#exercise1-heading");

exercise1Heading.addEventListener("click", function () {
  exercise1Heading.style.color = "red";
  exercise1Heading.innerHTML = "Bye bye mouse!";
});

// Exercise 3

const feedback = document.querySelector("#feedback");
const status = document.querySelector("#status");
const charcount = document.querySelector("#charcount");
const preview = document.querySelector("#preview");

// Focus event
feedback.addEventListener("focus", function () {
  status.textContent = "You are writing feedback...";
  feedback.style.backgroundColor = "#fff8dc";
});

// Blur event
feedback.addEventListener("blur", function () {
  status.textContent = "";
  feedback.style.backgroundColor = "";
});

// Input event
feedback.addEventListener("input", function () {
  const text = feedback.value;

  charcount.textContent = text.length + "/200";
  preview.textContent = text;
});

// Exercise 4

const feedbackForm = document.querySelector("#feedbackForm");

feedbackForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const text = feedback.value;
  const length = text.length;

  if (length < 10 || length > 200) {
    status.textContent = "Feedback must contain 10–200 characters.";
    status.style.color = "red";
  } else {
    status.textContent = "Thank you for your feedback!";
    status.style.color = "green";

    feedback.value = "";
    charcount.textContent = "0/200";
    preview.textContent = "(The preview will appear here)";
  }
});

// Exercise 5

const keybox = document.querySelector("#keybox");
const keyinfo = document.querySelector("#keyinfo");

document.addEventListener("keydown", function (event) {
  console.log(event);

  keyinfo.textContent = "Key: " + event.key + " | Code: " + event.code;

  keybox.textContent = event.key;
  keybox.style.fontSize = "3em";
  keybox.style.textAlign = "center";
});

// Bonus Exercise - Geolocation

const locationBtn = document.querySelector("#locationBtn");
const locationStatus = document.querySelector("#locationStatus");

locationBtn.addEventListener("click", function () {
  locationStatus.textContent = "Getting your location...";

  navigator.geolocation.getCurrentPosition(
    function (position) {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      console.log("Latitude:", lat);
      console.log("Longitude:", lon);

      locationStatus.textContent = "Latitude: " + lat + " | Longitude: " + lon;

      const url = `https://www.google.com/maps?q=${lat},${lon}`;

      window.open(url, "_blank");
    },

    function (error) {
      console.log("Could not get the location:", error.message);

      locationStatus.textContent =
        "Could not get your location: " + error.message;
    },
  );
});
