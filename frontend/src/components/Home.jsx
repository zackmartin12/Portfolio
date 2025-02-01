import profile from "../assets/images/home/gspfp.jpg";

function Home() {
    return (
        <>
            <section id="home" className="relative pt-20 flex flex-col justify-center items-center min-h-screen">
                <img
                    src={profile}
                    alt="profile"
                    className="w-56 h-56 rounded-full shadow-lg mb-4"
                />
                <h1 className="text-4xl text-center text-zinc-50/50">
                    Hi, I'm <span className="text-white font-semibold">Zack</span>.
                </h1>
                <h1 className="text-4xl text-center mt-2 text-zinc-50/50">I'm a Software Developer.</h1>
                <a href="#about">
                    <button className="text-2xl font-semibold text-white mt-4 px-6 py-3 border-2 border-white rounded-md transition duration-200 hover:scale-110 flex items-center gap-2">
                        Learn More <span className="animate-bounce">↓</span>
                    </button>
                </a>
            </section>
        </>
    );
}

export default Home;
