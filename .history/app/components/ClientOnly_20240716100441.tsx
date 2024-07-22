'use client'

import { useEffect, useState } from "react";

const ClientOnly = () => {
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(t)
    })
    return ( 
        <>
          <div></div>
        </>
     );
}
 
export default ClientOnly;