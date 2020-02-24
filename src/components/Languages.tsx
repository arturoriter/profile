import React from 'react';
import Table from 'react-bootstrap/Table';
import Title from './Title';
import { FormattedMessage } from 'react-intl';

interface LanguageType {
  name: string;
  proficiency: string;
}
interface LanguageListType {
  data: Array<LanguageType>;
}

const Languages = (props: LanguageListType) => {
  return (
    <div id="languages">
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
          {props.data.map((language, index) => (
            <tr key={`language-${index}`}>
              <td>{language.name}</td>
              <td>{language.proficiency}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Languages;
