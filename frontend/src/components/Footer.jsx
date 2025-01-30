function Footer() {
    return (
        <>
            <footer className="w-full h-auto flex justify-center items-center mt-auto border-t-2 border-zinc-50/10 py-4">
                <div className="flex flex-col items-center max-w-screen-lg w-full mx-auto px-4 md:px-6 gap-y-2">
                    <h1 className="text-zinc-50/50 text-center">Zack Martin © 2024</h1>
                    <p className="text-zinc-50/50 text-sm text-center">
                        Built with <span className="font-semibold">React</span> and <span className="font-semibold">Tailwind CSS</span>.
                    </p>
                </div>
            </footer>
        </>
    );
}

export default Footer;
