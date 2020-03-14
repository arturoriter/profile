import React from 'react';

import WorkExperience from './WorkExperience';
import renderWithReactIntl from '../utils/renderWithReactIntl';

test('renders WorkExperience component', () => {
  const { getByText } = renderWithReactIntl(
    <WorkExperience
      data={[
        {
          jobTitle: 'job title',
          company: {
            name: 'company name',
            link: 'company link',
            location: 'company location',
            info: 'company info',
          },
          startDate: 'start date',
          endDate: 'end date',
          description: ['description1', 'description2'],
          teckStack: 'teck stack',
        },
      ]}
    />
  );
  expect(getByText(/Work Experience/i)).toBeInTheDocument();
  expect(getByText(/job title/i)).toBeInTheDocument();
  expect(getByText(/company name/i)).toBeInTheDocument();
  expect(getByText(/company location/i)).toBeInTheDocument();
  expect(getByText(/start date - end date/i)).toBeInTheDocument();
  expect(getByText(/company info/i)).toBeInTheDocument();
  expect(getByText(/description1/i)).toBeInTheDocument();
  expect(getByText(/description2/i)).toBeInTheDocument();
  expect(getByText(/Tech Stack: teck stack/i)).toBeInTheDocument();
});
