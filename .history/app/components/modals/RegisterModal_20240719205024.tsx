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
import Input from '../inputs/Input';
import toast from 'react-hot-toast';
import Button from '../Button';

const RegisterModal = () => {
  const registerModal = useRegisterModal();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
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
      toast.error('خطای ک');
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
        id="email"
        label="ایمیل"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
        <Input 
        id="name"
        label="نام کاربری"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
        <Input 
        id="password"
        type='password'
        label="رمز عبور"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
    </div>
  );

  const footerContent = (
    <div className="flex flex-col gap-4 mt-3">
      <hr />
      <Button 
       label="ادامه با گوگل"
       icon={FcGoogle}
      />
    </div>
  )


    return ( 
        <>
          <div>
           <Modal 
            disabled={isLoading}
            isOpen={registerModal.isOpen}
            title= "ثبت نام"
            actionLabel=' تایید '
            onClose={registerModal.onClose}
            onSubmit={handleSubmit(onSubmit)} 
            body={bodyContent}
            footer={footerContent}
            />
          </div>
        </>
     );
}
 
export default RegisterModal;