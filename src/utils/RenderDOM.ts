import Block from './Block';

export default function renderDOM<T>(
  rootSelector: string,
  component: Block<T>,
) {
  const root = document.querySelector(rootSelector);
  if (!root) {
    throw new Error('Root element not found');
  }

  component.dispatchComponentDidMount();

  root.innerHTML = '';
  root.append(component.getContent() as HTMLElement);
}
