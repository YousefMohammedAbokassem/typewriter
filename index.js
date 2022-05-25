// ===================    Type Writing   ======================

const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = [
  "Front-End Developer",
  "Flutter developrer",
  "Back end developer",
  "Data base ",
];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function typing() {
  if (textArray[textArrayIndex].length > charIndex) {
    if (!cursorSpan.classList.contains("typing")) {
      cursorSpan.classList.add("typing");
    }
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typing, typingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    setTimeout(erasing, newTextDelay);
  }
}
// eeeeeeaaaaaaaarseeee
function erasing() {
  if (charIndex > 0) {
    if (!cursorSpan.classList.contains("typing")) {
      cursorSpan.classList.add("typing");
    }
    typedTextSpan.textContent = textArray[textArrayIndex].substring(
      0,
      charIndex - 1
    );
    charIndex--;
    setTimeout(erasing, erasingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    setTimeout(typing, newTextDelay);
    if (textArrayIndex >= textArray.length) {
      textArrayIndex = 0;
    }
  }
}
document.addEventListener("DOMContentLoaded", function () {
  // On DOM Load initiate the effect
  if (textArray.length) setTimeout(typing, newTextDelay);
});