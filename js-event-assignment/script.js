// Event Handling

// Button Click Event
document.getElementById("btnClick").addEventListener("click", function () {
  alert("Button clicked!");
});

// Hover Effect
document.getElementById("btnHover").addEventListener("mouseover", function () {
  this.style.backgroundColor = "green";
});
document.getElementById("btnHover").addEventListener("mouseout", function () {
  this.style.backgroundColor = "";
});

// Keypress Event
document
  .getElementById("keyInput")
  .addEventListener("keypress", function (event) {
    console.log(`You pressed: ${event.key}`);
  });

// Double Click Event
document
  .getElementById("btnDoubleClick")
  .addEventListener("dblclick", function () {
    alert("You double-clicked me!");
  });

// Button to Change Text and Color
document
  .getElementById("btnChangeTextColor")
  .addEventListener("click", function () {
    this.innerHTML = "Text Changed!";
    this.style.color = "blue";
  });

// Image Gallery/Slideshow
let currentImageIndex = 0;
const images = document.querySelectorAll(".gallery-item");
setInterval(() => {
  images[currentImageIndex].style.display = "none";
  currentImageIndex = (currentImageIndex + 1) % images.length;
  images[currentImageIndex].style.display = "block";
}, 2000);

// Tabs
function openTab(evt, tabName) {
  let i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Form Validation

// Required Field Check
document.getElementById("myForm").addEventListener("submit", function (event) {
  if (!document.getElementById("name").value) {
    alert("Name is required!");
    event.preventDefault();
  }
});

// Email Format Validation
document.getElementById("email").addEventListener("blur", function () {
  const email = this.value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address!");
  }
});

// Password Rules (Min 8 Characters)
document.getElementById("password").addEventListener("blur", function () {
  if (this.value.length < 8) {
    alert("Password must be at least 8 characters long!");
  }
});

// Real-Time Feedback
document.getElementById("feedbackInput").addEventListener("input", function () {
  document.getElementById("feedbackText").innerText =
    "You typed: " + this.value;
});
