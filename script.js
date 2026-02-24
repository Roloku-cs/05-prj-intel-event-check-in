const form = document.getElementById("checkInForm");
const nameInput = document.getElementById("attendeeName");
const teamSelect = document.getElementById("teamSelect");

// Track count of attendees
let count = 0;
const maxCount = 50;

// Handle form submission
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form from submitting normally

  const name = nameInput.value.trim();
  const team = teamSelect.value;
  const teamName = teamSelect.options[teamSelect.selectedIndex].text;
  if (name === "") {
    alert("Please enter your name.");
    return;
  }

  console.log(`Attendee Name: ${name}, Team: ${team}, Team Name: ${teamName}`);

  // Increment the count and check if it exceeds the maximum
  count++;
  console.log(`Current count of attendees: ${count}`);
  if (count > maxCount) {
    alert("Maximum number of attendees reached.");
    return;
  }

  // Update progress bar
  const percentage = Math.round((count / maxCount) * 100) + "%";
  console.log(`Progress: ${percentage}`);
  document.getElementById("progressBar").style.width = percentage;
  document.getElementById("attendeeCount").textContent = count;

  //Update team counts
  const teamCounter = document.getElementById(team + `Count`);
  teamCounter.textContent = parseInt(teamCounter.textContent) + 1;

  // Show greeting modal
  const modal = document.getElementById("greetingModal");
  document.getElementById("greetingMessage").textContent =
    `Welcome to ${teamName}, ${name}!`;
  modal.classList.add("active");

  form.reset(); // Reset the form after submission
});

// Close modal on close button click
document.getElementById("modalClose").addEventListener("click", function () {
  document.getElementById("greetingModal").classList.remove("active");
});

// Close modal when clicking outside the modal box
document
  .getElementById("greetingModal")
  .addEventListener("click", function (event) {
    if (event.target === this) {
      this.classList.remove("active");
    }
  });
