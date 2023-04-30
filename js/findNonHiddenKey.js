const findNonHiddenKey = (element) => {
  let activeKey;
  for (let i = 0; i < element.children.length; i++) {
    if (!element.children[i].classList.contains("hidden")) {
      for (let j = 0; j < element.children[i].children.length; j++) {
        if (!element.children[i].children[j].classList.contains("hidden")) {
          activeKey = element.children[i].children[j];
        }
      }
    }
  }
  return activeKey;
};

export default findNonHiddenKey;
