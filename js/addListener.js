import parseCommandKeys from "./parseCommandKeys.js";
import findNonHiddenKey from "./findNonHiddenKey.js";
import checkIfSpecial from "./checkIfSpecial.js";

const addListener = (keys, textarea, capsShift, cursorPosition) => {
  keys.forEach((element) => {
    element.addEventListener("mousedown", () => {
      const activeKey = findNonHiddenKey(element);

      parseCommandKeys(
        activeKey.innerHTML,
        element.classList[2],
        textarea,
        cursorPosition
      );
      if (element.classList[2] === "CapsLock") {
        element.classList.toggle("active");
      } else {
        element.classList.add("active");
      }

      checkIfSpecial(element.classList[2], keys, capsShift);
    });
    element.addEventListener("mouseup", () => {
      if (element.classList[2] !== "CapsLock") {
        element.classList.remove("active");
        checkIfSpecial(element.classList[2], keys, capsShift);
      }
    });
  });
};

export default addListener;
