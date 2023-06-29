import { data } from './data/data.js';
import { SectionPrimary } from './components/widgets/SectionPrimary/SectionPrimary.js';

const {download} = data.en;
const {warranty} = data.en;
const {care} = data.en;
const {cashback} = data.en;

const $root = document.querySelector('#root');

$root.insertAdjacentHTML('beforeend', SectionPrimary(download));
$root.insertAdjacentHTML('beforeend', SectionPrimary(warranty));
$root.insertAdjacentHTML('beforeend', SectionPrimary(care));
$root.insertAdjacentHTML('beforeend', SectionPrimary(cashback));
