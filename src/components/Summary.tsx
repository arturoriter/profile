import React from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  margin-bottom: 1em;
`;

interface SummaryType {
  data: string;
}

const Summary = ({ data }: SummaryType) => {
  return <PageContainer id="summary">{data}</PageContainer>;
};

export default Summary;
