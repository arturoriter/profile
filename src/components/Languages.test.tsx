import React from 'react';
import { render } from '@testing-library/react';
import Languages from './Languages';
import { IntlProvider } from 'react-intl';
import { getMessages } from '../utils/getMessages';

test('renders Languages component', () => {
  const { getByText } = render(
    <IntlProvider locale="en" messages={getMessages('en')}>
      <Languages
        data={[
          {
            name: 'name',
            proficiency: 'proficiency',
          },
        ]}
      />
    </IntlProvider>
  );
  expect(getByText(/Language Skills/i)).toBeInTheDocument();
  expect(getByText(/name/i)).toBeInTheDocument();
  expect(getByText(/proficiency/i)).toBeInTheDocument();
});
