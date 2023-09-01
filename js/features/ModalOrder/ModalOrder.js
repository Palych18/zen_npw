/**
 * @function ModalOrder
 * @returns {string}
 */

export const ModalOrder = () => {

  return `
    <div class="modal" id="modal">
      <div class="modal__reset">
        <button class="reset__button" type="reset" id="reset-button" data-button="active"></button>
      </div>      
      <h3 class="modal__title">Order a consultation</h3>
      <form class="form">
        <label class="form__field">
          <input id="name" type="text" placeholder="Name">
        </label>
        <label class="form__field">
          <input id="tel" type="tel" placeholder="Tel.">
        </label>
        <label class="form__field">
          <input id="email" type="email" placeholder="E-mail">
        </label>
        <label class="form__field">
          <select class="form__select" name="connection" id="connection">
            <option disabled selected value="">Connection</option>
            <option value="phone">Phone</option>
            <option value="email">E-mail</option>
            <option value="whatsapp">WhatsApp</option>
            <option value="telegram">Telegram</option>
          </select>
        </label>
        <label class="form__field">
          <input id="privacy" type="checkbox" checked name="privacy">
          <a href="#">Privacy policy</a>
        </label>
        <button type="submit" class="form__submit">Submit</button>
      </form>
    </div>
  `;
};
