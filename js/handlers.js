import { data } from './data/data.js';
import { SectionTertiary } from './components/widgets/SectionTertiary/SectionTertiary.js';
import { IconSun } from './components/features/Theme/ui/IconSun.js';
import { IconMoon } from './components/features/Theme/ui/IconMoon.js';

/**
 * @function handleThemeClick
 * @param {Event} event
 */

export const handlerThemeClick = (event) => {
  const { currentTarget } = event;
  const { theme } = currentTarget.dataset;
  const $root = document.getElementById('root');
  const $header = document.getElementById('header');
  const { brands } = data.en.clients;

  const $brands = [...document.querySelectorAll('img[data-type="brand"]')];

  const $buttonOrder = document.getElementById('button-order');

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
