import React from 'react';
import Summary from './Summary';
import renderWithReactIntl from '../utils/renderWithReactIntl';

test('renders Summary component', () => {
  const { getByText } = renderWithReactIntl(<Summary data={'summary'} />);
  expect(getByText(/summary/i)).toBeInTheDocument();
});
