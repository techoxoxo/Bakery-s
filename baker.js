function myFunction() {
   var dots = document.getElementById("dots");
  var btnText = document.getElementById("mybtn");
 
   if (dots.style.display === "none") {
     dots.style.display = "inline";
     mybtn.innerHTML = "show less"; 
   }
     else {
     dots.style.display = "none";
     btnText.innerHTML = "show more"; 
   }
 } 