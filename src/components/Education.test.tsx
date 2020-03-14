import React from 'react';

import Education from './Education';
import renderWithReactIntl from '../utils/renderWithReactIntl';

test('renders Education component', () => {
  const { getByText } = renderWithReactIntl(
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
  );
  expect(
    getByText(/course; institution, degree. 2000 - 2001/i)
  ).toBeInTheDocument();
});
