const customTipInput = document.getElementById("customTipInput");
const customTipRadio = document.getElementById("tipCustom");
const tipRadios = document.querySelectorAll(".tip-amount__input");
const customTipLabel = document.querySelector(".custom__label");

// Initially hide the custom tip input field
customTipInput.style.display = "none";

// Toggle the custom tip input when the "Custom" radio button is checked
customTipRadio.addEventListener("change", () => {
  customTipLabel.style.display = "none"; // Hide the custom label
  customTipInput.style.display = "block"; // Show the custom input field
  customTipInput.focus(); // Focus the custom input field
});

// Automatically check the custom radio when typing in the custom input
customTipInput.addEventListener("input", () => {
  customTipRadio.checked = true;
});

// Toggle the custom tip input and show the label when any other radio button is checked
tipRadios.forEach((radio) => {
  radio.addEventListener("change", function () {
    if (this !== customTipRadio) {
      customTipInput.style.display = "none"; // Hide the custom input field
      customTipLabel.style.display = "block"; // Show the custom label
      customTipInput.value = ""; // Clear the custom input field
    }
  });
});
