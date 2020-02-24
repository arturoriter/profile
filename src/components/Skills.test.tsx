import React from 'react';
import { render } from '@testing-library/react';
import Skills from './Skills';
import { IntlProvider } from 'react-intl';
import { getMessages } from '../utils/getMessages';

test('renders Skills component', () => {
  const { getByText } = render(
    <IntlProvider locale="en" messages={getMessages('en')}>
      <Skills
        data={[
          {
            name: 'name',
            description: 'description',
          },
        ]}
      />
    </IntlProvider>
  );
  expect(getByText(/Skills/i)).toBeInTheDocument();
  expect(getByText(/name: description/i)).toBeInTheDocument();
});
