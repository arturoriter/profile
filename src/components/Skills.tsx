import React from 'react';
import Title from './Title';

const Skills = () => {
  return (
    <div id="skills">
      <Title name="Skills" />
      <div className="row">
        <div className="col-12 col-sm-6">
          <li>Languages: Java, Groovy</li>
          <li>Cloud Computing: AWS</li>
          <li>Architecture: Event-Driven, Microservices, REST</li>
          <li>
            Backend: Spring Boot, Spring Cloud, JPA, jOOQ, Flyway, Netflix Zuul
          </li>
          <li>Ops tools: Terraform, Docker, Jenkins</li>
          <li>Build automation tools: Maven, Gradle, Yarn</li>
        </div>
        <div className="col-12 col-sm-6">
          <li>
            Frontend (beginner): React, Typescript, Styled Components, Jest,
            Webpack, Babel
          </li>
          <li>
            Testing frameworks: Spock, Geb, JUnit, Cucumber, Mockito, Wiremock,
            Pact
          </li>
          <li>Agile: Scrum, XP, Lean, Kaizen</li>
          <li>Code Quality: SonarQube, lint, OWASP</li>
        </div>
      </div>
    </div>
  );
};

export default Skills;
