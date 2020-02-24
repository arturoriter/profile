import React from 'react';
import { render } from '@testing-library/react';
import Certifications from './Certifications';
import { IntlProvider } from 'react-intl';
import { getMessages } from '../utils/getMessages';

test('renders Certification component', () => {
  const { getByText } = render(
    <IntlProvider locale="en" messages={getMessages('en')}>
      <Certifications
        data={[
          {
            name: 'name',
            institution: 'institution',
          },
        ]}
      />
    </IntlProvider>
  );
  expect(getByText(/Certifications \/ Courses/i)).toBeInTheDocument();
  expect(getByText(/name. institution/i)).toBeInTheDocument();
});
