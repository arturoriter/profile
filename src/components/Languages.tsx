import React from 'react';
import Table from 'react-bootstrap/Table';

const Languages = () => {
  return (
    <div id="languages">
      <h2>Language</h2>
      <Table striped bordered hover>
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
            <td>Full professional proficiency</td>
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
