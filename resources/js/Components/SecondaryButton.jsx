import { motion } from 'framer-motion';

export default function SecondaryButton({
    type = 'button',
    className = '',
    disabled,
    children,
    ...props
}) {
    return (
        <motion.button
            {...props}
            type={type}
            className={
                `glass-effect inline-flex items-center justify-center gap-2 rounded-lg border border-purple-300/30 px-5 py-2.5 text-sm font-semibold uppercase tracking-wide text-purple-200 shadow-md transition-all duration-300 hover:border-purple-300/50 hover:bg-purple-800/20 focus:outline-none focus:ring-2 focus:ring-purple-400/50 disabled:opacity-50 disabled:cursor-not-allowed ${disabled && 'opacity-50'
                } ` + className
            }
            disabled={disabled}
            whileHover={{ scale: disabled ? 1 : 1.02 }}
            whileTap={{ scale: disabled ? 1 : 0.98 }}
        >
            {children}
        </motion.button>
    );
}

