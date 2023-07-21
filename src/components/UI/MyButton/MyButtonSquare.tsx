import './MyButtonSquare.css'

function MyButtonSquare({ text, className }: { text: string; className?: string }) {

  const combinedClassName = `button__square ${className || ''}`;

  return (
    <button className={combinedClassName}>
      {text}
      <div className='button__square__top'></div>
      <div className='button__square__bottom'></div>
    </button>
  );
}

export default MyButtonSquare;