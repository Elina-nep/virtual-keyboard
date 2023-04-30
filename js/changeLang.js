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
    keys.forEach((element) => {
      for (let i = 0; i < element.children.length; i++) {
        if (element.children[i].classList.contains("hidden")) {
          element.children[i].classList.remove("hidden");
        } else element.children[i].classList.add("hidden");
      }
    });
  }
};

export default changeLang;
