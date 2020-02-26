import React from 'react';
import Table from 'react-bootstrap/Table';
import Title from './Title';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';

const StyledDiv = styled.div`
  margin-bottom: 1.5em;
`;

const StyledTable = styled(Table)`
  line-height: 0.7;
`;

interface LanguageType {
  name: string;
  proficiency: string;
}
interface LanguageListType {
  data: Array<LanguageType>;
}

const Languages = ({ data }: LanguageListType) => {
  return (
    <StyledDiv id="languages">
      <Title name="LANGUAGE.TITLE" />
      <StyledTable bordered hover className='table-dark'>
        <thead>
          <tr>
            <th>
              <FormattedMessage id="LANGUAGE.NAME" />
            </th>
            <th>
              <FormattedMessage id="LANGUAGE.LEVEL" />
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((language, index) => (
            <tr key={`language-${index}`}>
              <td>{language.name}</td>
              <td>{language.proficiency}</td>
            </tr>
          ))}
        </tbody>
      </StyledTable>
    </StyledDiv>
  );
};

export default Languages;
