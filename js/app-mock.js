import { data } from './data/data.js';

import {
  Header,
  SectionPrimary,
  SectionSecondary,
  SectionTertiary,
  Footer,
  SectionOrder,
} from './widgets/index.js';

import {
  handleThemeClick,
  handleLogoClick,
  handleBurgerClick,
  handleMenuItemClick,
  handleLogoFooterClick,
  handleButtonOrderOpenClick,
  handleButtonOrderCloseClick,
  handleOrderFormClick,
  handleOrderFormKeyUp,
  handleOrderFormSubmit,
  handleNameInput,
  handleTelInput,
  handleEmailInput,
  handleConnectionChange,
} from './handlers.js';

const { en } = data;

const $root = document.querySelector('#root');

$root.insertAdjacentHTML('beforeend', Header(en.header));
$root.insertAdjacentHTML('beforeend', SectionPrimary(en.download));
$root.insertAdjacentHTML('beforeend', SectionPrimary(en.warranty));
$root.insertAdjacentHTML('beforeend', SectionPrimary(en.care));
$root.insertAdjacentHTML('beforeend', SectionSecondary(en.cashback));
$root.insertAdjacentHTML('beforeend', SectionTertiary(en.clients));
$root.insertAdjacentHTML('beforeend', Footer(en.footer));
$root.insertAdjacentHTML('beforeend', SectionOrder());

const $theme = document.querySelector('#theme');
$theme.addEventListener('click', handleThemeClick);

const $logo = document.querySelector('#logo');
$logo.addEventListener('click', handleLogoClick);

const $burger = document.querySelector('#burger');
$burger.addEventListener('click', handleBurgerClick);

const $menuItems = document.querySelectorAll('#menu-item');
$menuItems.forEach(function(menuItem) {
  menuItem.addEventListener('click', handleMenuItemClick);
});

const $logoFooter = document.querySelector('#logo-footer');
$logoFooter.addEventListener('click', handleLogoFooterClick);

const $buttonModalOrderOpen = document.querySelector('#modal-order-open');
$buttonModalOrderOpen.addEventListener('click', handleButtonOrderOpenClick);

const $buttonModalOrderClose = document.querySelector('#modal-order-close');
$buttonModalOrderClose.addEventListener('click', handleButtonOrderCloseClick);

const $orderForm = document.querySelector('#order-form');
$orderForm.addEventListener('click', handleOrderFormClick);
$orderForm.addEventListener('keyup', handleOrderFormKeyUp);
$orderForm.addEventListener('submit', handleOrderFormSubmit);

const $inputName = document.querySelector('#input-name');
$inputName.addEventListener('input', handleNameInput);

const $inputTel = document.querySelector('#input-tel');
$inputTel.addEventListener('input', handleTelInput);

const $inputEmail = document.querySelector('#input-email');
$inputEmail.addEventListener('input', handleEmailInput);

const $connection = document.querySelector('#select-connection');
$connection.addEventListener('change', handleConnectionChange);
