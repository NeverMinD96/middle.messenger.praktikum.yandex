import { Back } from './Back';
// @ts-ignore
import backSvg from '/public/icons/back-arrow.svg';

const BackComponent = new Back({
  backLink: '/',
  backSvg: backSvg,
});

export default BackComponent;
