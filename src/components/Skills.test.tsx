import React from 'react';
import Skills from './Skills';
import renderWithReactIntl from '../utils/renderWithReactIntl';

test('renders Skills component', () => {
  const { getByText } = renderWithReactIntl(
    <Skills
      data={[
        {
          name: 'name',
          description: 'description',
        },
      ]}
    />
  );
  expect(getByText(/Skills/i)).toBeInTheDocument();
  expect(getByText(/name: description/i)).toBeInTheDocument();
});
