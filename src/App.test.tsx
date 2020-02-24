import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { IntlProvider } from 'react-intl';
import { getMessages } from './utils/getMessages';

test('renders App component', () => {
  const { getByText } = render(
    <IntlProvider locale="en" messages={getMessages('en')}>
      <App />
    </IntlProvider>
  );
  expect(getByText(/Arturo Riter/i)).toBeInTheDocument();
  expect(getByText(/Work Experience/i)).toBeInTheDocument();
  expect(getByText(/Education/i)).toBeInTheDocument();
  expect(getByText(/Certifications/i)).toBeInTheDocument();
  expect(getByText(/Language Skills/i)).toBeInTheDocument();
});
