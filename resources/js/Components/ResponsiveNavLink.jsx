import { Link } from '@inertiajs/react';

export default function ResponsiveNavLink({
    active = false,
    className = '',
    children,
    ...props
}) {
    return (
        <Link
            {...props}
            className={`flex w-full items-start border-l-4 py-2 pe-4 ps-3 ${
                active
                    ? 'border-purple-400 bg-purple-900 text-purple-200 focus:border-purple-500 focus:bg-purple-800 focus:text-purple-100'
                    : 'border-transparent text-gray-300 hover:border-purple-400 hover:bg-purple-900 hover:text-purple-200 focus:border-purple-400 focus:bg-purple-900 focus:text-purple-200'
            } text-base font-medium transition duration-150 ease-in-out focus:outline-none ${className}`}
        >
            {children}
        </Link>
    );
}
