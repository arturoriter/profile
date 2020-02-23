import React from 'react';
import Title from './Title';
import styled from 'styled-components';
import uuid from 'uuid';

const SmallMarginBottom = styled.div`
  margin-bottom: 0.5em;
`;

const Education = (props: any) => {
  return (
    <div id="education">
      <Title name="EDUCATION.TITLE" />
      {props.data.map((education: any) => (
        <SmallMarginBottom key={uuid()}>
          {`${education.course}; ${education.institution}, ${education.degree}. ${education.startDate} - ${education.endDate} `}
          <br />
          {`${education.thesisTopic || ''}`}
        </SmallMarginBottom>
      ))}
    </div>
  );
};

export default Education;
