
import { IconType } from 'react-icons';

interface ButtonProps {
    label: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean;
    outline?: boolean;
    small?: boolean;
    icon?: IconType;
}

const Button: React.FC<ButtonProps> = ({
    label,
    onClick,
    disabled,
    outline,
    small,
    icon
}) => {
    return ( 
        <>
          <button className={`
          relative
          disabled:opacity-70
          disabled:cursor-not-allowed
          rounded-lg
          hover:opacity-80
          transition
          w-full
          ${outline ? 'bg-white' : 'bg-red-700'}
          ${outline ? 'border-black' : 'border-red-700'}
          ${outline ? 'text-black' : 'text-white'}
          ${small ? 'py-1' : 'p'}
          ${small ? 'text-sm' : 'text-md'}
          ${small ? '' : 'p'}
          ${small ? 'py-1' : 'p'}
          
          `}>
            {label}
          </button>
        </>
     );
}
 
export default Button;