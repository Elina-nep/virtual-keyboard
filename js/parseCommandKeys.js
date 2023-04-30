const COMMAND_KEYS = [
  "Backspace",
  "Tab",
  "Enter",
  "Delete",
  "CapsLock",
  "ShiftLeft",
  "ControlLeft",
  "AltLeft",
  "MetaLeft",
  "ShiftRight",
  "ControlRight",
  "AltRight",
  "MetaRight",
  "Escape",
];

const parseCommandKeys = (key, code, textarea, cursorPositionWas) => {
  const keyNumber = COMMAND_KEYS.indexOf(code);
  const cursorPosition = cursorPositionWas;
  const text = textarea;
  text.selectionStart = cursorPosition.position;

  console.log(cursorPosition, text.selectionStart, text.selectionEnd);

  switch (keyNumber) {
    case 0:
      if (text.selectionStart === text.selectionEnd) {
        text.selectionStart -= 1;
      }
      text.value =
        text.value.substr(0, text.selectionStart) +
        text.value.substr(text.selectionEnd, text.value.length);
      cursorPosition.position -= 1;
      text.selectionStart = cursorPosition.position;
      text.selectionEnd = cursorPosition.position;
      break;
    case 1:
      text.value = `${text.value.substr(
        0,
        text.selectionStart
      )}    ${text.value.substr(text.selectionEnd, text.value.length)}`;
      cursorPosition.position += 4;
      text.selectionStart = cursorPosition.position;
      text.selectionEnd = cursorPosition.position;
      break;
    case 2:
      text.value = `${text.value.substr(
        0,
        text.selectionStart
      )}\n${text.value.substr(text.selectionEnd, text.value.length)}`;
      cursorPosition.position += 1;
      text.selectionStart = cursorPosition.position;
      text.selectionEnd = cursorPosition.position;
      break;
    case 3:
      if (text.selectionStart === text.selectionEnd) {
        text.selectionEnd += 1;
      }
      text.value =
        text.value.substr(0, text.selectionStart) +
        text.value.substr(text.selectionEnd, text.value.length);
      text.selectionStart = cursorPosition.position;
      text.selectionEnd = cursorPosition.position;
      break;
    case -1:
      text.value =
        text.value.substr(0, text.selectionStart) +
        key +
        text.value.substr(text.selectionEnd, text.value.length);
      cursorPosition.position += 1;
      text.selectionStart = cursorPosition.position;
      text.selectionEnd = cursorPosition.position;
      break;
    default:
      break;
  }
  return text;
};

export default parseCommandKeys;
