import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  margin-top: 1em;
  margin-bottom: 1.5em;
`;

interface LinkedinBadgeType {
  background: string;
  profileName: string;
}

const LinkedinBadge = ({ background, profileName }: LinkedinBadgeType) => {
  return (
    <StyledDiv
      className="LI-profile-badge"
      data-version="v1"
      data-size="small"
      data-locale="en_US"
      data-type="horizontal"
      data-theme={background || 'dark'}
      data-vanity={profileName}
    />
  );
};

export default LinkedinBadge;
