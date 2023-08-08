import './MyButtonSquare.css'

function MyButtonSquare({ text, className, handleFunc }: { text: string; className?: string, handleFunc?: () => void }) {

  const combinedClassName = `button__square ${className || ''}`;

  return (
    <button className={combinedClassName} onClick={handleFunc}>
      {text}
      <div className='button__square__top'></div>
      <div className='button__square__bottom'></div>
    </button>
  );
}

export default MyButtonSquare;