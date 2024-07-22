'use client'

import { useEffect, useState } from "react";

const ClientOnly = () => {
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true)
    }, [])

    if !has
    return ( 
        <>
          <div></div>
        </>
     );
}
 
export default ClientOnly;