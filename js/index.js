import formLayout from "./formLayout.js";
import addListener from "./addListener.js";
import highlightKey from "./highlightKey.js";
import checkIfSpecial from "./checkIfSpecial.js";
import changeLang from "./changeLang.js";
import changeKeysLang from "./changeKeysLang.js";

window.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".body").innerHTML = formLayout();
  const keys = document.querySelectorAll(".key");
  const textarea = document.querySelector("#textarea");
  const capsShift = {
    caps: false,
    shift: false,
  };
  const lang = {
    LCtrl: false,
    LAlt: false,
    currLang: localStorage.getItem("currLang")
      ? localStorage.getItem("currLang")
      : "rus",
  };

  if (lang.currLang === "eng") {
    changeKeysLang(keys);
  }

  const cursorPosition = {
    position: textarea.selectionStart,
  };

  textarea.addEventListener("click", () => {
    cursorPosition.position = textarea.selectionStart;
  });

  addListener("key", keys, textarea, capsShift, cursorPosition);
  document.addEventListener("keydown", (e) => {
    e.preventDefault();
    highlightKey(e.code, keys, "down", textarea, cursorPosition);
    checkIfSpecial(e.code, keys, capsShift);
    changeLang(e.code, keys, lang);
  });
  document.addEventListener("keyup", (e) => {
    e.preventDefault();
    highlightKey(e.code, keys, "up", textarea, cursorPosition);
    checkIfSpecial(e.code, keys, capsShift);
    changeLang(e.code, keys, lang);
  });
  window.addEventListener("beforeunload", () => {
    localStorage.setItem("currLang", lang.currLang);
  });
});
