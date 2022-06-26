const scaleFactor = 1 / 40;
function moveBackground(event) {
  const shapes = document.querySelectorAll(".shape"); //calling all shapes classes
  const x = event.clientX * scaleFactor; //the x cords of the mouse divided by 25
  const y = event.clientY * scaleFactor; // the y cords of the mouse divided by 25
  //(note: the x and y are divided by 25 so that the shapes only move 25% of the mouses' movement)

  for (let i = 0; i < shapes.length; i++) {
    const isOdd = i%2!==0;
    const boolInt = isOdd ? -1:1;
    shapes[i].style.transform = `translate(${x*boolInt}px, ${y*boolInt}px) rotate(${x*boolInt*5}deg`; //for each shape, the shaoes move each pixel with the mouse
  }
}

let contrastToggle = false;
function toggleContrast() {
  contrastToggle = !contrastToggle;
  contrastToggle
    ? (document.body.classList += " dark-theme")
    : document.body.classList.remove("dark-theme");
}
function contact(event) {
  event.preventDefault(); //this just removes the default form settings
  const loading = document.querySelector(".modal-loading"); //access the loading class from html
  const success = document.querySelector(".modal-success"); //access the success class from html
  loading.classList += " modal-visible"; //this makes the modal-loading class have the properties of the modal-visible class, which is z index:1 .(note: the space is important)
  emailjs
    .sendForm(
      "service_ih6hlee",
      "template_9v0sfon",
      event.target,
      "nD4fLAT5iuBGNb9-z"
    )
    .then(() => {
      loading.classList.remove("modal-visible"); //this removes the modal-visible properties from the modal-loading class, so it is back at z-index:-1
      success.classList += " modal-visible"; //this makes the modal-success class have the properties of the modal-visible class, which is z index:1
    })
    .catch(() => {
      loading.classList.remove("modal-visible"); //if the form doesnt go through, remove the modal-visible index, which will just show the loading, and send the alert below
      alert(
        "The email service is temporarily unavailable. Please contact me directly on mohamedzreika03@gmail.com"
      );
    });
}
let isModalOpen = false;
function toggleModal() {
  if (isModalOpen) {
    isModalOpen = false;
    return document.body.classList.remove("modal-open");
  }
  isModalOpen = true;
  document.body.classList += " modal-open";
}
