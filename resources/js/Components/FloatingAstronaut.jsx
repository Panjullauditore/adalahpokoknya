import { motion } from 'framer-motion';

export default function FloatingAstronaut({ className = '' }) {
    return (
        <motion.div
            className={`absolute z-0 ${className}`}
            animate={{
                y: [0, -20, 0],
                rotate: [-5, 5, -5],
            }}
            transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
            }}
        >
            <div className="text-6xl">🧑‍🚀</div>
        </motion.div>
    );
}
