const changeKeysLang = (keys) => {
  keys.forEach((element) => {
    for (let i = 0; i < element.children.length; i++) {
      if (element.children[i].classList.contains("hidden")) {
        element.children[i].classList.remove("hidden");
      } else element.children[i].classList.add("hidden");
    }
  });
};

export default changeKeysLang;
