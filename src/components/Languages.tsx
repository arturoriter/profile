import React from 'react';
import Table from 'react-bootstrap/Table';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';

import Title from './Title';
import { useTheme } from '../ThemeManager';

const StyledDiv = styled.div`
  margin-bottom: 1.5em;
`;

const StyledTable = styled(Table)`
  line-height: 0.7;
  color: ${props => props.theme.page.textColor};
`;

interface LanguageType {
  name: string;
  proficiency: string;
}
interface LanguageListType {
  data: Array<LanguageType>;
}

const Languages = ({ data }: LanguageListType) => {
  const theme = useTheme();

  return (
    <StyledDiv id="languages">
      <Title name="LANGUAGE.TITLE" />
      <StyledTable className={theme.mode.table}>
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
