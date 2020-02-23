import React from 'react';
import Title from './Title';
import uuid from 'uuid';

const Certifications = (props: any) => {
  return (
    <div>
      <Title name="CERTIFICATION.TITLE" />
      {props.data.map((certification: any) => (
        <li
          key={uuid()}
        >{`${certification.name}. ${certification.institution}`}</li>
      ))}
    </div>
  );
};

export default Certifications;
