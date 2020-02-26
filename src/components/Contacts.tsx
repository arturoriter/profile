import React from 'react';
import styled from 'styled-components';
import BootstrapIcon from './BootstrapIcon';

const StyledDiv = styled.div`
  font-size: 0.8em;
  text-align: center;
`;

const StyledLink = styled.a`
  color: ${props => props.theme.header.textColor};
  font-weight: bold;

  :hover {
    color: ${props => props.theme.header.textColor};
  }
`;

export interface ContactType {
  icon: string;
  link: string;
  display: string;
}

export interface ContactListType {
  data: Array<ContactType>;
}

const Contacts = ({ data }: ContactListType) => {
  return (
    <StyledDiv id="contacts">
      {data.map((contact, index) => (
        <div key={`contact-${index}`}>
          <BootstrapIcon name={contact.icon} />
          <StyledLink
            target="_blank"
            rel="noopener noreferrer"
            href={contact.link}
          >
            {contact.display}
          </StyledLink>
        </div>
      ))}
    </StyledDiv>
  );
};

export default Contacts;
