const openModalButtons = document.querySelectorAll(".openModalButton");
const mainModal = document.getElementById("mainModal");
const closeMainModal = document.getElementById("closeMainModal");
const addToOrderButtons = document.querySelectorAll(".addToOrderButton");
const buyNowButtons = document.querySelectorAll(".buyNowButton");

openModalButtons.forEach(button => {
  button.addEventListener("click", () => {
    mainModal.style.display = "block";
  });
});

closeMainModal.addEventListener("click", () => {
  mainModal.style.display = "none";
});

addToOrderButtons.forEach(button => {
  button.addEventListener("click", () => {
    // Logic for adding to order goes here
  });
});

buyNowButtons.forEach(button => {
  button.addEventListener("click", () => {
    // Logic for buy now goes here
  });
});
