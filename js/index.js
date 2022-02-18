const cardFooter = document.querySelector(".card-footer");
const shareBtn = document.querySelector(".card-footer__action");


shareBtn.addEventListener("click", () => {
  cardFooter.classList.toggle("share");
});