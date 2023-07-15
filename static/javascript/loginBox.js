const deck = document.querySelector(".deck");
const btnLogin = document.querySelector(".BtnLogin");
const btnClose = document.querySelector(".icon-close");

btnLogin.addEventListener("click", () => {
  deck.classList.add("active");
});

btnClose.addEventListener("click", () => {
  deck.classList.remove("active");
});
