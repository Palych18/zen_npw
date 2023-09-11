import { Button } from '../../shared/ui/index.js';

/**
 * @function ModalOrderClose
 * @returns {string}
 */

export const ModalOrderClose = () => {

  const props = {
    className: 'reset',
    typeButton: 'reset',
    buttonId: 'modal-order-close',
  };

  return `
    ${Button(props)}
  `;
};
