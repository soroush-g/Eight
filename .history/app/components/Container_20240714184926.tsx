interface ContainerProps {
    children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({children}) => {
    return ( 
        <div>بدنه ی سایت</div>
     );
}
 
export default Container;