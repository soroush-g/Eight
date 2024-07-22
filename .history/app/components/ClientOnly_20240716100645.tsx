'use client'

import { useEffect, useState } from "react";

const ClientOnly = ({
    child
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