import { motion } from 'framer-motion';

export default function FloatingPlanet({ emoji = '🪐', className = '', size = 'text-4xl' }) {
    return (
        <motion.div
            className={`absolute ${size} ${className}`}
            animate={{
                y: [0, -15, 0],
                x: [0, 10, 0],
                rotate: [0, 360],
            }}
            transition={{
                duration: 8,
                repeat: Infinity,
                ease: 'linear',
            }}
        >
            {emoji}
        </motion.div>
    );
}
