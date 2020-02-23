import React from 'react';
import styled from 'styled-components';
import Title from './Title';
import uuid from 'uuid';
import BootstrapIcon from './BootstrapIcon';
import { Row, Col } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';

const SmallMarginBottom = styled.div`
  margin-bottom: 0.5em;
`;

const RegularMarginBottom = styled.div`
  margin-bottom: 1em;
`;

interface HeaderType {
  jobTitle: string;
  companyLink: string;
  companyName: string;
  location: string;
  duration: string;
}

interface DescriptionType {
  companyInfo: string;
  description: Array<string>;
}

interface TechStackType {
  description: string;
}

const Header = (props: HeaderType) => {
  return (
    <SmallMarginBottom>
      <div className="font-weight-bold text-uppercase">{props.jobTitle}</div>
      <Row noGutters>
        <Col md="6" xs="12">
          <a
            className="font-weight-bold"
            href={props.companyLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            {props.companyName}
          </a>
        </Col>
        <Col md="3" xs="6">
          <BootstrapIcon name="globe" />
          {props.location}
        </Col>
        <Col md="3" xs="6">
          <BootstrapIcon name="calendar" />
          {props.duration}
        </Col>
      </Row>
    </SmallMarginBottom>
  );
};

const Description = (props: DescriptionType) => {
  return (
    <SmallMarginBottom>
      {props.companyInfo}
      {props.description.map(value => (
        <li key={uuid()}>{value} </li>
      ))}
    </SmallMarginBottom>
  );
};

const TechStack = (props: TechStackType) => {
  return (
    <RegularMarginBottom className="font-italic">
      <FormattedMessage id="WORK_EXPERIENCE.TECH_STACK" />
      {`: ${props.description}`}
    </RegularMarginBottom>
  );
};

const WorkExperience = (props: any) => {
  return (
    <div id="experiences">
      <Title name="WORK_EXPERIENCE.TITLE" />

      {props.data.map((experience: any) => (
        <div key={uuid()}>
          <Header
            jobTitle={experience.title}
            companyName={experience.company.name}
            companyLink={experience.company.link}
            location={experience.company.location}
            duration={`${experience.startDate} - ${experience.endDate}`}
          />
          <Description
            companyInfo={experience.company.info}
            description={experience.description}
          />
          <TechStack description={experience.teckStack} />
        </div>
      ))}
    </div>
  );
};

export default WorkExperience;
