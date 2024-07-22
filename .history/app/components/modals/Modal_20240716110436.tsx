
interface ModalProps {
    isOpen?: boolean;
    onClose: () => void;
    onSubmit: () => void;
    title?: string;
    
}

const Modal = () => {
    return ( 
        <>
         <div>modal</div>
        </>
     );
}
 
export default Modal;