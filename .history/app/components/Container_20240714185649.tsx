'use client'

interface ContainerProps {
    children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({children}) => {
    return ( 
        <div className="max-w-[2520px] mx-a">{children}</div>
     );
}
 
export default Container;