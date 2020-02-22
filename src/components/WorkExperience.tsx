import React from 'react';
import Title from './Title';
import styled from 'styled-components';

const SmallMarginBottom = styled.div`
  margin-bottom: 0.5em;
`;

const WorkExperience = () => {
  function CompanyHeader(props: any) {
    return (
      <SmallMarginBottom>
        <div className="row">
          <div className="col-12">
            <b>{props.jobTitle}</b>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-sm-6">
            <a
              href={props.companyLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <b>{props.companyName}</b>
            </a>
          </div>
          <div className="col-12 col-sm-3">
            <span className="fa fa-globe" />
            &nbsp;
            {props.location}
          </div>
          <div className="col-12 col-sm-3">
            <span className="fa fa-calendar" />
            &nbsp;
            {props.duration}
          </div>
        </div>
      </SmallMarginBottom>
    );
  }

  return (
    <div id="experiences">
      <Title name="Work Experience" />
      <CompanyHeader
        companyLink="https://www.element.in/en"
        companyName="ELEMENT Insurance AG"
        jobTitle="LEAD SOFTWARE ENGINEER"
        location="Berlin, Germany"
        duration="Apr 2017 - Present"
      />
      <SmallMarginBottom>
        <div className="row">
          <div className="col-12">
            Element is the leading white-label product factory for insurance and
            a leader in insurance digitalization. It offers a unique technology
            platform (‘Insurance as a Platform’) with a focus on the B2B2X value
            chain.
            <li>
              Led software engineers, working on all aspects of the team leader
              role from recruiting and mentoring to agile advocate and quality
              assurance throughout promoting good practices and strategies
            </li>
            <li>
              Built,architected, developed and maintained many services and
              company tools like CI/CD pipeline, infrastructure modules,
              microservices and system tests, smoke tests and contract pact
              tests solutions
            </li>
            <li>
              Integrated with Stripe, creating a robust payments solution
              handling recurring charges, refunds, disputes, dunning, and
              payment accounting in an event-driven architecture
            </li>
            <li>
              Reduced partner onboarding time from a complex, error-prone, time
              consuming and manual work process to a totally automated and safe
              process
            </li>
            <li>
              Applied NoOps principles through automated deployment and
              infrastructure-as-a-code as part of the software lifecycle to
              assure quality and resilience in the cloud
            </li>
          </div>
        </div>
      </SmallMarginBottom>
      <div className="row">
        <div className="col-12">
          <i>
            Tech Stack/Tools: AWS (EC2, Elastic Beanstalk, Fargate, Lambda, SNS,
            SQS, RDS, DynamoDB, ElasticCache, ECR, Cognito, API Gateway, Secret
            Manager, Cloudwatch, X-Ray, S3, Glacier), Jenkins, Docker,
            Terraform, Java, Groovy, Spring Boot, Rest, Gradle, Spock, Geb,
            Pact, React, Typescript, Stripe, Scrum
          </i>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
