import './MyButtonSquare.css'

function MyButtonSquare({ text, className }: { text: string; className?: string }) {

    const combinedClassName = `button__square ${className || ''}`;
  
    return (
      <button className={combinedClassName}>{text}</button>
    );
  }

  export default MyButtonSquare;