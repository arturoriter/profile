import React from 'react';
import Title from './Title';

interface CertificationType {
  name: string;
  institution: string;
}

interface CertificationListType {
  data: Array<CertificationType>;
}

const Certifications = ({ data }: CertificationListType) => {
  return (
    <div id="certifications">
      <Title name="CERTIFICATION.TITLE" />
      <ul>
        {data.map((certification, index) => (
          <li
            key={`certification-${index}`}
          >{`${certification.name}. ${certification.institution}`}</li>
        ))}
      </ul>
    </div>
  );
};

export default Certifications;
