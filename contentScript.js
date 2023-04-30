const EN_CHARS = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const FA_CHARS = "شسیبلاتنمکگظطزرذدپو./ثجحچخهعغفقضص";

function convertCharacters(input, sourceChars, targetChars) {
  let output = "";
  for (let i = 0; i < input.length; i++) {
    const index = sourceChars.indexOf(input[i]);
    if (index >= 0) {
      output += targetChars[index];
    } else {
      output += input[i];
    }
  }
  return output;
}

function switchKeyboardLanguage(event) {
  console.log("event.ctrlKey && event.code", event)
  if (event.ctrlKey && event.code === "F12") {
    event.preventDefault();
    const inputElement = document.activeElement;
    if (inputElement.tagName === "INPUT" || inputElement.tagName === "TEXTAREA") {
      const inputValue = inputElement.value;
      const isEnglish = EN_CHARS.includes(inputValue[0]);
      const newInputValue = isEnglish
        ? convertCharacters(inputValue, EN_CHARS, FA_CHARS)
        : convertCharacters(inputValue, FA_CHARS, EN_CHARS);
      inputElement.value = newInputValue;
    }
  }
}

document.addEventListener("keydown", switchKeyboardLanguage);
