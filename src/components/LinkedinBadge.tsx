import React from 'react';
import styled from 'styled-components';
import { useTheme } from '../ThemeManager';

const StyledDiv = styled.div`
  margin-top: 1em;
  margin-bottom: 1.5em;
`;

interface LinkedinBadgeType {
  profileName: string;
}

const LinkedinBadge = ({ profileName }: LinkedinBadgeType) => {
  const theme = useTheme();

  return (
    <StyledDiv
      className={theme.mode.linkedinBadge}
      data-version="v1"
      data-size="small"
      data-locale="en_US"
      data-type="horizontal"
      data-vanity="arturoriter"
    />
  );
};

export default LinkedinBadge;
