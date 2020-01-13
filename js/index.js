// For 1st slider
var slider = document.getElementById("myRange");
var output = document.getElementById("value");

output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}

slider.addEventListener("mousemove", function() {
    x = slider.value;
    color = 'linear-gradient(90deg, rgb(42, 5, 5),rgb(201, 23, 24)' + x + '% , rgb(214, 214, 214)' + x + '%)';
    slider.style.background = color;
});


// For 2nd slider


var slider1 = document.getElementById("myRange1");
var output1 = document.getElementById("value1");

output1.innerHTML = slider1.value;

slider1.oninput = function() {
  output1.innerHTML = this.value;
}


slider1.addEventListener("mousemove", function() {
    x = slider1.value;
    color = 'linear-gradient(90deg, rgb(42, 5, 5),rgb(201, 23, 24)' + x + '% , rgb(214, 214, 214)' + x + '%)';
    slider1.style.background = color;
});



