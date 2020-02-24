import React from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  margin-top: 1em;
  margin-bottom: 1.5em;
`;

interface LinkedinBadgeType {
  background: string;
  profileName: string;
}

const LinkedinBadge = (props: LinkedinBadgeType) => {
  return (
    <PageContainer
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
