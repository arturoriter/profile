import React from 'react';
import styled from 'styled-components';

const TitleContainer = styled.div`
  margin-top: 1.5em;
  margin-bottom: 1em;
`;

const Label = styled.div`
  background-color: #b1d6dc;
  padding-top: 0.2em;
  padding-bottom: 0.2em;
  text-align: center;
  font-size: 1.2em;
  text-transform: uppercase;
  font-family: 'Lato-Medium', serif;
`;

export interface TitleType {
  name: string;
}

const Title = (props: TitleType) => {
  return (
    <TitleContainer>
      <Label>{props.name}</Label>
    </TitleContainer>
  );
};

export default Title;
