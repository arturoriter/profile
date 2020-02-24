import React from 'react';

interface IconType {
  name: string;
}

const BootstrapIcon = (props: IconType) => {
  return (
    <span
      className={`fa fa-${props.name}`}
      style={{ paddingRight: '0.2em', paddingLeft: '0.2em' }}
    />
  );
};

export default BootstrapIcon;
