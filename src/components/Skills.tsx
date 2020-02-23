import React from 'react';
import Title from './Title';
import Row from 'react-bootstrap/Row';
import { Col } from 'react-bootstrap';
import uuid from 'uuid';

const Skills = (props: any) => {
  return (
    <div id="skills">
      <Title name="SKILLS.TITLE" />
      <Row>
        <Col>
          {props.data.map((skill: any) => (
            <li key={uuid()}>{`${skill.name}: ${skill.description}`}</li>
          ))}
        </Col>
      </Row>
    </div>
  );
};

export default Skills;
