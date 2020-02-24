import React from 'react';
import styled from 'styled-components';
import BootstrapIcon from './BootstrapIcon';

const PageContent = styled.div`
  font-size: 0.8em;
  text-align: center;
`;

export interface ContactType {
  icon: string;
  link: string;
  display: string;
}

export interface ContactListType {
  data: Array<ContactType>;
}

const Contacts = (props: ContactListType) => {
  return (
    <PageContent id="contacts">
      {props.data.map((contact, index) => (
        <div key={`contact-${index}`}>
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
    </PageContent>
  );
};

export default Contacts;
