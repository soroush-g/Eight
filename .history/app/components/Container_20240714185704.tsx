'use client'

interface ContainerProps {
    children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({children}) => {
    return ( 
        <div className="max-w-[2520px] mx-auto xl:px-">{children}</div>
     );
}
 
export default Container;