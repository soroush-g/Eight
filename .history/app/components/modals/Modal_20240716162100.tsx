'use client'

import { useCallback, useEffect, useState } from 'react';

interface ModalProps {
    isOpen?: boolean;
    onClose: () => void;
    onSubmit: () => void;
    title?: string;
    body?: React.ReactElement;
    foote?: React.ReactElement;
    actionLabel: string;
    disabled?: boolean;
    secondaryAction?: () => void;
    secondaryLabel?: string;
}

const Modal: React.FC<ModalProps> = ({
    isOpen,
    onClose,
    onSubmit,
    title,
    body,
    footer,
    actionLabel,
    disabled,
    secondaryAction,
    secondaryLabel
}) => {
    const [showModal, setShowModal] = useState(isOpen);

    useEffect(() => {
      setShowModal(isOpen)
    }, [isOpen]);

    const handleClose = useCallback(() => {
        if(disabled) {
            return;
        }
        setShowModal(false)
        setTimeout(() => {
            onClose();
        }, 3000)
    }, [disabled, onClose]);

    const handleSubmit = useCallback(() => {
        if(disabled) {
            return;
        }
        onSubmit();
    }, [disabled, onSubmit]);

    const handleSecondaryAction = useCallback(() => {
        if(disabled || !secondaryAction) {
            return;
        }
        secondaryAction()
    }, [disabled, secondaryAction])

    if (!isOpen) {
        return null
    }

    return ( 
        <>
         <div className='
         justify-center
         items-center
         flex
         overflow-x-hidden
         overflow-y-auto
         fixed
         inset-0
         z-50
         outline-none
         focus:outline-none
         bg-neutral-800/70'>
            <div className='
            relative
            w-full
            md:w-4/6
            lg:w-3/6
            xl:w-2/5
            my-6
            mx-auto
            h-full
            lg:h-auto
            md:h-auto'>
              { /* CONTENT */}
              d
            </div>
         </div>
        </>
     );
}
 
export default Modal;