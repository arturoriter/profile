import React from 'react';
import styled from 'styled-components';

const PageContainer = styled.span`
  padding-right: 0.2em;
  padding-left: 0.2em;
`;

interface IconType {
  name: string;
}

const BootstrapIcon = (props: IconType) => {
  return <PageContainer className={`fa fa-${props.name}`} />;
};

export default BootstrapIcon;
