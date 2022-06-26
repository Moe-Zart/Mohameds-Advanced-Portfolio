//template_9v0sfon
//service_ih6hlee
//nD4fLAT5iuBGNb9-z

function contact(event) {
  event.preventDefault(); //this just removes the default form settings
  const loading = document.querySelector('.modal-loading'); //access the loading class from html
  const success = document.querySelector('.modal-success'); //access the success class from html
  loading.classList += " modal-visible"; //this makes the modal-loading class have the properties of the modal-visible class, which is z index:1 .(note: the space is important)
  emailjs
    .sendForm(
      "service_ih6hlee",
      "template_9v0sfon",
      event.target,
      "nD4fLAT5iuBGNb9-z"
    ).then(() => {
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
