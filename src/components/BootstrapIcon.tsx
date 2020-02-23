import React from 'react';

interface IconType {
  name: string;
}

const BootstrapIcon = (props: IconType) => {
  return (
    <span className={`fa fa-${props.name}`} style={{ paddingRight: '0.5em' }} />
  );
};

export default BootstrapIcon;
