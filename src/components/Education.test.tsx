import React from 'react';
import { render } from '@testing-library/react';
import Education from './Education';
import { IntlProvider } from 'react-intl';
import { getMessages } from '../utils/getMessages';

test('renders Education component', () => {
  const { getByText } = render(
    <IntlProvider locale="en" messages={getMessages('en')}>
      <Education
        data={[
          {
            course: 'course',
            institution: 'institution',
            degree: 'degree',
            startDate: 2000,
            endDate: 2001,
          },
        ]}
      />
    </IntlProvider>
  );
  expect(
    getByText(/course; institution, degree. 2000 - 2001/i)
  ).toBeInTheDocument();
});
