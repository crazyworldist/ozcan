function changeHairStyle() {
  var selectElement = document.getElementById("hair-style");
  var selectedStyle = selectElement.value;
  var hairImage = document.getElementById("hair-image");
  
  if (selectedStyle === "style1") {
    hairImage.src = "style1.jpg";
  } else if (selectedStyle === "style2") {
    hairImage.src = "style2.jpg";
  } else if (selectedStyle === "style3") {
    hairImage.src = "style3.jpg";
  }
  
  document.getElementById("result-area").style.display = "block";
}

var tryButton = document.getElementById("try-button");
tryButton.addEventListener("click", changeHairStyle);
