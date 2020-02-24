import React from 'react';

interface SummaryType {
  data: string;
}

const Summary = (props: SummaryType) => {
  return <div id="summary">{props.data}</div>;
};

export default Summary;
