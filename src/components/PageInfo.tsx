import React from 'react';
import Title from './Title';
import styled from 'styled-components';
import LinkedinBadge from './LinkedinBadge';

const PageContent = styled.div`
  margin-bottom: 2em;
`;

const PageInfo = () => {
  return (
    <PageContent>
      <Title name="Page Info" />
      This profile has been developed using the following:
      <div className="row">
        <div className="col-12 col-sm-6">
          <li>React</li>
          <li>Typescript</li>
        </div>
        <div className="col-12 col-sm-6">
          <li>Bootstrap</li>
          <li>Styled-components</li>
        </div>
      </div>
      <LinkedinBadge bg="light" />
    </PageContent>
  );
};

export default PageInfo;
