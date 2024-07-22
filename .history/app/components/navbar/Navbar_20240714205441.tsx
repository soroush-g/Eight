import Container from "../Container";
import Logo from "./Logo";
import Search from "./Search";

const Navbar = () => {
    return ( 
        <div className="fixed w-full bg-white z-8 shadow-sm">
            <div className="py-2 border-b-[1px]">
              <Container>
                <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
                 <Logo />
                 <Search />
                 <U
                </div>
              </Container>
            </div>
        </div>
     );
}
 
export default Navbar;