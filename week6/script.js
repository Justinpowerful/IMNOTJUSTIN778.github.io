const myHeading = document.querySelectorAll("p");
console.log(myHeading);
// console.log(myHeading.textContent);
// myHeading.textContent = "new paragraph";
// myHeading.style.backgroundColor = "limegreen";
// for (let i = 0; i < 3; i++) {
//   myHeading[i].textContent = "new" + i;
//   myHeading[i].style.backgroundColor = "limegreen";
// }


// myHeading.forEach(changeMe);


// function changeMe(item) {
//   //   item.style.backgroundColor = "coral";
//   item.classList.add("purple-box");
// }


const myButton = document.querySelector("#my-button");
console.log(myButton);


myButton.addEventListener("click", toggleMe);


function toggleMe() {
  const myImage = document.querySelector("#my-image");
  console.log(myImage);
  myImage.classList.toggle("round");
}


