const words = [
"Web Developer",
"Frontend Engineer",
"UI/UX Designer"
];

let i = 0;
let j = 0;
let deleting = false;

function type() {

const element =
document.getElementById("typing");

let current = words[i];

if(!deleting){
element.textContent =
current.substring(0,j++);
}else{
element.textContent =
current.substring(0,j--);
}

if(!deleting &&
j === current.length + 1){

deleting = true;

setTimeout(type,1000);
return;
}

if(deleting && j === 0){

deleting = false;

i = (i + 1) % words.length;
}

setTimeout(type,deleting ? 60 : 120);
}

type();

document.querySelector("form")
.addEventListener("submit",e=>{

e.preventDefault();

alert("Message Sent Successfully 🚀");

});
function sendMail(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    let mailtoLink =
        `mailto:krishnakumar96168810@gmail.com?subject=Message from ${name}&body=Name: ${name}%0AEmail: ${email}%0A%0AMessage:%0A${message}`;

    window.location.href = mailtoLink;
}