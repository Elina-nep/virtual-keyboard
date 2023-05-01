import changeKeysLang from "./changeKeysLang.js";

const changeLang = (keyCode, keys, langWas) => {
  const lang = langWas;
  switch (keyCode) {
    case "ControlLeft":
      lang.LCtrl = !lang.LCtrl;
      break;
    case "AltLeft":
      lang.LAlt = !lang.LAlt;
      break;

    default:
      return;
  }

  if (lang.LCtrl && lang.LAlt) {
    changeKeysLang(keys);
    if (keys[0].children[0].classList.contains("hidden")) {
      lang.currLang = "eng";
    } else lang.currLang = "rus";
  }
};

export default changeLang;
