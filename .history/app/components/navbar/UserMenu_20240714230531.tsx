'use client'

import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../Avatar";
import { useCallback, useState } from "react";

const UserMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = useCallback(() =)
    return ( 
        <>
         <div className="relative">
            <div className="flex flex-row items-center gap-3">
              <div 
              onClick={() => {}}
              className="
              hidden
              md:block
              text-sm
              font-semibold
              py-3
              px-4 
              rounded-full 
              hover:bg-neutral-100 
              transition 
              cursor-pointer">
              سروش قطران
              </div>
              <div 
              onClick={() => {}}
              className="
              p-4
              md:py-1
              md:px-2
              border-[1px]
              border-neutral-200
              flex
              flex-row
              items-center
              gap-3
              rounded-full
              cursor-pointer
              hover:shadow-md
              transition
              ">
                <AiOutlineMenu />
                <div className="hidden md:block">
                  <Avatar />
                </div>
              </div>
            </div>
         </div>
        </>
     );
}
 
export default UserMenu;