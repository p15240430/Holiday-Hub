"use strict";
document.getElementById("myBtn").addEventListener("click", function(){
    alert("View google maps below");
});


var slideIndex = 0;
showSlides();
function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides1");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}



function initMap() {
  let leicester = {lat: 52.6333, lng: -1.1333};
  let dmu = {lat: 52.629311, lng: -1.137836};
  let uol = {lat: 52.620956, lng: -1.124049};
  let mapDemo = document.getElementById("map");

  // this sets the default location for when the map is first loaded
  let map = new google.maps.Map(mapDemo, {
    zoom: 13,
    center: leicester
  });

  // these set different markers you want to show on your map
  let markerDMU = new google.maps.Marker({
    position: dmu,
    map: map,
    title: 'The Good Guys'
  });
  let markerUoL = new google.maps.Marker({
    position: uol,
    map: map,
    title: 'The Bad Guys'
  });
}