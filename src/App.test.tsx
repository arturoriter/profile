import React from 'react';
import App from './App';
import renderWithReactIntl from './utils/renderWithReactIntl';

test('renders App component', () => {
  const { getByText } = renderWithReactIntl(<App />);
  expect(getByText(/Work Experience/i)).toBeInTheDocument();
  expect(getByText(/Education/i)).toBeInTheDocument();
  expect(getByText(/Certifications/i)).toBeInTheDocument();
  expect(getByText(/Language Skills/i)).toBeInTheDocument();
});
