var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomNumber2 = Math.floor(Math.random()*6)+1;
var imagesource1 = "dice" + randomNumber1+".png";
var imagesource2 = "dice" + randomNumber2+".png";
var ransource1 = "images/"+imagesource1;
var ransource2 = "images/"+imagesource2;
var image1 = document.querySelectorAll("img")[0];
var image2 = document.querySelectorAll("img")[1];
image1.setAttribute("src",ransource1);
image2.setAttribute("src",ransource2);
console.log(image1)
console.log(image2)
var text = document.querySelector("h3");
console.log(text)
if(randomNumber1>randomNumber2){
    text.innerHTML = "yashwanth Pedda Erri Puka";
}else if(randomNumber1<randomNumber2){
    text.innerHTML = "surya Pedda Erri Puka";
}else{
    text.innerHTML = "suryaPedda Erri Puka";
}