import { motion } from 'framer-motion';

export default function PrimaryButton({
    className = '',
    disabled,
    children,
    ...props
}) {
    return (
        <motion.button
            {...props}
            className={
                `cosmic-button relative inline-flex items-center justify-center gap-2 rounded-lg border border-purple-400/50 px-6 py-3 text-sm font-bold uppercase tracking-wider text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-purple-500/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-900 active:scale-95 ${disabled && 'opacity-50 cursor-not-allowed hover:scale-100'
                } ` + className
            }
            disabled={disabled}
            whileHover={{ scale: disabled ? 1 : 1.05 }}
            whileTap={{ scale: disabled ? 1 : 0.95 }}
        >
            {children}
            {!disabled && <span>🚀</span>}
        </motion.button>
    );
}

