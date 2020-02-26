import React from 'react';
import Contacts from './Contacts';
import renderWithReactIntl from '../utils/renderWithReactIntl';

test('renders Contacts component', () => {
  const { getByText } = renderWithReactIntl(
    <Contacts
      data={[
        {
          icon: 'linkedin',
          link: 'link',
          display: 'display',
        },
      ]}
    />
  );
  expect(getByText(/display/i)).toBeInTheDocument();
});
