import './MyLinksBox.css'

function MyLinksBox({ svgCode, className } : {svgCode : string, className : string}) {
    const combinedClassName = ` ${className || ''}`;
    return (
      <div className={combinedClassName} dangerouslySetInnerHTML={{ __html: svgCode }} />
  );
};

export default MyLinksBox;