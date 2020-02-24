import React from 'react';
import Title from './Title';

interface CertificationType {
  name: string;
  institution: string;
}

interface CertificationListType {
  data: Array<CertificationType>;
}

const Certifications = (props: CertificationListType) => {
  return (
    <div>
      <Title name="CERTIFICATION.TITLE" />
      <ul>
        {props.data.map((certification, index) => (
          <li
            key={`certification-${index}`}
          >{`${certification.name}. ${certification.institution}`}</li>
        ))}
      </ul>
    </div>
  );
};

export default Certifications;
