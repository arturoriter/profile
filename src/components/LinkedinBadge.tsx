import React from 'react';
import styled from 'styled-components';

const PageMargin = styled.div`
  margin-top: 2em;
`;

interface LinkedinBadgeType {
  background: string;
  profileName: string;
}

const LinkedinBadge = (props: LinkedinBadgeType) => {
  return (
    <PageMargin
      className="LI-profile-badge"
      data-version="v1"
      data-size="small"
      data-locale="en_US"
      data-type="horizontal"
      data-theme={props.background || 'dark'}
      data-vanity={props.profileName}
    />
  );
};

export default LinkedinBadge;
