
interface ModalProps {
    isOpen?: boolean;
    onClose: () => void;
    onSubmit: () => void;
    title?: string;
    body?: React.ReactElement;
    foote?: React.ReactElement;
    actionLabel
}

const Modal = () => {
    return ( 
        <>
         <div>modal</div>
        </>
     );
}
 
export default Modal;