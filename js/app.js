import { data } from './data/data.js';
import { Header, SectionPrimary, SectionSecondary, SectionTertiary } from './components/widgets/index.js';
import { handlerThemeClick } from './handlers.js';

const { header, download, warranty, care, cashback, clients } = data.en;

const $root = document.querySelector('#root');

$root.insertAdjacentHTML('beforeend', Header(header));
$root.insertAdjacentHTML('beforeend', SectionPrimary(download));
$root.insertAdjacentHTML('beforeend', SectionPrimary(warranty));
$root.insertAdjacentHTML('beforeend', SectionPrimary(care));
$root.insertAdjacentHTML('beforeend', SectionSecondary(cashback));
$root.insertAdjacentHTML('beforeend', SectionTertiary(clients));

const $theme = document.querySelector('#theme');
$theme.addEventListener('click', handlerThemeClick);
