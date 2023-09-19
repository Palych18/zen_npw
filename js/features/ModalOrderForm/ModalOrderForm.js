import { ButtonSendOrder } from '../index.js';

/**
 * @function ModalOrderForm
 * @returns {string}
 */

export const ModalOrderForm = () => {
  
  return `    
    <form id="order-form" class="order-form">
      <label class="order-form__field">
        <input id="input-name" name="name" type="text" placeholder="Name">
      </label>
      <label class="order-form__field">
        <input id="input-tel" name="tel" type="tel" placeholder="Tel.">
      </label>
      <label class="order-form__field">
        <input id="input-email" name="email" type="email" placeholder="E-mail">
      </label>
      <label class="order-form__field">
        <select class="order-form__select" name="connection" id="select-connection">
          <option selected value="">Connection</option>
          <option value="phone">Phone</option>
          <option value="email">E-mail</option>
          <option value="whatsapp">WhatsApp</option>
          <option value="telegram">Telegram</option>
        </select>
      </label>
      <label class="order-form__field">
        <input id="privacy" type="checkbox" data-valid="true" checked name="privacy">
        <a href="#">Privacy policy</a>
      </label>
      ${ButtonSendOrder()}
    </form>
  `;
};
