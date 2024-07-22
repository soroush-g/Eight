'use client'

import {
     FieldErrors,
     FieldValues,
     useFormRegister } from 'react-hook-form';

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

         </div>
        </>
     );
}
 
export default Input;