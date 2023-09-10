import {
  ModalOrderForm,
  ModalOrderClose,
} from '../../features/index.js';

/**
 * @function SectionOrder
 * @returns {string}
 */

export const SectionOrder = () => {

  const className = 'modal';

  return `
    <section class="section__order" id="section-order">
      <div class="${className}" id="modal">
        <div class="${className}__reset">
          ${ModalOrderClose()}
        </div>
        <h3 class="${className}__title">Order a consultation</h3>
        ${ModalOrderForm()}
      </div>
    </section>
  `;    
};
