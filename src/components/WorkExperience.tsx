import React from 'react';
import styled from 'styled-components';
import Title from './Title';
import BootstrapIcon from './BootstrapIcon';
import { Container, Row, Col } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';

const SmallMarginBottom = styled.div`
  margin-bottom: 0.5em;
`;

const RegularMarginBottom = styled.div`
  margin-bottom: 1em;
`;

const StyledLink = styled.a`
  color: ${props => props.theme.page.textColor};
  font-weight: bold;

  :hover,
  :visited,
  :link,
  :active {
    color: ${props => props.theme.page.textColor};
  }
`;

const JobTitle = styled.div`
  font-weight: bold;
  text-transform: uppercase;
`;

const ColumnTextAlign = styled.div`
  text-align: right;

  @media (max-width: 767px) {
    text-align: left;
  }
`;

interface HeaderType {
  jobTitle: string;
  companyLink: string;
  companyName: string;
  location: string;
  duration: string;
}

interface DescriptionType {
  experienceIndex: number;
  companyInfo: string;
  description: Array<string>;
}

interface TechStackType {
  description: string;
}

interface WorkExperienceType {
  jobTitle: string;
  company: {
    name: string;
    link: string;
    location: string;
    info: string;
  };
  startDate: string;
  endDate: string;
  description: Array<string>;
  teckStack: string;
}

interface WorkExperienceListType {
  data: Array<WorkExperienceType>;
}
const Header = (props: HeaderType) => {
  const { jobTitle, companyLink, companyName, location, duration } = {
    ...props,
  };
  return (
    <>
      <JobTitle>{jobTitle}</JobTitle>
      <Container fluid style={{ padding: '0' }}>
        <Row>
          <Col xs="12" sm="12" md="5" lg="5" xl="5">
            <StyledLink
              href={companyLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              {companyName}
            </StyledLink>
          </Col>
          <Col xs="12" sm="12" md="7" lg="7" xl="7">
            <ColumnTextAlign>
              <BootstrapIcon name="globe" />
              <span style={{ marginRight: '1em' }}>{location}</span>
              <BootstrapIcon name="calendar" />
              {duration}
            </ColumnTextAlign>
          </Col>
        </Row>
      </Container>
    </>
  );
};

const Description = (props: DescriptionType) => {
  const { companyInfo, description, experienceIndex } = { ...props };
  return (
    <SmallMarginBottom>
      {companyInfo}
      <ul style={{ margin: 0 }}>
        {description.map((value, index) => (
          <li key={`desc-${experienceIndex}.${index}`}>{value} </li>
        ))}
      </ul>
    </SmallMarginBottom>
  );
};

const TechStack = (props: TechStackType) => {
  const { description } = { ...props };
  return (
    <RegularMarginBottom className="font-italic">
      <FormattedMessage id="WORK_EXPERIENCE.TECH_STACK" />
      {`: ${description}`}
    </RegularMarginBottom>
  );
};

const WorkExperience = ({ data }: WorkExperienceListType) => {
  return (
    <div id="experiences">
      <Title name="WORK_EXPERIENCE.TITLE" />

      {data.map((experience, index) => (
        <div key={`experience-${index}`} className="content-block">
          <Header
            jobTitle={experience.jobTitle}
            companyName={experience.company.name}
            companyLink={experience.company.link}
            location={experience.company.location}
            duration={`${experience.startDate} - ${experience.endDate}`}
          />
          <Description
            experienceIndex={index}
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
