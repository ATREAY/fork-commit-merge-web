/* eslint-disable @next/next/no-sync-scripts */
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Coffee from "../Coffee";
import styles from "../../styles/Coffee.module.css";
import React from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

const languageList = [
    { name: "HTML", link: "/languages/html" },
    { name: "CSS", link: "/languages/css" },
    { name: "CoffeeScript", link: "/languages/coffeescript" },
    { name: "JavaScript", link: "/languages/javascript" },
    { name: "TypeScript", link: "/languages/typescript" },
    { name: "C", link: "/languages/c" },
    { name: "C++", link: "/languages/cpp" },
    { name: "C#", link: "/languages/csharp" },
    { name: "Java", link: "/languages/java" },
    { name: "Kotlin", link: "/languages/kotlin" },
    { name: "Scala", link: "/languages/scala" },
    { name: "Python", link: "/languages/python" },
    { name: "Ruby", link: "/languages/ruby" },
    { name: "Elixir", link: "/languages/elixir" },
    { name: "PHP", link: "/languages/php" },
    { name: "Go", link: "/languages/go" },
    { name: "Dart", link: "/languages/dart" },
    { name: "Swift", link: "/languages/swift" },
    { name: "Julia", link: "/languages/julia" },
    { name: "Rust", link: "/languages/rust" },
    { name: "Haskell", link: "/languages/haskell" },
    { name: "Lua", link: "/languages/lua" },
    { name: "Clojure", link: "/languages/clojure" },
    { name: "Lisp", link: "/languages/lisp" },
    { name: "Fortran", link: "/languages/fortran" },
    { name: "Erlang", link: "/languages/erlang" },
    { name: "Zig", link: "/languages/zig" },
    { name: "R", link: "/languages/r" },
    { name: "SQL", link: "/languages/sql" },
    { name: "Bash", link: "/languages/bash" },
    { name: "Perl", link: "/languages/perl" },
];

const frameworkList = [
    { name: "Express", link: "/frameworks/express" },
    { name: "React", link: "/frameworks/react" },
    { name: "Next", link: "/frameworks/next" },
    { name: "Vite", link: "/frameworks/vite"},
    { name: "Vue", link: "/frameworks/vue" },
    { name: "Angular", link: "/frameworks/angular" },
    { name: "Svelte", link: "/frameworks/svelte" },
    { name: "Gatsby", link: "/frameworks/gatsby" },
    { name: "Flask", link: "/frameworks/flask" },
    { name: "Django", link: "/frameworks/django" },
    { name: "Rails", link: "/frameworks/rails" },
    { name: "Laravel", link: "/frameworks/laravel" },
    { name: "Flutter", link: "/frameworks/flutter" },
    { name: "React Native", link: "/frameworks/reactnative" },
];

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isLanguageDropdownOpen, setLanguageDropdownOpen] = useState(false);
    const [isFrameworkDropdownOpen, setFrameworkDropdownOpen] = useState(false);
    const node = useRef<HTMLLIElement | null>(null);
    const frameworkNode = useRef<HTMLLIElement | null>(null);
    const { data: session } = useSession();
    const router = useRouter();

    const navigateToLanguage = (link: string) => {
        router.push(link);
        setLanguageDropdownOpen(false);
    };

    const navigateToFramework = (link: string) => {
        router.push(link);
        setFrameworkDropdownOpen(false);
    };

    const toggleSideNav = () => {
        setIsOpen(!isOpen);
    };

    const toggleLanguageDropdown = () => {
        setLanguageDropdownOpen(!isLanguageDropdownOpen);
        setFrameworkDropdownOpen(false);
    };

    const toggleFrameworkDropdown = () => {
        setFrameworkDropdownOpen(!isFrameworkDropdownOpen);
        setLanguageDropdownOpen(false);
    };

    return (
        <>
            <nav className="bg-slate-950 text-slate-50 backdrop-blur">
                <div className="container mx-auto px-6 py-3">
                    <div className="flex items-center justify-between">
                        <div></div>
                        <div className="md:hidden">
                            <button onClick={toggleSideNav}>
                                {isOpen ? (
                                    <XIcon className="h-6 w-6" />
                                ) : (
                                    <MenuIcon className="h-6 w-6" />
                                )}
                            </button>
                        </div>
                        <nav className="hidden md:block">
                            <ul className="md:flex items-center space-x-1">
                                <li>
                                    <Link href="/leaderboard">
                                        <div className="py-2 px-6 block text-sm cursor-pointer hover:underline hover:text-slate-100">
                                            Leaderboard
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/stars">
                                        <div className="py-2 px-6 block text-sm cursor-pointer hover:underline hover:text-slate-100">
                                            Stars
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/adventures">
                                        <div className="py-2 px-6 mr-6 block text-sm cursor-pointer hover:underline hover:text-slate-100">
                                            Adventures
                                        </div>
                                    </Link>
                                </li>

                                <li className={styles.buyButton}>
                                    <Coffee />
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </nav>
            {isOpen && (
                <div className="fixed top-0 left-0 w-64 h-full pt-6 text-slate-50 bg-slate-900 overflow-auto z-20 md:hidden">
                    {session?.user ? (
                        <Link href="/login">
                            <div className="bg-slate-900 py-2 px-6 block text-sm cursor-pointer hover:bg-slate-800 hover:text-slate-100 border border-transparent font-medium rounded-md">
                                {session.user.name}
                            </div>
                        </Link>
                    ) : (
                        <Link href="/login">
                            <div className="bg-slate-900 py-2 px-6 block text-sm cursor-pointer hover:bg-slate-800 hover:text-slate-100 border border-transparent font-medium rounded-md">
                                LOGIN
                            </div>
                        </Link>
                    )}
                    <div className="ml-6 mb-6 mt-2">
                        <div className={styles.buyButton}>
                            <Coffee />
                        </div>
                    </div>

                    <Link href="/">
                        <div className="px-6 mb-2 block text-sm cursor-pointer hover:scale-105">
                            <Image
                                src="/fork-commit-merge-logo.jpg"
                                alt="Fork, Commit, Merge -logo"
                                width={40}
                                height={40}
                            />
                        </div>
                    </Link>

                    <Link
                        href="https://github.com/nikohoffren/fork-commit-merge"
                        target="blank"
                    >
                        <div className="py-2 px-6 block text-sm cursor-pointer hover:underline hover:text-slate-100">
                            Contribute in GitHub
                        </div>
                    </Link>
                    <Link href="/leaderboard">
                        <div className="py-2 px-6 block text-sm cursor-pointer hover:underline hover:text-slate-100">
                            Leaderboard
                        </div>
                    </Link>
                    <Link href="/stars">
                        <div className="py-2 px-6 block text-sm cursor-pointer hover:underline hover:text-slate-100">
                            Stars
                        </div>
                    </Link>
                    <Link href="/adventures">
                        <div className="py-2 px-6 block text-sm cursor-pointer hover:underline hover:text-slate-100">
                            Adventures
                        </div>
                    </Link>

                    <Link href="/howtocontribute">
                        <div className="py-2 px-6 block text-sm cursor-pointer hover:underline hover:text-slate-100">
                            How to Contribute?
                        </div>
                    </Link>
                    <Link href="/git-commands">
                        <div className="py-2 px-6 block text-sm cursor-pointer hover:underline hover:text-slate-100">
                            Git Commands
                        </div>
                    </Link>
                    <li ref={node} className="list-none">
                        <div
                            className="py-2 px-6 block text-sm cursor-pointer hover:underline hover:text-slate-100"
                            onClick={toggleLanguageDropdown}
                        >
                            Languages
                        </div>
                        {isLanguageDropdownOpen && (
                            <ul className="absolute mt-2 py-1 w-48 rounded-md shadow-lg bg-slate-920 text-slate-50">
                                {languageList.map((lang, index) => (
                                    <li
                                        key={index}
                                        onClick={() =>
                                            navigateToLanguage(lang.link)
                                        }
                                    >
                                        <div className="text-sm cursor-pointer hover:bg-slate-800 px-4 py-2">
                                            {lang.name}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                    <li ref={frameworkNode} className="list-none">
                        <div
                            className="py-2 px-6 block text-sm cursor-pointer hover:underline hover:text-slate-100"
                            onClick={toggleFrameworkDropdown}
                        >
                            Frameworks | Libraries
                        </div>
                        {isFrameworkDropdownOpen && (
                            <ul className="absolute mt-2 py-1 w-48 rounded-md shadow-lg bg-slate-920 text-slate-50">
                                {frameworkList.map((framework, index) => (
                                    <li
                                        key={index}
                                        onClick={() =>
                                            navigateToFramework(framework.link)
                                        }
                                    >
                                        <div className="text-sm cursor-pointer hover:bg-slate-800 px-4 py-2">
                                            {framework.name}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                    <Link href="/ide">
                        <div className="py-2 px-6 block text-sm cursor-pointer hover:underline hover:text-slate-100">
                            IDE:s
                        </div>
                    </Link>
                    <Link href="/resources">
                        <div className="py-2 px-6 block text-sm cursor-pointer hover:underline hover:text-slate-100">
                            Resources
                        </div>
                    </Link>
                </div>
            )}
            <header className="bg-slate-950 text-slate-50 sticky top-0 z-10 hidden md:block shadow-bottom pr-25">
                <div className="mx-auto px-12 py-1 pb-6 pr-20 shadow-top">
                    <div className="mt-3 md:flex items-center justify-between">
                        <div className="flex items-center space-x-1">
                            <Link href="/">
                                <div className="pl-25 px-6 block text-sm cursor-pointer hover:scale-105">
                                    <Image
                                        src="/fork-commit-merge-logo.jpg"
                                        alt="Fork, Commit, Merge -logo"
                                        width={40}
                                        height={40}
                                    />
                                </div>
                            </Link>
                        </div>
                        <div className="flex items-center space-x-1">
                            <Link href="/howtocontribute">
                                <div className="py-2 px-6 block text-sm cursor-pointer hover:underline hover:text-slate-100">
                                    How to Contribute?
                                </div>
                            </Link>
                            <Link href="/git-commands">
                                <div className="py-2 px-6 block text-sm cursor-pointer hover:underline hover:text-slate-100">
                                    Git Commands
                                </div>
                            </Link>

                            <li ref={node} className="list-none">
                                <div
                                    className="py-2 px-6 block text-sm cursor-pointer hover:underline hover:text-slate-100"
                                    onClick={toggleLanguageDropdown}
                                >
                                    Languages
                                </div>
                                {isLanguageDropdownOpen && (
                                    <ul className="absolute mt-2 py-1 w-48 rounded-md shadow-lg bg-slate-920 text-slate-50 scrollable-dropdown">
                                        {languageList.map((lang, index) => (
                                            <li
                                                key={index}
                                                onClick={() =>
                                                    navigateToLanguage(
                                                        lang.link
                                                    )
                                                }
                                            >
                                                <div className="text-sm cursor-pointer hover:bg-slate-800 px-4 py-2">
                                                    {lang.name}
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                            <li ref={frameworkNode} className="list-none">
                                <div
                                    className="py-2 px-6 block text-sm cursor-pointer hover:underline hover:text-slate-100"
                                    onClick={toggleFrameworkDropdown}
                                >
                                    Frameworks | Libraries
                                </div>
                                {isFrameworkDropdownOpen && (
                                    <ul className="absolute mt-2 py-1 w-48 rounded-md shadow-lg bg-slate-920 text-slate-50 scrollable-dropdown">
                                        {frameworkList.map(
                                            (framework, index) => (
                                                <li
                                                    key={index}
                                                    onClick={() =>
                                                        navigateToFramework(
                                                            framework.link
                                                        )
                                                    }
                                                >
                                                    <div className="text-sm cursor-pointer hover:bg-slate-800 px-4 py-2">
                                                        {framework.name}
                                                    </div>
                                                </li>
                                            )
                                        )}
                                    </ul>
                                )}
                            </li>
                            <Link href="/ide">
                                <div className="py-2 px-6 block text-sm cursor-pointer hover:underline hover:text-slate-100">
                                    IDE:s
                                </div>
                            </Link>
                            <Link href="/resources">
                                <div className="py-2 px-6 mr-11 block text-sm cursor-pointer hover:underline hover:text-slate-100">
                                    Resources
                                </div>
                            </Link>

                            {session?.user ? (
                                <Link href="/login">
                                    <div className="bg-slate-900 py-2 px-6 block text-sm cursor-pointer hover:bg-slate-800 hover:text-slate-100 border border-transparent font-medium rounded-md">
                                        {session.user.name}
                                    </div>
                                </Link>
                            ) : (
                                <Link href="/login">
                                    <div className="bg-slate-900 py-2 px-6 block text-sm cursor-pointer hover:bg-slate-800 hover:text-slate-100 border border-transparent font-medium rounded-md">
                                        LOGIN
                                    </div>
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
