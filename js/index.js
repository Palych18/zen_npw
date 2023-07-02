import { data } from './data/data.js';
import { SectionPrimary } from './components/widgets/index.js';

const {download, warranty, care, cashback} = data.en;

const $root = document.querySelector('#root');

$root.insertAdjacentHTML('beforeend', SectionPrimary(download));
$root.insertAdjacentHTML('beforeend', SectionPrimary(warranty));
$root.insertAdjacentHTML('beforeend', SectionPrimary(care));
$root.insertAdjacentHTML('beforeend', SectionPrimary(cashback));
