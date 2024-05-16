import { render } from '@testing-library/react';
import About from './About';

test('displays information about the user and skills', () => {
  const { getByText } = render(<About />);
  const userInfo = getByText(/vim About_Anton_Belia/i);

  expect(userInfo).toBeInTheDocument();
  setTimeout(() => {
    const skillsInfo = getByText(/Typescript, JavaScript/i);
    expect(skillsInfo).toBeInTheDocument();
  }, 8000);
});