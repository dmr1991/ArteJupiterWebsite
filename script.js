// Smooth scrolling for navigation links
document.querySelectorAll("a.links").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

//POPUP BOXED ELEMENT IN GRID
function togglePopup(element, popupId) {
  var popup = document.getElementById(popupId);
  var popupContent = popup.querySelector(".popup-content");
  var popupTitle = popup.querySelector(".popup-title");
  var popupDescription = popup.querySelector(".workshopTextDescription");
  var popupImage = popup.querySelector(".popup-image");

  // Get the data from the clicked element
  var title = element.querySelector(".workshopTitles").textContent;
  var description = element.querySelector(".workshopTextDescription").textContent;
  var imageSrc = element.querySelector(".workshop-images").getAttribute("src");

  // Set the data in the popup
  popupTitle.textContent = title;
  popupDescription.textContent = description;
  popupImage.setAttribute("src", imageSrc);

  // Show the popup
  popup.classList.add("show");
  popupContent.classList.add("show");
}

function closePopup() {
  var popup = document.querySelector(".popup.show");
  var popupContent = popup.querySelector(".popup-content");

  // Hide the popup
  popup.classList.remove("show");
  popupContent.classList.remove("show");
}


function closePopup(event) {
  var popup = event.currentTarget;
  
  if (popup.classList.contains("show")) {
    popup.classList.remove("show");
  }
}
