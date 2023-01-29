const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/kamel.jpg") {
    myImage.setAttribute("src", "images/uwe.jpg");
  } else {
    myImage.setAttribute("src", "images/kamel.jpg");
  }
};
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    
    localStorage.setItem("name", myName);
    myHeading.textContent = `Camels are cool, ${myName}`;
  }
  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Camels are cool, ${storedName}`;
  }
  myButton.onclick = () => {
    setUserName();
  };
  