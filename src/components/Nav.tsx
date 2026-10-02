import { FaBars } from "react-icons/fa";
import Logo from "../assets/logo-text.png"

const Nav = () => {
    return (

        <div className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur">
            <nav className="flex justify-between items-center gap-4 container mx-auto py-4">

                <div className="flex items-center">

                    <button className="text-xl text-gray-700 md:hidden">
                        <FaBars />
                    </button>

                    <img src={Logo} alt="Dev Stack" className="h-9 w-auto cursor-pointer" />
                </div>

                <ul className="hidden items-center gap-8 text-sm text-slate-500 md:flex">
                    <li ><a className=' text-[#DB2777]' href="">Home</a></li>
                    <li><a href="">Technologies</a></li>
                    <li><a href="">Projects</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Contact</a></li>
                </ul>

                <div className="flex gap-5">
                    <button className="text-[#475569] cursor-pointer">Sign In</button>
                    <button className="bg-[#D91B7E] btn btn-secondary text-white px-[25px] py-[8px] rounded-4xl">Sign Up</button>
                </div>
            </nav>
        </div>
    );
};

export default Nav;