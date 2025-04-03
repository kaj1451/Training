function demo() {
  document.getElementById("demo").innerHTML = "Text Changed!";
}
function img(){
  document.body.style.backgroundImage = "url('download.jpg')";
}
function display()
{
 let name = document.getElementById("names").value;
 document.getElementById("hello").innerText = `Hello, ${name}`;
}
function add(){
  let ul = document.getElementById("ul");
  let li = document.createElement("li");
  li.innerText = "New Item";
  ul.appendChild(li);
}
function remove(){
  let ul = document.getElementById("ul");
  if (ul.children.length > 0) {
        ul.removeChild(ul.lastElementChild);
    }
}
document.getElementById("click").addEventListener("click", function() {alert("alert");});

function timeout() {
    document.getElementById("message").innerText = "Wait for 3 seconds";
    
    setTimeout(function() {
        document.getElementById("message").innerText = "after 3 seconds";
    }, 3000);
}
function showAlert() {
    alert("This is an alert");
}

function showConfirm() {
    let result = confirm("Are you sure?");
    document.getElementById("messagehere").innerText = result ? "You clicked OK!" : "You clicked Cancel!";
}
function showPrompt() {
    let name = prompt("Enter your name:");
    if (name) {
        document.getElementById("messagehere").innerText = `Hello, ${name}!`;
    } else {
        document.getElementById("messagehere").innerText = "No name entered!";
    }
}

document.getElementById("textInput").addEventListener("keyup", function() {
    document.getElementById("output").innerText = this.value;
});

function redirect() {
    window.location.href = "https://www.google.com"; 
}
function newtab() {
    window.open("https://www.google.com"); 
}
let counter = 0;
let intervalId;
function start() {
if (!intervalId) {
        intervalId = setInterval(function() {
          counter++;
          document.getElementById("counter").innerText = counter;
      }, 1000); 
    }
}
function stop() {
    clearInterval(intervalId);
    intervalId = null;
}
