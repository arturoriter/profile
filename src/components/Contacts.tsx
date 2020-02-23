import React from 'react';
import Face from '../img/Face.png';
import styled from 'styled-components';
import BootstrapIcon from './BootstrapIcon';
import uuid from 'uuid';

const FaceImage = styled.img`
  width: 80px;
`;

const Contacts = (props: any) => {
  return (
    <div id="contacts" className="text-center">
      <FaceImage src={Face} alt="" />
      {props.data.map((contact: any) => (
        <div key={uuid()}>
          <BootstrapIcon name={contact.icon} />
          <a
            className="text-dark font-weight-bold"
            target="_blank"
            rel="noopener noreferrer"
            href={contact.link}
          >
            {contact.display}
          </a>
        </div>
      ))}
    </div>
  );
};

export default Contacts;
