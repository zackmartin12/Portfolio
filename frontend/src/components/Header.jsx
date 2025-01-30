import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Header() {
    const [active, setActive] = useState("#home");
    const [openNav, setOpenNav] = useState(false);

    const headerItems = [
        { label: "Home", link: "#home" },
        { label: "About", link: "#about" },
        { label: "Skills", link: "#skills"},
        { label: "Projects", link: "#projects" },
        { label: "Contact", link: "#contact" }
    ];

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const sections = headerItems.map(item => document.querySelector(item.link));
            
            for (let section of sections) {
                if (section && section.offsetTop <= scrollPosition + 100) {
                    setActive(`#${section.id}`);
                }
            }
        };
        
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <header className="fixed top-0 left-0 w-full z-50 bg-zinc-900">
                <nav className="hidden sm:flex justify-center items-center w-fit mx-auto px-4 py-2">
                    {headerItems.map(({ label, link }, key) => (
                        <a
                            key={key}
                            href={link}
                            onClick={() => setActive(link)}
                            className={`px-4 py-2 rounded-md text-lg transition duration-200 transform relative hover:scale-105 ${
                                active === link
                                    ? "text-white"
                                    : "text-zinc-50/50 hover:text-white"
                            }`}
                        >
                            {label}
                        </a>
                    ))}
                </nav>

                <div className="sm:hidden w-full fixed top-0 left-0 flex justify-between items-center px-4 py-4 bg-zinc-900 z-50">
                    <button onClick={() => setOpenNav(!openNav)} className="text-white text-2xl">
                        {openNav ? <FaTimes /> : <FaBars />}
                    </button>
                </div>

                <div className={`sm:hidden flex flex-col items-center fixed top-12 left-0 w-full bg-zinc-900 transition-all duration-300 pb-4 shadow ${
                    openNav ? "h-auto opacity-100" : "h-0 opacity-0 pointer-events-none"
                }`}>
                    {headerItems.map(({ label, link }, key) => (
                        <a
                            key={key}
                            href={link}
                            onClick={() => {
                                setActive(link);
                                setOpenNav(false);
                            }}
                            className={`w-full text-center py-3 text-lg transition duration-200 ${
                                active === link ? "text-white" : "text-zinc-50/50 hover:text-white"
                            }`}
                        >
                            {label}
                        </a>
                    ))}
                </div>
            </header>
        </>
    );
}

export default Header;
