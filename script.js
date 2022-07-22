/* .js files add interaction to your website */
displayName = document.getElementById("secret");
var button = document.getElementById("myButton");

  button.addEventListener("click", displaySecret);



function displaySecret(){
  var text = document.getElementById("myText").value;
  displayName.innerHTML = text + ", we need to encourage girls that their voice matters. I think there are hundreds and thousands of Malalas out there."
}
