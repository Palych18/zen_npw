import { data } from './data/data.js';

import {
  Header,
  SectionPrimary,
  SectionSecondary,
  SectionTertiary,
} from './widgets/index.js';

import {
  handleThemeClick,
  handleLogoClick,
  handleBurgerClick,
} from './handlers.js';

const { en } = data;

const $root = document.querySelector('#root');

$root.insertAdjacentHTML('beforeend', Header(en.header));
$root.insertAdjacentHTML('beforeend', SectionPrimary(en.download));
$root.insertAdjacentHTML('beforeend', SectionPrimary(en.warranty));
$root.insertAdjacentHTML('beforeend', SectionPrimary(en.care));
$root.insertAdjacentHTML('beforeend', SectionSecondary(en.cashback));
$root.insertAdjacentHTML('beforeend', SectionTertiary(en.clients));

const $theme = document.querySelector('#theme');
$theme.addEventListener('click', handleThemeClick);

const $logo = document.querySelector('#logo');
$logo.addEventListener('click', handleLogoClick);

const $burger = document.querySelector('#burger');
$burger.addEventListener('click', handleBurgerClick);
