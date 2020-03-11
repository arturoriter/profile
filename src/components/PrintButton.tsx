import React from 'react';
import styled from 'styled-components';
import BootstrapIcon from './BootstrapIcon';

const StyledLink = styled.a`
  color: ${props => props.theme.button.textColor};
  background-color: ${props => props.theme.button.backgroundColor};
  border-radius: 0.3em;
  font-size: 0.7em;
  padding: 0.2em 0.5em;
  border-top: 1px solid #cccccc;
  border-right: 1px solid #333333;
  border-bottom: 1px solid #333333;
  border-left: 1px solid #cccccc;
  cursor: pointer;

  :hover,
  :visited,
  :link,
  :active {
    color: ${props => props.theme.button.textColor};
    text-decoration: none;
  }
`;

const PrintButton = () => {
  return (
    <StyledLink className="non-printable" id="printBtn" href="#" onClick={() => window.print()}>
      <BootstrapIcon name="print" />
    </StyledLink>
  );
};

export default PrintButton;
