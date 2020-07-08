var apple = document.getElementById("apple");
var grapefruit = document.getElementById("grapefruit");
var banana = document.getElementById("banana");
var watermelon = document.getElementById("watermelon");
var peaches = document.getElementById("peaches");
var result = document.getElementById("result");
function choose(){
switch (result.value){
    case "apple":
        apple.style.display = "block";
        grapefruit.style.display = "none";
        banana.style.display = "none";
        watermelon.style.display = "none";
        peaches.style.display = "none";
        break;
    case "grapefruit":
        apple.style.display = "none";
        grapefruit.style.display = "block";
        banana.style.display = "none";
        watermelon.style.display = "none";
        peaches.style.display = "none";
        break;
    case "banana":
        apple.style.display = "none";
        grapefruit.style.display = "none";
        banana.style.display = "block";
        watermelon.style.display = "none";
        peaches.style.display = "none";
        break;   
    case "watermelon":
        apple.style.display = "none";
        grapefruit.style.display = "none";
        banana.style.display = "none";
        watermelon.style.display = "block";
        peaches.style.display = "none";
        break; 
    case "peaches":
        apple.style.display = "none";
        grapefruit.style.display = "none";
        banana.style.display = "none";
        watermelon.style.display = "none";
        peaches.style.display = "block";
        break;
    default:
        document.write("404 ERROR")
        break;
}
}
var button = document.getElementById("search");
button.addEventListener('click',choose);