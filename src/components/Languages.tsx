import React from 'react';
import Table from 'react-bootstrap/Table';
import Title from './Title';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';

const PageContent = styled.div`
  margin-bottom: 1.5em;
`;

interface LanguageType {
  name: string;
  proficiency: string;
}
interface LanguageListType {
  data: Array<LanguageType>;
}

const Languages = ({ data }: LanguageListType) => {
  return (
    <PageContent id="languages">
      <Title name="LANGUAGE.TITLE" />
      <Table striped bordered hover style={{ lineHeight: 0.7 }}>
        <thead>
          <tr>
            <th>
              <FormattedMessage id="LANGUAGE.NAME" />
            </th>
            <th>
              <FormattedMessage id="LANGUAGE.LEVEL" />
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((language, index) => (
            <tr key={`language-${index}`}>
              <td>{language.name}</td>
              <td>{language.proficiency}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </PageContent>
  );
};

export default Languages;
