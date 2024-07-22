'use client'

import { useState } from 'react';

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
    actionLabel;
    disabled;
    secondaryAction,
    secondaryLabel
}) => {
    const [showModal, setShowModal] = useState(false);
    return ( 
        <>
         <div>modal</div>
        </>
     );
}
 
export default Modal;