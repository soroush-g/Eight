
interface ButtonProps {
    label: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean;
    outline?: boolean;
    
}

const Button = () => {
    return ( 
        <>
          <button></button>
        </>
     );
}
 
export default Button;