import './MyButtonRounded.css'

function MyButtonRounded({ text, className, handleFunc }: { text: string; className?: string; handleFunc?: () => void }) {
  const combinedClassName = `button__rounded ${className || ''}`;

  return (
    <button className={combinedClassName} onClick={handleFunc}>{text}</button>
  );
}
  
  export default MyButtonRounded;
  