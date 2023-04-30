const setHiddenAllExcept = (element, keyClass) => {
  if (element.classList.contains(keyClass)) {
    element.classList.remove("hidden");
  } else if (!element.classList.contains("hidden")) {
    element.classList.add("hidden");
  }
};

const checkIfSpecial = (keyCode, keys, capsShiftWas) => {
  const capsShift = capsShiftWas;
  switch (keyCode) {
    case "CapsLock":
      capsShift.caps = !capsShift.caps;
      break;
    case "ShiftLeft":
      capsShift.shift = !capsShift.shift;
      break;
    case "ShiftRight":
      capsShift.shift = !capsShift.shift;
      break;
    default:
      return;
  }

  keys.forEach((element) => {
    for (let i = 0; i < element.children.length; i++) {
      for (let j = 0; j < element.children[i].children.length; j++) {
        if (!capsShift.caps && !capsShift.shift) {
          setHiddenAllExcept(element.children[i].children[j], "caseDown");
        } else if (capsShift.caps && capsShift.shift) {
          setHiddenAllExcept(element.children[i].children[j], "shiftCaps");
        } else if (!capsShift.caps && capsShift.shift) {
          setHiddenAllExcept(element.children[i].children[j], "caseUp");
        } else {
          setHiddenAllExcept(element.children[i].children[j], "caps");
        }
      }
    }
  });
};

export default checkIfSpecial;
