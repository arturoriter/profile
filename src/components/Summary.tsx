import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  margin-bottom: 1em;
`;

interface SummaryType {
  data: string;
}

const Summary = ({ data }: SummaryType) => {
  return <StyledDiv id="summary">{data}</StyledDiv>;
};

export default Summary;
