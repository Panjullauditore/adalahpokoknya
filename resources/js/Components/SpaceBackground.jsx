import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function SpaceBackground({ children }) {
    const [stars, setStars] = useState([]);
    const [shootingStars, setShootingStars] = useState([]);

    useEffect(() => {
        // Generate random stars
        const generatedStars = Array.from({ length: 100 }, (_, i) => ({
            id: i,
            top: Math.random() * 100,
            left: Math.random() * 100,
            size: Math.random() * 3,
            delay: Math.random() * 3,
        }));
        setStars(generatedStars);

        // Generate shooting stars periodically
        const interval = setInterval(() => {
            const newShootingStar = {
                id: Date.now(),
                top: Math.random() * 50,
                left: Math.random() * 100,
            };
            setShootingStars(prev => [...prev, newShootingStar]);
            
            // Remove shooting star after animation
            setTimeout(() => {
                setShootingStars(prev => prev.filter(s => s.id !== newShootingStar.id));
            }, 2000);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#0a0118] via-[#1e1b4b] to-[#312e81]">
            {/* Fixed Stars */}
            {stars.map((star) => (
                <motion.div
                    key={star.id}
                    className="absolute rounded-full bg-white"
                    style={{
                        top: `${star.top}%`,
                        left: `${star.left}%`,
                        width: `${star.size}px`,
                        height: `${star.size}px`,
                    }}
                    animate={{
                        opacity: [0.2, 1, 0.2],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 2 + star.delay,
                        repeat: Infinity,
                        delay: star.delay,
                    }}
                />
            ))}

            {/* Shooting Stars */}
            {shootingStars.map((star) => (
                <motion.div
                    key={star.id}
                    className="absolute h-[2px] w-[100px] bg-gradient-to-r from-transparent via-white to-transparent"
                    style={{
                        top: `${star.top}%`,
                        left: `${star.left}%`,
                        transform: 'rotate(-45deg)',
                    }}
                    initial={{ opacity: 0, x: 0, y: 0 }}
                    animate={{ opacity: [0, 1, 0], x: -300, y: 300 }}
                    transition={{ duration: 2, ease: 'easeOut' }}
                />
            ))}

            {/* Main Content */}
            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
}
