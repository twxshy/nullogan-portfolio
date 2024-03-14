import React from "react";

export default function About() {
    return (
        <section id="About">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                        Hello World!
                        <br className="hidden lg:inline-block" /> I'm Nullogan, a frontend engineer
                    </h1>
                    <p className="mb-8 leading-relaxed">
                        I'm currently completing my Bachelors degree in Software Engineering at Queen's University Belfast,
                        on track to graduate in Winter 2024. Aside from my studies and personal projects, I'm a part time placement engineer
                        working on frontend development and testing of a mobile app.
                    </p>
                    <div className="flex justify-center">
                        <a
                            href="#contact"
                            className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
                            Contact Me
                        </a>
                        <a
                            href="#projects"
                            className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                            See My Portfolio
                        </a>
                        <a
                            href="https://github.com/twxshy"
                            className="ml-4 inline-flex"
                            target="_blank"
                            rel="noreferrer">
                            <img src="https://github.com/danielcranney/profileme-dev/blob/main/public/icons/socials/github-dark.svg" width="32" height="32" />
                        </a>
                        <a
                            href="https://www.x.com/nullogan"
                            className="ml-4 inline-flex"
                            target="_blank"
                            rel="noreferrer">
                            <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/twitter-dark.svg" width="32" height="32" />
                        </a>
                        <a
                            href="https://discord.com/users/twxshy"
                            className="ml-4 inline-flex"
                            target="_blank"
                            rel="noreferrer">
                            <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/discord.svg" width="32" height="32" />
                        </a>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img
                        className="object-cover object-center rounded"
                        alt="hero"
                        src="./Avatar.jpg"
                    />
                </div>
            </div>
        </section>
    );
}
