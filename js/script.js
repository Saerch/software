var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var material = this.nextElementSibling;
    if (material.style.display === "block") {
      material.style.display = "none";
    } else {
      material.style.display = "block";
    }
  });
}