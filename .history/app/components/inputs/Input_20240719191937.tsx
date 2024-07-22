'use client'

import {
     FieldErrors,
     FieldValues,
     useFormRegister } from 'react-hook-form';
import { BiDollar } from 'react-icons/bi';

interface InputProps {
    id: string;
    label: string;
    type?: string;
    disabled?: boolean;
    formatPrice?: boolean;
    required?: boolean;
    register: UseFormRegister<FieldValues>,
    errors: FieldErrors
}

const Input: React.FC<InputProps> = ({
    id,
    label,
    type = 'text',
    disabled,
    formatPrice,
    required,
    register,
    errors
}) => {
    return ( 
        <>
         <div className='w-full relative'>
          {formatPrice && (
            <BiDollar 
              size={24}
              className="
              text-neutral-800
              absolute
              top-5
              right-2"
            />
          )}
          <input 
            id={id}
            disabled={disabled}
            {...register(id, { required })}
            placeholder=''
            type={type}
            className={`
                peer
                w-full
                p-4
                pt-6
                font-light
                `}
          />
         </div>
        </>
     );
}
 
export default Input;