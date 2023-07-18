import './MyButtonRounded.css'

function MyButtonRounded({ text, className }: { text: string; className?: string }) {

    const combinedClassName = `button__rounded ${className || ''}`;
  
    return (
      <button className={combinedClassName}>{text}</button>
    );
  }
  
  export default MyButtonRounded;
  