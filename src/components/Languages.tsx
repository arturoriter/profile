import React from 'react';
import Table from 'react-bootstrap/Table';
import Title from './Title';

const Languages = () => {
  return (
    <div id="languages">
      <Title name="Language Skills" />
      <Table striped bordered hover style={{ lineHeight: 0.8 }}>
        <thead>
          <tr>
            <th>Language</th>
            <th>Level</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>English</td>
            <td>Fluent proficiency</td>
          </tr>
          <tr>
            <td>Portuguese</td>
            <td>Native proficiency</td>
          </tr>
          <tr>
            <td>Spanish</td>
            <td>Limited working proficiency</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Languages;
