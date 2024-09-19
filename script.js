const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "Yay, i love you! 💕";
  gif.src = "https://media.giphy.com/media/UMon0fuimoAN9ueUNP/giphy.gif";

  // Adding heart emojis animation
  let heart = document.createElement("div");
  heart.classList.add("heart");
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 2000);
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";

  // Add bounce effect
  noBtn.style.transition = "all 0.2s ease-out";
  noBtn.style.transform = "scale(1.2)";
  setTimeout(() => {
    noBtn.style.transform = "scale(1)";
  }, 200);
});
