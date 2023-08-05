import './MyForm.css'

function MyForm({children, className }: {children: React.ReactNode, className?: string }) {

    const combinedClassName = `myForm ${className || ''}`;

    return (
        <form className={combinedClassName}  action="" method="post">
            {children}
        </form>
    );
}

export default MyForm;
