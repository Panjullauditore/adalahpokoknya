import { motion } from 'framer-motion';
import { useState } from 'react';

export default function UFO({ className = '' }) {
    const [isBeaming, setIsBeaming] = useState(false);

    return (
        <motion.div
            className={`absolute ${className}`}
            animate={{
                x: [0, 100, 0],
                y: [0, -10, 0],
            }}
            transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
            }}
            onHoverStart={() => setIsBeaming(true)}
            onHoverEnd={() => setIsBeaming(false)}
        >
            <div className="relative">
                <div className="text-5xl">🛸</div>
                {isBeaming && (
                    <motion.div
                        className="absolute top-full left-1/2 -translate-x-1/2 w-1 h-20 bg-gradient-to-b from-yellow-300 to-transparent"
                        initial={{ opacity: 0, scaleY: 0 }}
                        animate={{ opacity: 1, scaleY: 1 }}
                        exit={{ opacity: 0, scaleY: 0 }}
                    />
                )}
            </div>
        </motion.div>
    );
}
