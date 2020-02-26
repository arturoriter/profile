import React from 'react';
import styled from 'styled-components';

const StyledSpan = styled.span`
  padding-right: 0.2em;
  padding-left: 0.2em;
`;

interface IconType {
  name: string;
}

const BootstrapIcon = ({ name }: IconType) => {
  return <StyledSpan className={`fa fa-${name}`} />;
};

export default BootstrapIcon;
