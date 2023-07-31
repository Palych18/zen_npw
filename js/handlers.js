import { Sun } from './components/features/Theme/ui/Sun.js';
import { Moon } from './components/features/Theme/ui/Moon.js';

/**
 * @function handleThemeClick
 * @param {Event} event
 */

export const handlerThemeClick = (event) => {
  const { currentTarget } = event;

  const { dataset: {theme} } = currentTarget;

  if (theme === 'light') {
    currentTarget.dataset.theme = 'dark';
    currentTarget.innerHTML = Sun();
  } 
  if (theme === 'dark') {
    currentTarget.dataset.theme = 'light';
    currentTarget.innerHTML = Moon();
  }
};
