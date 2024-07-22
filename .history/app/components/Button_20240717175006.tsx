
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
    icon: Icon
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
          ${small ? 'font-light' : 'font-semibold'}
          ${small ? 'border-[1px]' : 'border-2'}
          
          `}>
            {Icon && (
                <Icon
                  size={24}
                  className="
                  absolute
                  left-4"
                />
            )}
            {label}
          </button>
        </>
     );
}
 
export default Button;