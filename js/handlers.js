import { data } from './data/data.js';

import {
  IconMoon,
  IconSun,
} from './shared/icons/index.js';

/**
 * @function handleThemeClick
 * @param {Event} event
 * @returns {void}
 */

export const handleThemeClick = (event) => {
  const { currentTarget } = event;
  const { theme } = currentTarget.dataset;
  const $root = document.getElementById('root');
  const $header = document.getElementById('header');
  const { brands } = data.en.clients;

  const $brands = [...document.querySelectorAll('img[data-type="brand"]')];

  const $buttonOrder = document.getElementById('modal-order-open');

  if (theme === 'light') {
    currentTarget.dataset.theme = 'dark';
    currentTarget.innerHTML = IconSun();

    $root.classList.add('dark');
    $root.classList.remove('light');

    $header.classList.add('dark');
    $header.classList.remove('light');

    $buttonOrder.classList.add('dark');
    $buttonOrder.classList.remove('light');

    $brands.forEach(($brand, index) => {
      $brand.src = brands['dark'][index].source;
    });
  }
  if (theme === 'dark') {
    currentTarget.dataset.theme = 'light';
    currentTarget.innerHTML = IconMoon();

    $root.classList.add('light');
    $root.classList.remove('dark');

    $header.classList.add('light');
    $header.classList.remove('dark');

    $buttonOrder.classList.add('light');
    $buttonOrder.classList.remove('dark');

    $brands.forEach(($brand, index) => {
      $brand.src = brands['light'][index].source;
    });
  }
};

/**
 * @function handleLogoClick
 * @returns {void}
 */

export const handleLogoClick = () => {
  window.location.href = '/'
};

/**
 * @function handleBurgerClick
 * @param {Event} event
 * @returns {void}
 */

export const handleBurgerClick = (event) => {
  const { currentTarget } = event;
  const { burger } = currentTarget.dataset;
  const $burger = document.getElementById('burger');
  const $menu = document.getElementById('menu');
  
  if (burger === 'no-active'){
    currentTarget.dataset.burger = 'active';
    $burger.classList.add('active');
    $menu.classList.add('active');
  }
  if (burger === 'active') {
    currentTarget.dataset.burger = 'no-active';
    $burger.classList.remove('active');
    $menu.classList.remove('active');
  }
};

/**
 * @function handleMenuItemClick
 * @param {Event} event
 * @returns {void}
 */

export const handleMenuItemClick = () => {
  const $burger = document.getElementById('burger');
  const $menu = document.getElementById('menu');
  $burger.dataset.burger = 'no-active';
  $burger.classList.remove('active');
  $menu.classList.remove('active');
};

/**
 * @function handleLogoFooterClick
 * @returns {void}
 */

export const handleLogoFooterClick = () => {
  window.location.href = '/'
};

/**
 * @function handleButtonOrderOpenClick
 * @returns {void}
 */

export const handleButtonOrderOpenClick = () => {
  const $order = document.getElementById('section-order');
  $order.classList.add('visibility');
};

/**
 * @function handleButtonOrderCloseClick
 * @returns {void}
 */

export const handleButtonOrderCloseClick = () => {
  const $order = document.getElementById('section-order');
  $order.classList.remove('visibility');
};

/**
 * @function handleOrderFormClick
 * @returns {void}
 */

export const handleOrderFormClick = ({ currentTarget }) => {  
  const isNameValid = currentTarget.elements.name.dataset.valid === 'true';
  const isTelValid = currentTarget.elements.tel.dataset.valid === 'true';
  const isEmailValid = currentTarget.elements.email.dataset.valid === 'true';
  const isConnectionValid = currentTarget.elements.connection.dataset.valid === 'true';
  const isPrivacyChecked = currentTarget.elements.privacy.checked;

  const isFieldsValid = 
    isNameValid &&
    isTelValid &&
    isEmailValid &&
    isConnectionValid &&
    isPrivacyChecked;

  submit.disabled = !isFieldsValid;
};

/**
 * @function handleOrderFormKeyUp
 * @returns {void}
 */

export const handleOrderFormKeyUp = ({ currentTarget }) => {  
  const isNameValid = currentTarget.elements.name.dataset.valid === 'true';
  const isTelValid = currentTarget.elements.tel.dataset.valid === 'true';
  const isEmailValid = currentTarget.elements.email.dataset.valid === 'true';
  const isConnectionValid = currentTarget.elements.connection.dataset.valid === 'true';
  const isPrivacyChecked = currentTarget.elements.privacy.checked;

  const isFieldsValid = 
    isNameValid &&
    isTelValid &&
    isEmailValid &&
    isConnectionValid &&
    isPrivacyChecked;

  submit.disabled = !isFieldsValid;
};

/**
 * @function handleOrderFormSubmit
 * @returns {void}
 */

export const handleOrderFormSubmit = async (event) => {
  event.preventDefault();
  
  const $modal = document.querySelector('#section-order');
  const $inputName = document.querySelector('#input-name');
  const $inputTel = document.querySelector('#input-tel');
  const $inputEmail = document.querySelector('#input-email');
  const $inputConnection = document.querySelector('#select-connection');

  const $form = event.currentTarget;
  const { elements } = event.currentTarget;

  const order = {
    type: 'order',
    data: new Date().toLocaleDateString(),
    name: elements.name.value,
    tel: elements.tel.value,
    email: elements.email.value,
    connection: elements.connection.value,
  };

  console.log({ order });

  const requestUrl = 'https://zen-npw-default-rtdb.firebaseio.com/en/orders/.json';
  const requestOptions = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(order),
  };

  const response = await fetch(requestUrl, requestOptions);
  const responseData = await response.json();

  console.log({ responseData });

  $form.reset();
  $modal.classList.remove('visibility');
  $inputName.parentElement.classList.remove('valid');
  $inputTel.parentElement.classList.remove('valid');
  $inputEmail.parentElement.classList.remove('valid');
  $inputConnection.parentElement.classList.remove('valid');
  submit.disabled = true;
};

/**
 * @function handleNameInput
 * @param {Event} event
 * @returns {void}
 */

export const handleNameInput = ({ currentTarget }) => {
  const { value } = currentTarget;
  
  if (!value.length) {
    currentTarget.dataset.valid = false;
    currentTarget.parentElement.classList.remove('invalid');
    currentTarget.parentElement.classList.remove('valid');
  }; 
  if (value.length === 1) {
    currentTarget.dataset.valid = false;
    currentTarget.parentElement.classList.remove('valid');
    currentTarget.parentElement.classList.add('invalid');
  };
  if (value.length > 1) {
    currentTarget.dataset.valid = true;
    currentTarget.parentElement.classList.remove('invalid');
    currentTarget.parentElement.classList.add('valid');
  };
};

/**
 * @function handleTelInput
 * @param {Event} event
 * @returns {void}
 */

export const handleTelInput = ({ currentTarget }) => {
  const { value } = currentTarget;
  const regexpTel = /^[0-9]{11}$/;

  if (!value.length) {
    currentTarget.dataset.valid = false;
    currentTarget.parentElement.classList.remove('invalid');
    currentTarget.parentElement.classList.remove('valid');
  };
  if (value.length && value.length !== 11 ) {
    currentTarget.dataset.valid = false;
    currentTarget.parentElement.classList.remove('valid');
    currentTarget.parentElement.classList.add('invalid');
  };
  if (regexpTel.test(value)) {
    currentTarget.dataset.valid = true;
    currentTarget.parentElement.classList.remove('invalid');
    currentTarget.parentElement.classList.add('valid');
  };
};

/**
 * @function handleEmailInput
 * @param {Event} event
 * @returns {void}
 */

export const handleEmailInput = ({ currentTarget }) => {  
  const { value } = currentTarget;
  const regexpEmail = /^\S+@\S+\.\S{2,4}$/i;

  if (!value.length) {
    currentTarget.dataset.valid = false;
    currentTarget.parentElement.classList.remove('valid');
    currentTarget.parentElement.classList.remove('invalid');
  };
  if (value.length) {
    currentTarget.dataset.valid = false;
    currentTarget.parentElement.classList.remove('valid');
    currentTarget.parentElement.classList.add('invalid');
  };
  if (regexpEmail.test(value)) {
    currentTarget.dataset.valid = true;
    currentTarget.parentElement.classList.remove('invalid');
    currentTarget.parentElement.classList.add('valid');
  };
};

/**
 * @function handleConnectionChange
 * @param {Event} event
 * @returns {void}
 */

export const handleConnectionChange = ({ currentTarget }) => {
  const { value } = currentTarget;

  if (!value.length) {
    currentTarget.dataset.valid = false;
    currentTarget.parentElement.classList.remove('valid');
    currentTarget.parentElement.classList.remove('invalid');
  };
  if (value.length) {
    currentTarget.dataset.valid = true;
    currentTarget.parentElement.classList.remove('invalid');
    currentTarget.parentElement.classList.add('valid');
  };
};
