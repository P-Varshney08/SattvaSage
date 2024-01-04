import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="py-6 px-16 border-t border-gray-200 font-light flex flex-col lg:flex-row justify-between items-center bg-white">
            <p className="text-gray-700 mb-6 lg:mb-0">
                Copyright &copy; {new Date().getFullYear()}{' '} made with ❤️ by &nbsp; 
                <Link
                    to='/'
                    className="text-light-blue-500 hover:text-light-blue-700"
                >
                    Priya Varshney
                </Link>
            </p>

            <ul className="list-unstyled flex">
                <li className="mr-6">
                    <Link
                        to='/'
                        className="text-gray-700 hover:text-gray-900 font-medium block text-sm"
                    >
                        About Us
                    </Link>
                </li>
                <li className="mr-6">
                    <Link
                        to='/blog'
                        className="text-gray-700 hover:text-gray-900 font-medium block text-sm"
                    >
                        Blog
                    </Link>
                </li>
                <li className="mr-6">
                    <Link
                        to='/'
                        className="text-gray-700 hover:text-gray-900 font-medium block text-sm"
                    >
                        MIT License
                    </Link>
                </li>
                <li>
                    <Link 
                        to='/'
                        className="text-gray-700 hover:text-gray-900 font-medium block text-sm"
                    >
                        Contact Us
                    </Link>
                </li>
            </ul>
        </footer>
    );
}
