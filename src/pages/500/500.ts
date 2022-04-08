import ErrorPageContainer from '../../components/ErrorPageContainer';
import renderDOM from 'src/utils/RenderDOM';

document.addEventListener('DOMContentLoaded', () => {
  const errorPage = new ErrorPageContainer({
    text: 'We are already fixing',
    backLink: '/',
    errorNumber: '500',
  });

  renderDOM('#error-500', errorPage);
});
