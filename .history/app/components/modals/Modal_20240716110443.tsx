
interface ModalProps {
    isOpen?: boolean;
    onClose: () => void;
    onSubmit: () => void;
    title?: string;
    body
}

const Modal = () => {
    return ( 
        <>
         <div>modal</div>
        </>
     );
}
 
export default Modal;