'use client'

import { useEffect, useState } from "react";

const ClientOnly = () => {
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true)
    }, [])

    if !ha
    return ( 
        <>
          <div></div>
        </>
     );
}
 
export default ClientOnly;