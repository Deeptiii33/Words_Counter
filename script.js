let inputTextArea = document.getElementById("input-textarea");
let characterCount = document.getElementById("character-count");
let wordCount = document.getElementById("word-count");
let paragraphCount = document.getElementById("paragraph-count");
inputTextArea.addEventListener("input", () => {
  characterCount.textContent = inputTextArea.value.length;
  let txt = inputTextArea.value.trim();
  wordCount.textContent = txt.split(/\s+/).filter((item) => item).length;
  paragraphCount.textContent = txt.split("\n\n").filter((item) => item).length;
});