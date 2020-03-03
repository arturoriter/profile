import React from 'react';
import styled from 'styled-components';
import { DarkTheme } from '../data/DarkTheme';
import { useTheme } from '../ThemeManager';
import { FormattedMessage } from 'react-intl';

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

  :hover,
  :visited,
  :link,
  :active {
    color: ${props => props.theme.button.textColor};
    text-decoration: none;
  }
`;

const ThemeButton = () => {
  const theme = useTheme();

  return (
    <StyledLink id="themeBtn" href="#" onClick={() => theme.toggle()}>
      {theme.mode === DarkTheme ? (
        <FormattedMessage id="THEME.LIGHT_MODE" />
      ) : (
        <FormattedMessage id="THEME.DARK_MODE" />
      )}
    </StyledLink>
  );
};

export default ThemeButton;
