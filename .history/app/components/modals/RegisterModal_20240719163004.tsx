'use client';

import axios from 'axios'
import { AiFillGithub } from 'react-icons/ai'
import { FcGoogle } from 'react-icons/fc'
import { useCallback, useState } from 'react'
import {
  FieldValues,
  SubmitHandler,
  useForm
} from 'react-hook-form'
import useRegisterModal from '@/app/hooks/useRegisterModal'

const RegisterModal = () => {
  const registerModal = useRegisterModal();
  const [isLoading, setIsLoading] = useState(false);

  const {
    regsiter,
    handleSubmit,
    formState: {
      errors,
    }
  } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      email: '',
      password: ''
    }
  });

  const onSubmit = SubmitHandler<FieldValues>


    return ( 
        <>
          <div>

          </div>
        </>
     );
}
 
export default RegisterModal;