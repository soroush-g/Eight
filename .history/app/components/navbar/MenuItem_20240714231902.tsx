'use client'

interface MenuItemProps {
    onClick: () => void;
    label: string;
}

const MenuItem: React.FC<MenuItemProps> = ({
    onClick, label
}) => {
    return ( 
        <>
         <div className="
         px-4
         py-3
         hover:bg-na">

         </div>
        </>
     );
}
 
export default MenuItem;