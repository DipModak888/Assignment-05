import HLogo from "../assets/banner-stack.png";

const Hero = () => {
    return (
        <section className="container mx-auto flex items-center justify-between gap-10">
            <div className="max-w-xl text-left">
                <h1 className="text-5xl font-extrabold text-slate-900 mb-6">
                    Build Your Ideal <br />
                    <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                        Development Stack
                    </span>
                </h1>

                <p className="text-slate-500 text-lg mb-8 mt-8">
                    Explore frontend, backend, database, and tooling options,<br /> compare
                    them side by side, and put together the stack that fits your next
                    project.
                </p>

                <div className="flex items-center gap-4 mt-14">
                    <button className="btn btn-secondary bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 text-white font-medium px-5 py-2 rounded-lg shadow-sm">
                        Explore Technologies
                    </button>

                    <button className="btn bg-white border border-slate-200 text-slate-600 font-medium px-5 py-2 rounded-lg hover:bg-slate-50">
                        Learn More
                    </button>
                </div>
            </div>

            <div className="w-full max-w-lg flex justify-center">
                <img
                    src={HLogo} alt="" className="w-full h-auto object-contain" />
            </div>
        </section>
    );
};

export default Hero;