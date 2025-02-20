export const About = () => {
    const frontendSkills = [
        "HTML5",
        "CSS3",
        "JavaScript",
        "React",
        "Tailwind CSS",
        "Bootstrap",
    ];

    const backendSkills = [
        "MySQL",
        "Laravel",
        "PHP"
    ];

    return (
        <section 
            id="about"
            className="min-h-screen flex items-center justify-center py-20"
        >
            <div className="max-w-3xl mx-auto px-4">
                <h2 
                    className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center"
                >
                    About Me
                </h2>

                <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                    <p className="text-gray-300 mb-6">
                        I’m passionate about learning new technologies, improving user experience, 
                        and solving complex problems. My goal is to keep growing as a developer and 
                        contribute to impactful projects.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Frontend</h3>
                        <div className="flex flex-wrap gap-2">
                            {frontendSkills.map((tech, key) => (
                                <span
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Backend</h3>
                        <div className="flex flex-wrap gap-2">
                            {backendSkills.map((tech, key) => (
                                <span
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4"> 📚 Education </h3>
                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                            <li>
                                <strong> Diploma in Computer Science </strong> <br/> Kolej University Poly-Tech Mara <br />
                                (2019-2021)
                            </li>
                            <li>
                                Relevant Coursework: Web Development, Object-Oriented Programming (OOP), Mobile App Development, Database Management,
                                Backend Development, API Development & Integration, Data Structures & Algorithms, Version Control
                            </li>
                        </ul>
                    </div>
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
                        <div className="space-y-4 text-gray-300">
                            <div>
                                <h4 className="font-semibold">
                                    Software Developer at Mirfalah Technologies Sdn Bhd (2024 - Present)
                                </h4>

                                <p>
                                    Contributed to the Aducktive e-commerce project, enhancing user experience and optimizing transactions.
                                </p>
                            </div>

                            <div>
                                <h4 className="font-semibold">
                                    Web System Developer at Tarikemas Sdn Bhd (2023-2024)
                                </h4>

                                <p>
                                    Worked on Orbit and N9Pay, primarily in backend development. Led a JAKIM project as a full-stack developer and technical lead.
                                </p>
                            </div>

                            <div>
                                <h4 className="font-semibold">  
                                    Software Developer at Mikraj Digital Sdn Bhd (2022-2023)
                                </h4>

                                <p>
                                    Developed the Presta system for performance tracking. Handled full-stack development, UI/UX design, and project collaboration.
                                </p>
                            </div>

                            <div>
                                <h4 className="font-semibold">
                                    Software Developer at SWM Environment Sdn Bhd (2021 - Internship)
                                </h4>

                                <p>
                                    Built an IT Asset Management System using HTML, PHP, and JavaScript. Extended internship for project completion.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};