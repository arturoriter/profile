import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

const PageContainer = styled.div`
  background-color: #b1d6dc;
  padding-top: 0.2em;
  padding-bottom: 0.2em;
  margin-top: 0.5em;
  margin-bottom: 1em;
  text-align: center;
  font-size: 1.1em;
  text-transform: uppercase;
  font-family: 'Lato-Medium', 'Arial', 'Helvetica', sans-serif;
`;

interface TitleType {
  name: string;
}

const Title = ({ name }: TitleType) => {
  return (
    <PageContainer>
      <FormattedMessage id={name} />
    </PageContainer>
  );
};

export default Title;
