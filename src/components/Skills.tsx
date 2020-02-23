import React from 'react';
import Title from './Title';
import uuid from 'uuid';

const Skills = (props: any) => {
  return (
    <div id="skills">
      <Title name="SKILLS.TITLE" />
      <ul>
        {props.data.map((skill: any) => (
          <li key={uuid()}>{`${skill.name}: ${skill.description}`}</li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
