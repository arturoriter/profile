import React from 'react';
import Face from '../img/Face.png';
import styled from 'styled-components';

const FaceImage = styled.img`
  width: 80px;
`;

const Contacts = () => {
  return (
    <div>
      <div style={{ textAlign: 'center' }}>
        <FaceImage src={Face} />
      </div>
      <div style={{ textAlign: 'center' }}>
        <span className="fa fa-linkedin" />
        &nbsp;
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://linkedin.com/in/arturoriter?trk=profile-badge"
        >
          linkedin.com/in/arturoriter
        </a>
      </div>
      <div style={{ textAlign: 'center' }}>
        <span className="fa fa-envelope" />
        &nbsp;
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
