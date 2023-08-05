import './MyInput.css'

function MyInput(
    {
        labelFor,
        labelText,
        inputType,
        className
    }:
        {
            labelFor: string,
            labelText: string;
            inputType: string,
            className?: string
        }
) {

    const combinedClassName = `myInput__wrapper ${className || ''}`;

    return (
        <div className={combinedClassName}>
            <label className='myInput__label' htmlFor={labelFor}>{labelText}</label>
            <input className='myInput__input' type={inputType} />
        </div>

    );
}

export default MyInput;
