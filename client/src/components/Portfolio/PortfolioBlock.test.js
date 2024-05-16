import { render } from '@testing-library/react';
import PortfolioBlock from './PortfolioBlock';

test('PortfolioBlock displays portfolio blocks with correct links', () => {
  const project = {
    img: 'mockup.jpg',
    live: 'https://example.com/demo',
    source: 'https://github.com/example/source',
    title: 'Example Project',
  };

  const { getByText, getByAltText } = render(<PortfolioBlock {...project} />);
  const projectTitle = getByText(/Example Project/i);
  const liveLink = getByText(/Demo/i);
  const sourceLink = getByText(/Source Code/i);
  const projectImage = getByAltText(/mockup/i);

  expect(projectTitle).toBeInTheDocument();
  expect(liveLink).toHaveAttribute('href', 'https://example.com/demo');
  expect(sourceLink).toHaveAttribute('href', 'https://github.com/example/source');
  expect(projectImage).toBeInTheDocument();
});