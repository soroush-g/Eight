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
            // {...register(id, { required })}
            placeholder=''
            type={type}
            className={`
                peer
                w-full
                p-4
                pt-6
                font-light
                bg-white
                border-2
                rounded-md
                outline-none
                transition
                disabled:opacity-70
                disabled:cursor-not-allowed
                ${formatPrice ? 'pl-9' : 'pl-4'}
                ${errors[id] ? 'border-red-600' : 'border-neutral-600'}
                ${errors[id] ? 'focus:border-red-600' : 'focus:border-black'}
                `}
          />
          <label className={`
            absolute
            text-md
            duration-150
            transform
            -translate-y-3
            top-5
            z-10
            origin-[0]
            ${formatPrice ? 'right-9' : 'right-4'}
            peer
            `}>
            {label}
          </label>
         </div>
        </>
     );
}
 
export default Input;