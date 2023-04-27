import formKeyboard from "./formKeyboard.js";

const formLayout = () => `
  <div class="centralizer">
    <p class="title">RSS Виртуальная клавиатура</p>
    <textarea class="body--textarea textarea" id="textarea" rows="5" cols="50"></textarea>
    <main class="body--keyboard keyboard" id="keyboard">
      ${formKeyboard()}
    </main>
    <p class="description">Клавиатура создана в операционной системе Windows</p>
    <p class="language">Для переключения языка комбинация: левыe ctrl + alt</p>
  </div>
    `;

export default formLayout;
