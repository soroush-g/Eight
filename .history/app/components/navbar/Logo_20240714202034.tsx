'use client'

import Image from "next/image"
import { useRouter } from "next/navigation"

const Logo = () => {
    const router = useRouter();

    return(
        <Image alt="لوگو" className="hidden md:block cursor-pointer" height="100" width="100" src="/images/airevent.png" />
    )
}

export default Logo;