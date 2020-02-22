import React from 'react';
import styled from 'styled-components';

const PageMargin = styled.div`
  margin-top: 2em;
`;

const LinkedinBadge = (props: any) => {
  return (
    <PageMargin
      className="LI-profile-badge"
      data-version="v1"
      data-size="small"
      data-locale="en_US"
      data-type="horizontal"
      data-theme={props.bg || 'dark'}
      data-vanity="arturoriter"
    />
  );
};

export default LinkedinBadge;
