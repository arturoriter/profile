import React from 'react';

import Languages from './Languages';
import renderWithReactIntl from '../utils/renderWithReactIntl';

test('renders Languages component', () => {
  const { getByText } = renderWithReactIntl(
    <Languages
      data={[
        {
          name: 'name',
          proficiency: 'proficiency',
        },
      ]}
    />
  );
  expect(getByText(/Language Skills/i)).toBeInTheDocument();
  expect(getByText(/name/i)).toBeInTheDocument();
  expect(getByText(/proficiency/i)).toBeInTheDocument();
});
