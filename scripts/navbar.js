window.addEventListener("scroll", checkViewport);

function checkViewport() {
  var element = document.getElementById("main");
  var name = document.getElementsByClassName("name")[0];
  var element2 = document.getElementsByTagName("nav")[0];

  var rect = element.getBoundingClientRect();
  var viewportHeight =
    window.innerHeight || document.documentElement.clientHeight;

  if (rect.top < 0) {
    element2.style.backgroundColor = "rgba(14, 19, 31, 0.900)";
    name.style.display = "none";
  }
  if (rect.top >= 0) {
    element2.style.backgroundColor = "#0e131f00";
    name.style.display = "block";
  }
}
