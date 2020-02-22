import React from 'react';
import styled from 'styled-components';
import {
  HeaderType,
  DescriptionType,
  TechStackType,
} from './types/WorkExperienceTypes';
import Title from './Title';
import uuid from 'uuid';
import BootstrapIcon from './BootstrapIcon';
import { Row, Col } from 'react-bootstrap';

const SmallMarginBottom = styled.div`
  margin-bottom: 0.5em;
`;

const RegularMarginBottom = styled.div`
  margin-bottom: 1em;
`;

const Header = (props: HeaderType) => {
  return (
    <SmallMarginBottom>
      <div className="font-weight-bold text-uppercase">{props.jobTitle}</div>
      <Row noGutters>
        <Col md="6" xs="12">
          <a href={props.companyLink} target="_blank" rel="noopener noreferrer">
            <b>{props.companyName}</b>
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
      {props.bulletPoints.map(value => (
        <li key={uuid()}>{value}</li>
      ))}
    </SmallMarginBottom>
  );
};

const TechStack = (props: TechStackType) => {
  return (
    <RegularMarginBottom>
      <i>{`Tech Stack/Tools: ${props.description}`}</i>
    </RegularMarginBottom>
  );
};

const WorkExperience = () => {
  return (
    <div id="experiences">
      <Title name="Work Experience" />

      <Header
        jobTitle="LEAD SOFTWARE ENGINEER"
        companyName="ELEMENT Insurance AG"
        companyLink="https://www.element.in/en"
        location="Berlin, Germany"
        duration="Apr 2017 - Present"
      />
      <Description
        companyInfo="Element is the leading white-label product factory for insurance and a leader in insurance digitalization. It offers a unique technology platform (‘Insurance as a Platform’) with a focus on the B2B2X value chain."
        bulletPoints={[
          'Led software engineers, working on all aspects of the team leader role from recruiting and mentoring to agile advocate and quality assurance throughout promoting good practices and strategies',
          'Built,architected, developed and maintained many services and company tools like CI/CD pipeline, infrastructure modules, microservices and system tests, smoke tests and contract pact tests solutions',
          'Integrated with Stripe, creating a robust payments solution handling recurring charges, refunds, disputes, dunning, and payment accounting in an event-driven architecture',
          'Reduced partner onboarding time from a complex, error-prone, time consuming and manual work process to a totally automated and safe process',
          'Applied NoOps principles through automated deployment and infrastructure-as-a-code as part of the software lifecycle to assure quality and resilience in the cloud',
        ]}
      />
      <TechStack description="AWS (EC2, Elastic Beanstalk, Fargate, Lambda, SNS, SQS, RDS, DynamoDB, ElasticCache, ECR, Cognito, API Gateway, Secret Manager, Cloudwatch, X-Ray, S3, Glacier), Jenkins, Docker, Terraform, Java, Groovy, Spring Boot, Rest, Gradle, Spock, Geb, Pact, React, Typescript, Stripe, Scrum" />

      <Header
        jobTitle="SENIOR JAVA CONSULTANT AND TECHNICAL LEADER"
        companyName="SLIB information Technology and services"
        companyLink="https://www.slib.com"
        location="Lisbon, Portugal"
        duration="Oct 2014 - Apr 2017"
      />
      <Description
        companyInfo="SLIB, a subsidiary of BNP Paribas and Natixis, is both a software publisher in the field of finance and a provider of application managed services."
        bulletPoints={[
          'Led engineer team in a distributed scrum team, designed and developed tools used by brokers to manage/administer financial assets (such as bonds, stocks) with a focus on reactive principles',
        ]}
      />
      <TechStack description="Java 8, Akka, JAX-B, JMS, Maven, Mockito, JUnit, Cucumber, MyBatis, Derby DB, PostgreSQL, Wildfly, Jenkins, XL-Deploy, Scrum" />

      <Header
        jobTitle="SENIOR JAVA CONSULTANT"
        companyName="Indra Company"
        companyLink="https://www.indracompany.com/en"
        location="Lisbon, Portugal"
        duration="Jun 2014 - Sep 2014"
      />
      <Description
        companyInfo="Indra is a world-leader in providing proprietary solutions in specific segments in Transport and Defence markets, and the leading firm in Digital Transformation Consultancy and Information Technologies in Spain and Latin America"
        bulletPoints={[
          'Short fixed-term consulting on migration and application development of a large book publishing company',
        ]}
      />
      <TechStack description="Java 7, JBoss 5, Wildfly, Maven, Ant, Spring, EJB, JAX-WS, JMS, JUnit, Scrum" />

      <Header
        jobTitle="SENIOR SOFTWARE DEVELOPER"
        companyName="Automatic Data Processing, Inc (ADP)"
        companyLink="https://www.adp.com"
        location="Porto Alegre, Brazil"
        duration="Jan 2013 - Apr 2014"
      />
      <Description
        companyInfo="ADP is an American provider of human resources management software and services. It is the largest provider of HR services in North America, Europe, Latin America and the Pacific Rim."
        bulletPoints={[
          'Developed and maintained product versions of the ADP Portal in a geographically distributed team with agile methodologies; Provided technical support, researched work, log analysis, code analysis, database analysis and troubleshooting on a high-availability, large-scale web system',
        ]}
      />
      <TechStack description="Java, Tomcat, Wildly, Oracle, Maven, Linux, Scrum" />

      <Header
        jobTitle="SOFTWARE ARCHITECT"
        companyName="Ci&T Business Agility"
        companyLink="https://us.ciandt.com/"
        location="São Paulo, Brazil"
        duration="Mar 2011 - Dec 2012"
      />
      <Description
        companyInfo="CI&T is a nearshore information technology and software engineering company. It operates globally and specializes in business-agile enterprise methods for systems integration and software development."
        bulletPoints={[
          'Provided technical leadership, designed architecture, defined non-functional requirements, developed solutions and technical components, defined database modelling; developed web applications using agile methodology and lean approach',
        ]}
      />
      <TechStack description="JSF, Richfaces, CSS, Ajax, Web Services, Spring, Hibernate, WebLogic Application Server, Oracle database, JUnit, JMeter, Jenkins, Scrum" />

      <Header
        jobTitle="SENIOR DEVELOPER"
        companyName="Motorola Mobility"
        companyLink="https://www.motorola.com"
        location="São Paulo, Brazil"
        duration="Mar 2010 - Feb 2011"
      />
      <Description
        companyInfo="Motorola Mobility is a consumer electronics and telecommunications company owned by Lenovo. Primarily manufactures smartphones and other mobile devices running the Android operating system."
        bulletPoints={[
          '1-year fixed-term consultancy focused mainly in process and application optimization, tuning Oracle queries; developed production control systems for radio / telephone manufacturing and provided specialized support for production applications',
        ]}
      />
      <TechStack description="Oracle, TCL/TK, Perl, PL/SQL, JavaScript" />

      <Header
        jobTitle="JAVA DEVELOPER"
        companyName="Foundation for Technological Innovation (FITec)"
        companyLink="www.fitec.org.br/en"
        location="São Paulo, Brazil"
        duration="Nov 2008 - Mar 2010"
      />
      <Description
        companyInfo="FITec is a not-for-profit private foundation, accredited by the Science and Technology Ministry and Information Technology Area Committee to executes projects and activities of research and development on Communications and Information Technology areas."
        bulletPoints={[
          'Developed low-level Java applications to run on Linux environment; developed dashboard web application in a small scrum team',
        ]}
      />
      <TechStack description="Oracle and MySQL database, Tomcat, JSF, Hibernate, JavaScript, Scrum" />

      <Header
        jobTitle="JAVA WEB DEVELOPER AND TECHNICAL LEADER"
        companyName="Telecommunications Research and Develop Center (CPqD)"
        companyLink="https://www.cpqd.com.br/en"
        location="São Paulo, Brazil"
        duration="Nov 2007 - Nov 2008"
      />
      <Description
        companyInfo="CPqD is one of the largest research and development centers in Latin America. Focused on innovation in information and communication technologies."
        bulletPoints={[
          'Developed web applications and internal tools and provided technical leadership',
        ]}
      />
      <TechStack description="WSAD, Oracle and Informix databases, JBoss and WebSphere application servers, Struts, JSF, EJB, Hibernate, Tiles, Validator, Javascript, CSS, Ajax, Web Services, Servlet" />

      <Header
        jobTitle="SOFTWARE DEVELOPER"
        companyName="Indra Company"
        companyLink="https://www.indracompany.com/en"
        location="São Paulo, Brazil"
        duration="Sep 2005 - Oct 2007"
      />
      <Description
        companyInfo="Indra is a world-leader in providing proprietary solutions in specific segments in Transport and Defence markets, and the leading firm in Digital Transformation Consultancy and Information Technologies in Spain and Latin America."
        bulletPoints={[
          'Developed desktop applications, defined non-functional requirements and technical specification; Provided specialized 24 hours technical support',
        ]}
      />
      <TechStack description="Java, Delphi, PL/SQL, Oracle database" />

      <Header
        jobTitle="SOFTWARE DEVELOPER"
        companyName="Padtec Optical Components and Systems"
        companyLink="https://www.padtec.com.br/en"
        location="São Paulo, Brazil"
        duration="Jan 2002 - Sep 2005"
      />
      <Description
        companyInfo="Padtec is the largest manufacturer of optical transport systems in Latin America. It offers advanced, high capacity and flexible optical transport solutions based on DWDM technology."
        bulletPoints={[
          'Developed desktop tools for network remote operation and management of optical systems used by large companies like service providers, banks and telecommunications companies; Developed low-level applications to run on micro hardware devices; Provided specialized technical support to customers; ministered Linux, MySQL and internal tools courses for Latin American customers',
        ]}
      />
      <TechStack description="Linux, Kylix, Delphi, Java, SWF, MySQL database" />
    </div>
  );
};

export default WorkExperience;
