import { IconLogoFooter } from '../../shared/icons/index.js';

/**
 * @function LogoFooter
 * @return {string}
 */

export const LogoFooter = () => {
  return `
    <button class="footer__logo" id="logo-footer">
      ${IconLogoFooter()}
    </button>
  `
};
