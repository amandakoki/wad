
let user_name; //variable declaration

document.getElementById("submit_button").onclick = function(){
user_name = document.getElementById("myinput").value;
console.log(user_name); 
}