import formRows from "./formRows.js";

const formKeyboard = () => {
  let keyboard = "";
  for (let i = 0; i < 5; i++) {
    keyboard += '<div class="keyboard--row row">';
    keyboard += formRows(i);
    keyboard += "</div>";
  }
  return keyboard;
};

export default formKeyboard;
