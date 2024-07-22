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
import Modal from './Modal'
import Heading from '../Heading';

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

  const onSubmit = SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    axios.post('/api/register', data).then(() => {
      registerModal.onClose();
    }).catch((error) => {
      console.log(error)
    }).finally(() => {
      setIsLoading(false);
    })
  };

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading
        title="هشت بستری جامع برای توسعه ی کاری خود"
        subtitle='ایجاد کاربری'
      />
      <Input
    </div>
  )


    return ( 
        <>
          <div>
           <Modal 
            disabled={isLoading}
            isOpen={registerModal.isOpen}
            title= "ثبت نام"
            actionLabel='ادامه بده'
            onClose={registerModal.onClose}
            onSubmit={handleSubmit(onSubmit)} 
            body={bodyContent}
            />
          </div>
        </>
     );
}
 
export default RegisterModal;