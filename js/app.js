import { data } from './data/data.js';
import { SectionPrimary, SectionSecondary, SectionTertiary } from './components/widgets/index.js';

const { download, warranty, care, cashback, clients } = data.en;

const $root = document.querySelector('#root');

$root.insertAdjacentHTML('beforeend', SectionPrimary(download));
$root.insertAdjacentHTML('beforeend', SectionPrimary(warranty));
$root.insertAdjacentHTML('beforeend', SectionPrimary(care));
$root.insertAdjacentHTML('beforeend', SectionSecondary(cashback));
$root.insertAdjacentHTML('beforeend', SectionTertiary(clients));
