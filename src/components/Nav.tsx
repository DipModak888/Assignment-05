import Logo from "../assets/logo-text.png"

const Nav = () => {
    return (
        <div className="border-b border-[#F1F5F9]">
            <nav className="flex justify-between items-center gap-4 container mx-auto py-4">
                <img src={Logo} className="w-[160px] h-[38px]" alt="" />

                <ul className="flex justify-between gap-6 text-[#475569]">
                    <li><a href="">Home</a></li>
                    <li><a href="">Technologies</a></li>
                    <li><a href="">Projects</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Contact</a></li>
                </ul>

                <div className="flex gap-5">
                    <button className="text-[#475569]">Sign In</button>
                    <button className="bg-[#D91B7E] btn btn-secondary text-white px-[25px] py-[8px] rounded-4xl">Sign Up</button>
                </div>
            </nav>
        </div>
    );
};

export default Nav;