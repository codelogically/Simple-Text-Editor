const incrementTextSize = document.getElementById("increment");
const boldText = document.getElementById("bold");
const italicText = document.getElementById("italic");
const underlineText = document.getElementById("underline");
const alignLeft = document.getElementById("alignLeft");
const alignRight = document.getElementById("alignRight");
const alignCenter = document.getElementById("alignCenter");
const alignJustify = document.getElementById("alignJustify");
let textArea = document.getElementById("textArea");

incrementTextSize.addEventListener("input", () => {
  let fontSize = document.getElementById("fontSize");
  textArea.style.fontSize = fontSize.value + "px";
});

boldText.addEventListener("click", () => {
  textArea.classList.toggle("bold");
});

italicText.addEventListener("click", () => {
  textArea.classList.toggle("italic");
});

underlineText.addEventListener("click", () => {
  textArea.classList.toggle("underline");
});

alignLeft.addEventListener("click", () => {
  textArea.classList.add("alignLeft");
  textArea.classList.remove("alignRight");
  textArea.classList.remove("alignCenter");
  textArea.classList.remove("alignJustify");
});

alignRight.addEventListener("click", () => {
  textArea.classList.add("alignRight");
  textArea.classList.remove("alignLeft");
  textArea.classList.remove("alignCenter");
  textArea.classList.remove("alignJustify");
});

alignCenter.addEventListener("click", () => {
  textArea.classList.add("alignCenter");
  textArea.classList.remove("alignLeft");
  textArea.classList.remove("alignJustify");
  textArea.classList.remove("alignRight");
});

alignJustify.addEventListener("click", () => {
  textArea.classList.toggle("alignJustify");
});
