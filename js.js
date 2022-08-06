const btn = document.getElementById("btn");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");


btn.addEventListener("click", function(){
    btn2.style.display = "block";
    btn.style.display = "none";
    btn3.style.display = "block";
})

btn3.addEventListener("click", function(){
    btn2.style.display = "none";
    btn3.style.display = "none";
    btn.style.display = "block";
})

// div.addEventListener("click", function(){
//     btn2.style.display = "none";
// })