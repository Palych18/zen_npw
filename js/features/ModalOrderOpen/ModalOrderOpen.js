import { Button } from '../../shared/ui/index.js';

/**
 * @function ModalOrderOpen
 * @param {string | undefined} buttonText
 * @returns {string}
 */

export const ModalOrderOpen = (buttonText) => {
  const currentChildren = buttonText
    ? buttonText
    : 'Order a consultation';

  const props = {
    className: 'order-open',
    buttonId: 'modal-order-open',
    children: currentChildren,
  };
  
  return `
    ${Button(props)}
  `;
};
