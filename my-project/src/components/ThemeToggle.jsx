import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

function ThemeToggle() {
    // Initialize darkMode state based on localStorage
    const [darkMode, setDarkMode] = useState(() => {
        const savedMode = localStorage.getItem('darkMode');
        return savedMode ? JSON.parse(savedMode) : false;
    });

    // Update root class and localStorage when darkMode changes
    useEffect(() => {
        const root = window.document.documentElement;
        if (darkMode) {
            root.classList.add('dark');
            root.classList.remove('light');
        } else {
            root.classList.add('light');
            root.classList.remove('dark');
        }
        localStorage.setItem('darkMode', JSON.stringify(darkMode));
    }, [darkMode]);

    return (
        <div className="mr-10">
            <button
                className={`bg-gray-200 dark:bg-gray-700 relative inline-flex items-center h-7 rounded-full w-14 focus:outline-none`}
                onClick={() => setDarkMode(!darkMode)}
                aria-label="Toggle theme"
            >
                <span
                    className={`${
                        darkMode ? 'translate-x-6 bg-yellow-500' : 'translate-x-0 bg-blue-500'
                    } inline-block w-7 h-6 transform rounded-full transition-transform text-xl justify-center items-center `}
                >
                    {darkMode ? (
                        <FaSun className="text-white m-1" />
                    ) : (
                        <FaMoon className="text-white m-1" />
                    )}
                </span>
            </button>
        </div>
    );
}

export default ThemeToggle;
