'use client'

import Image from "next/image";

const Avatar = () => {
    return ( 
        <>
        <Image 
         className="rounded-full"
         height='30'
         width='30'
         alt="آواتار"
         src='/p/images/user-avatar.png'
        />
        </>
     );
}
 
export default Avatar;