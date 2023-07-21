import React from 'react';

const MySvgComponent = ({ svgCode, className } : {svgCode : string, className : string}) => {
    const combinedClassName = ` ${className || ''}`;
    return (
      <div className={combinedClassName} dangerouslySetInnerHTML={{ __html: svgCode }} />
  );
};

export default MySvgComponent;
