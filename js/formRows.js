import formFifthRow from "./formFifthRow.js";
import formFourthRow from "./formFourthRow.js";
import formSecondRow from "./formSecondRow.js";
import formThirdRow from "./formThirdRow.js";
import formTopRow from "./formTopRow.js";

const formRows = (number) => {
  switch (number) {
    case 1:
      return formTopRow();
    case 2:
      return formSecondRow();
    case 3:
      return formThirdRow();
    case 4:
      return formFourthRow();
    case 5:
      return formFifthRow();
    default:
      return "";
  }
};
export default formRows;
