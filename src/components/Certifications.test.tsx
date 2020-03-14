import React from 'react';

import Certifications from './Certifications';
import renderWithReactIntl from '../utils/renderWithReactIntl';

test('renders Certification component', () => {
  const { getByText } = renderWithReactIntl(
    <Certifications
      data={[
        {
          name: 'name',
          institution: 'institution',
        },
      ]}
    />
  );
  expect(getByText(/Certifications \/ Courses/i)).toBeInTheDocument();
  expect(getByText(/name. institution/i)).toBeInTheDocument();
});
