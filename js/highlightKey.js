import findNonHiddenKey from "./findNonHiddenKey.js";
import parseCommandKeys from "./parseCommandKeys.js";

const highlightKey = (keyCode, keysArr, action, textarea, cursorPosition) => {
  const text = textarea;
  for (let i = 0; i < keysArr.length; i++) {
    if (keysArr[i].classList.contains(keyCode)) {
      if (action === "down") {
        keysArr[i].classList.add("active");
        const activeKey = findNonHiddenKey(keysArr[i]);
        parseCommandKeys(activeKey.innerHTML, keyCode, text, cursorPosition);
      } else {
        keysArr[i].classList.remove("active");
      }
      break;
    }
  }
};

export default highlightKey;
