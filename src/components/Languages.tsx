import React from 'react';
import Table from 'react-bootstrap/Table';
import Title from './Title';
import { FormattedMessage } from 'react-intl';
import uuid from 'uuid';

const Languages = (props: any) => {
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
          {props.data.map((language: any) => (
            <tr key={uuid()}>
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
