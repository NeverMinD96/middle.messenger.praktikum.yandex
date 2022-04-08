import ErrorPageContainer from '../../components/ErrorPageContainer';
import renderDOM from '../../utils/RenderDOM';

document.addEventListener('DOMContentLoaded', () => {
  const entryPoint = document.createElement('main');
  entryPoint.id = 'page-404';

  const errorPage = new ErrorPageContainer({
    text: 'Got it wrong',
    backLink: '/',
    errorNumber: '404',
  });

  renderDOM('#error-404', errorPage);
});
