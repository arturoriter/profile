import React from 'react';

import Title from './Title';

interface SkillType {
  name: string;
  description: string;
}

interface SkillListType {
  data: Array<SkillType>;
}

const Skills = ({ data }: SkillListType) => {
  return (
    <div id="skills">
      <Title name="SKILLS.TITLE" />
      <ul>
        {data.map((skill, index) => (
          <li
            key={`skill-${index}`}
          >{`${skill.name}: ${skill.description}`}</li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
