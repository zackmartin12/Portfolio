import html from "../assets/images/skills/w3_html5-icon.svg";
import css from "../assets/images/skills/w3_css-icon~old.svg";
import javascript from "../assets/images/skills/javascript-icon.svg";
import react from "../assets/images/skills/reactjs-icon.svg";
import node from "../assets/images/skills/nodejs-icon.svg";
import express from "../assets/images/skills/expressjs-icon.svg";
import java from "../assets/images/skills/java-icon.svg";
import spring from "../assets/images/skills/springio-icon.svg";
import python from "../assets/images/skills/python-icon.svg";
import mysql from "../assets/images/skills/mysql-icon.svg";
import docker from "../assets/images/skills/docker-icon.svg";
import git from "../assets/images/skills/git-scm-icon.svg";

function Skills() {
    const skills = [
        { src: html, alt: "HTML Icon", label: "HTML", color: "#E44D26" },
        { src: css, alt: "CSS Icon", label: "CSS", color: "#1572B6" },
        { src: javascript, alt: "JavaScript Icon", label: "JavaScript", color: "#F7DF1E" },
        { src: react, alt: "React Icon", label: "React", color: "#61DAFB" },
        { src: node, alt: "Node Icon", label: "Node.js", color: "#68A063" },
        { src: express, alt: "Express Icon", label: "Express.js", color: "#FFFFFF" },
        { src: java, alt: "Java Icon", label: "Java", color: "#5382A1" },
        { src: spring, alt: "Spring Icon", label: "Spring", color: "#6DB33F" },
        { src: python, alt: "Python Icon", label: "Python", color: "#3776AB" },
        { src: mysql, alt: "MySQL Icon", label: "MySQL", color: "#00758F" },
        { src: docker, alt: "Docker Icon", label: "Docker", color: "#136ea3" },
        { src: git, alt: "Git Icon", label: "Git", color: "#f03c2e" }
    ];

    return (
        <>
            <section id="skills" className="relative pt-20 flex flex-col justify-center items-center min-h-screen px-4 md:px-6 lg:px-8">
                <h1 className="text-4xl font-bold text-center mb-8">Skills</h1>
                <div className="w-full max-w-4xl lg:max-w-3xl">
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {skills.map(skill => (
                            <div
                                key={skill.label}
                                className="rounded-lg p-6 hover:scale-105 transition duration-200"
                                style={{
                                    boxShadow: `0 2px 5px 1px ${skill.color}`
                                }}
                            >
                                <div className="flex flex-col items-center">
                                    <img
                                        src={skill.src}
                                        alt={skill.alt}
                                        className={`w-16 h-16 mb-2 object-contain ${
                                            skill.label === "Express.js" ? "filter invert" : ""
                                        }`}
                                    />
                                    <span className="text-lg font-light text-zinc-50/50">
                                        {skill.label}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Skills;
