
interface ModalProps {
    isOpen?: boolean;
    onClose: () => void;
    onSubmit: () => void;
    title?: string;
    body?: React.ReactElement;
    foote?: React.ReactElement;
    actionLabel: string;
    disabled?: b
}

const Modal = () => {
    return ( 
        <>
         <div>modal</div>
        </>
     );
}
 
export default Modal;