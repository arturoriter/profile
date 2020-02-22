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
            <th>#</th>
            <th>Language</th>
            <th>Level</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Portuguese</td>
            <td>Native proficiency</td>
          </tr>
          <tr>
            <td>2</td>
            <td>English</td>
            <td>Fluent proficiency</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Spanish</td>
            <td>Limited working proficiency</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Languages;
