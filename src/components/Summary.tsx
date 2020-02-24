import React from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  margin-bottom: 1em;
`;

interface SummaryType {
  data: string;
}

const Summary = (props: SummaryType) => {
  return <PageContainer id="summary">{props.data}</PageContainer>;
};

export default Summary;
