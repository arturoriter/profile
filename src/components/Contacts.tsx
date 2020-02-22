import React from 'react';
import Face from '../img/Face.png';
import styled from 'styled-components';
import BootstrapIcon from './BootstrapIcon';

const FaceImage = styled.img`
  width: 80px;
`;

const Contacts = () => {
  return (
    <div id="contacts" className="text-center">
      <FaceImage src={Face} />
      <div>
        <BootstrapIcon name="linkedin" />
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://linkedin.com/in/arturoriter?trk=profile-badge"
        >
          linkedin.com/in/arturoriter
        </a>
      </div>
      <div>
        <BootstrapIcon name="envelope" />
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="mailto:arturo.riter@gmail.com"
        >
          arturo.riter@gmail.com
        </a>
      </div>
    </div>
  );
};

export default Contacts;
