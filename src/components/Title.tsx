import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';

const StyledH1 = styled.h1`
  color: ${props => props.theme.h1.textColor};
  background-color: ${props => props.theme.h1.backgroundColor};
  font-family: ${props => props.theme.h1.fontFamily};
  font-size: 1.1em;
  text-transform: uppercase;
  text-align: center;
  padding-top: 0.2em;
  padding-bottom: 0.2em;
  margin-top: 0.5em;
  margin-bottom: 1em;
`;

interface TitleType {
  name: string;
}

const Title = ({ name }: TitleType) => {
  return (
    <>
      <StyledH1>
        <FormattedMessage id={name} />
      </StyledH1>
    </>
  );
};

export default Title;
