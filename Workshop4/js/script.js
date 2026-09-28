// TASK 1: Changing content

const changeHeadingButton = document.querySelector("#changeHeadingButton");

const taskOneHeading = document.querySelector("#taskOneHeading");

// Button 1: Change the heading
changeHeadingButton.addEventListener("click", function () {
  taskOneHeading.textContent = "Updated heading!";
});

// Button 2: Change the heading style
const changeStyleButton = document.querySelector("#changeStyleButton");

changeStyleButton.addEventListener("click", function () {
  taskOneHeading.classList.toggle("highlight");
});

// Button 3: Change the animal description
const changeTextButton = document.querySelector("#changeTextButton");

const animalText = document.querySelector("#animalText");

changeTextButton.addEventListener("click", function () {
  animalText.textContent =
    "Axolotls are fascinating amphibians native to Mexico.";
});

// Bonus 1 - Task 1: Add a new sentence

const addSentenceButton = document.querySelector("#addSentenceButton");
addSentenceButton.addEventListener("click", function () {
  animalText.textContent +=
    " They can regenerate lost limbs and even parts of their organs.";
});

// Bonus 2 - Task 1: Change background colour

const backgroundButton = document.querySelector("#backgroundButton");
backgroundButton.addEventListener("click", function () {
  document.body.classList.toggle("alternate-background");
});

// TASK 2:
// h3, paragraph, and image elements for the animal of the day section
const animalContent = document.querySelector("#animalContent");

const animalHeading = document.createElement("h3");
animalHeading.textContent = "Animal of the Day";
animalHeading.classList.add("animal-heading");

animalContent.append(animalHeading);

const animalParagraph = document.createElement("p");
animalParagraph.textContent =
  "The axolotl has a special place in Mexican culture. " +
  "Its name comes from Nahuatl, and it is associated with Xolotl, " +
  "an Aztec deity. Today, it is also an important symbol of " +
  "Mexico's natural heritage and biodiversity.";
animalContent.append(animalParagraph);

// Create the animal image

animalOfTheDayImage = document.createElement("img");
animalOfTheDayImage.src = "images/Axolotl3.png";
animalOfTheDayImage.alt = "An axolotl in its natural habitat";
animalContent.append(animalOfTheDayImage);

// Hide and show the animal

const hideAnimalButton = document.querySelector("#hideAnimalButton");
const showAnimalButton = document.querySelector("#showAnimalButton");

// Hide the animal
hideAnimalButton.addEventListener("click", function () {
  animalContent.hidden = true;
});

// Show the animal
showAnimalButton.addEventListener("click", function () {
  animalContent.hidden = false;
});

// TASK 3: Selecting an animal

const animalSelect = document.querySelector("#animalSelect");

// Task 3: Update the selected animal

animalSelect.addEventListener("change", function () {
  const selectedAnimal = animalSelect.value;

  console.log(selectedAnimal);

  animalName.textContent =
    animalSelect.options[animalSelect.selectedIndex].text;

  if (selectedAnimal === "elephant") {
    animalImage.src = "images/elephant.png";
    animalImage.alt = "Elephant";
    animalDescription.textContent =
      "Elephants are the world's largest land animals.";
  } else if (selectedAnimal === "tiger") {
    animalImage.src = "images/tiger.png";
    animalImage.alt = "Tiger";
    animalDescription.textContent =
      "Tigers are powerful predators known for their distinctive stripes.";
  } else if (selectedAnimal === "penguin") {
    animalImage.src = "images/penguin.png";
    animalImage.alt = "Penguin";
    animalDescription.textContent =
      "Penguins are flightless birds adapted to life in the water.";
  } else if (selectedAnimal === "panda") {
    animalImage.src = "images/panda.png";
    animalImage.alt = "Panda";
    animalDescription.textContent =
      "Giant pandas are native to China and feed primarily on bamboo.";
  }
});

// Change the animal's name, image and description

const animalName = document.querySelector("#animalName");

const animalImage = document.querySelector("#animalImage");

const animalDescription = document.querySelector("#animalDescription");

// Mouse events

animalImage.addEventListener("mouseenter", function () {
  animalImage.classList.add("image-highlight");
});

animalImage.addEventListener("mouseleave", function () {
  animalImage.classList.remove("image-highlight");
});

// TASK 4: Adding animal observations

// Select the form
const animalForm = document.querySelector("#animalForm");

// Select the input fields
const observationAnimal = document.querySelector("#observationAnimal");

const observationLocation = document.querySelector("#observationLocation");

const observationDate = document.querySelector("#observationDate");

// Listen for form submission
animalForm.addEventListener("submit", function (event) {
  event.preventDefault();

  // Get the information entered by the user
  const animal = observationAnimal.value.trim();
  const location = observationLocation.value.trim();
  const date = observationDate.value;

  // Check that all fields contain information
  if (!animal || !location || !date) {
    alert("Please complete all fields.");
    return;
  }

  // Find the table body
  const tableBody = document.querySelector("#observationTableBody");

  // Create a new row
  const newRow = document.createElement("tr");

  // Create three cells
  const animalCell = document.createElement("td");
  const locationCell = document.createElement("td");
  const dateCell = document.createElement("td");

  // Add the user's information
  animalCell.textContent = animal;
  locationCell.textContent = location;
  dateCell.textContent = date;

  // Insert the cells into the row
  newRow.append(animalCell, locationCell, dateCell);

  // Insert the row into the table
  addDeleteButton(newRow);
  tableBody.append(newRow);

  // Clear the form
  animalForm.reset();
});

// TASK 4 BONUS: Delete animal observations

function addDeleteButton(row) {
  const actionCell = document.createElement("td");

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.type = "button";

  deleteButton.addEventListener("click", function () {
    row.remove();
  });

  actionCell.append(deleteButton);
  row.append(actionCell);
}

// Add buttons to the existing observations
document.querySelectorAll("#observationTableBody tr").forEach(addDeleteButton);

// FINAL BONUS 1: Move the animal image

const moveImageButton = document.querySelector("#moveImageButton");

moveImageButton.addEventListener("click", function () {
  animalImage.classList.toggle("image-moved");
});

// FINAL BONUS 2: Animate the animal image

const animateImageButton = document.querySelector("#animateImageButton");

animateImageButton.addEventListener("click", function () {
  animalImage.classList.toggle("image-floating");
});

// FINAL BONUS 3: Fade out the animal image

const fadeImageButton = document.querySelector("#fadeImageButton");

fadeImageButton.addEventListener("click", function () {
  animalImage.classList.toggle("image-faded");

  if (animalImage.classList.contains("image-faded")) {
    fadeImageButton.textContent = "Fade in animal";
  } else {
    fadeImageButton.textContent = "Fade out animal";
  }
});

// FINAL BONUS 4: Remove the animal image

const removeImageButton = document.querySelector("#removeImageButton");

removeImageButton.addEventListener("click", function () {
  animalImage.remove();
});

// FINAL BONUS 5: Select and loop through list elements

const listItems = document.querySelectorAll("li");

listItems.forEach(function (item, index) {
  console.log("Item " + (index + 1) + ": " + item.textContent.trim());
});
