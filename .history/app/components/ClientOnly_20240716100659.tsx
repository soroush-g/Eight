'use client'

import { useEffect, useState } from "react";

inter

const ClientOnly = ({
    children
}) => {
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true)
    }, [])

    if (!hasMounted) {
        return null
    }

    return ( 
        <>
          <div>
            {children}
          </div>
        </>
     );
}
 
export default ClientOnly;