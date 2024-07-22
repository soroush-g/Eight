'use client'

interface ContainerProps {
    children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({children}) => {
    return ( 
        <div class>{children}</div>
     );
}
 
export default Container;