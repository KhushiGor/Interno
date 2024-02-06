function myFunction() {
 
    var x = document.getElementById("navbar");
    if (x.className === "navbar") {
      x.className += " showing";
    } else {
      x.className = "navbar";
    }
  }