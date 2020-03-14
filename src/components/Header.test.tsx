import React from 'react';

import Header from './Header';
import renderWithReactIntl from '../utils/renderWithReactIntl';

test('renders Header component', () => {
  const { getByText } = renderWithReactIntl(
    <Header
      data={{
        name: 'name',
        headline: 'headline',
        contacts: [
          {
            icon: 'icon',
            link: 'link',
            display: 'display',
          },
        ],
      }}
    />
  );
  expect(getByText(/name/i)).toBeInTheDocument();
  expect(getByText(/headline/i)).toBeInTheDocument();
});
