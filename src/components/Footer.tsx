const logoText = new URL("../assets/logo-text.png", import.meta.url).href;

const Footer = () => {
    return (
        <footer className="mt-20 border-t border-slate-100">
            <div className="container mx-auto px-4 py-12 md:px-0 lg:py-16">
                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] lg:gap-12">
                    <div>
                        <img src={logoText} alt="Dev Stack" className="h-auto w-32" />
                        <p className="mt-5 max-w-sm text-sm leading-5 text-slate-500">
                            Curated tools, technologies, and resources for developers building
                            modern software.
                        </p>
                        <nav aria-label="Social links" className="mt-6 flex gap-5 text-sm">
                            <a href="#"
                                className="font-semibold text-slate-700 transition-colors">
                                GitHub
                            </a>
                            <a href="#"
                                className="font-semibold text-slate-700 transition-colors">
                                Twitter
                            </a>
                            <a href="#"
                                className="font-semibold text-slate-700 transition-colors">
                                LinkedIn
                            </a>
                        </nav>
                    </div>

                    <div>
                        <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-900">
                            Product
                        </h2>
                        <nav aria-label="Product links" className="mt-4 space-y-3">
                            <a href="#"
                                className="block text-sm text-slate-500">
                                Home
                            </a>
                            <a href="#"
                                className="block text-sm text-slate-500">
                                Technologies
                            </a>
                            <a href="#"
                                className="block text-sm text-slate-500">
                                Projects
                            </a>
                        </nav>
                    </div>

                    <div>
                        <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-900">
                            Company
                        </h2>
                        <nav aria-label="Company links" className="mt-4 space-y-3">
                            <a href="#"
                                className="block text-sm text-slate-500">
                                About
                            </a>
                            <a href="#"
                                className="block text-sm text-slate-500">
                                Contact
                            </a>
                            <a href="#"
                                className="block text-sm text-slate-500">
                                Careers
                            </a>
                        </nav>
                    </div>

                    <div>
                        <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-900">
                            Legal
                        </h2>
                        <nav aria-label="Legal links" className="mt-4 space-y-3">
                            <a href="#"
                                className="block text-sm text-slate-500">
                                Privacy Policy
                            </a>
                            <a href="#"
                                className="block text-sm text-slate-500">
                                Terms of Service
                            </a>
                        </nav>
                    </div>
                </div>

                <div className="mt-12 flex flex-col gap-4 border-t border-slate-100 pt-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between lg:mt-16">
                    <p className="text-[12px]">&copy; 2026 Dev Stack. All rights reserved.</p>
                    <div className="flex gap-6 text-[13px]">
                        <a href="#">
                            Privacy
                        </a>
                        <a href="#">
                            Terms
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;