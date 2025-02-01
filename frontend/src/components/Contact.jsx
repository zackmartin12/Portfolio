import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import emailjs from "emailjs-com";
import { useRef } from "react";

function Contact() {
    const form = useRef();

    function sendEmail(e) {
        e.preventDefault();

        emailjs
            .sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                form.current,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            )
            .then(
                (result) => {
                    alert("Message sent successfully!");
                    e.target.reset();
                },
                (error) => {
                    alert("Failed to send message. Please try again later.");
                    console.error("EmailJS Error:", error);
                }
            );
    };

    return (
        <>
            <section id="contact" className="relative pt-20 flex flex-col justify-center items-center min-h-screen px-4">
                <h1 className="text-4xl font-semibold text-center mb-6">Contact</h1>
                <div className="flex flex-col md:flex-row items-center md:items-start gap-4 w-full max-w-4xl">
                    <div className="w-full md:w-1/2 p-6">
                        <h2 className="text-2xl font-semibold text-white">Let's Connect</h2>
                        <p className="text-zinc-50/50 my-4">If you'd like to get in touch, feel free to shoot me a quick message.</p>
                        <div className="flex flex-col gap-3">
                            <p className="flex items-center gap-2 text-lg text-zinc-50/50">
                                <FaEnvelope className="text-white" />
                                zbmarti2@ncsu.edu
                            </p>
                            <p className="flex items-center gap-2 text-lg text-zinc-50/50">
                                <FaPhone className="text-white" />
                                +1 828-337-6152
                            </p>
                            <p className="flex items-center gap-2 text-lg text-zinc-50/50">
                                <FaMapMarkerAlt className="text-white" />
                                NC, United States
                            </p>
                        </div>
                    </div>
                    <form ref={form} onSubmit={sendEmail} className="w-full md:w-1/2 p-6 flex flex-col gap-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="flex flex-col">
                                <label className="text-white font-semibold pb-2" htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    required
                                    placeholder="Your name"
                                    className="p-2 rounded-md bg-zinc-50/10 backdrop-blur-lg shadow-lg text-white focus:outline-none focus:ring-2 focus:ring-sky-500"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label className="text-white font-semibold pb-2" htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    required
                                    placeholder="Your email"
                                    className="p-2 rounded-md bg-zinc-50/10 backdrop-blur-lg shadow-lg text-white focus:outline-none focus:ring-2 focus:ring-sky-500"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <label className="text-white font-semibold pb-2" htmlFor="message">Message</label>
                            <textarea
                                name="message"
                                id="message"
                                required
                                placeholder="Your message"
                                className="p-2 rounded-md bg-zinc-50/10 backdrop-blur-lg shadow-lg text-white focus:outline-none focus:ring-2 focus:ring-sky-500 h-32 resize-none"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full py-2 bg-white text-zinc-900 font-semibold rounded-md hover:scale-105 transition duration-200 md:text-lg"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </section>
        </>
    );
}

export default Contact;
