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
         src='/images/user-avatar.p'
        />
        </>
     );
}
 
export default Avatar;