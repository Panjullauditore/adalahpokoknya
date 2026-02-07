import ApplicationLogo from '@/Components/ApplicationLogo';
import SpaceBackground from '@/Components/SpaceBackground';
import FloatingPlanet from '@/Components/FloatingPlanet';
import { Link } from '@inertiajs/react';
import { motion } from 'framer-motion';

export default function GuestLayout({ children }) {
    return (
        <SpaceBackground>
            <div className="relative flex min-h-screen flex-col items-center pt-6 sm:justify-center sm:pt-0">
                {/* Floating Decorations */}
                <FloatingPlanet emoji="🪐" className="top-20 right-10" size="text-6xl" />
                <FloatingPlanet emoji="🌍" className="top-40 left-10" size="text-5xl" />
                <FloatingPlanet emoji="⭐" className="bottom-20 right-20" size="text-4xl" />

                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Link href="/" className="flex items-center gap-3">
                        <span className="text-6xl">🚀</span>
                        <ApplicationLogo className="h-20 w-20 fill-current text-purple-400" />
                    </Link>
                </motion.div>

                <motion.div
                    className="glass-effect-strong mt-8 w-full overflow-hidden rounded-2xl border border-purple-400/30 px-8 py-6 shadow-2xl shadow-purple-500/20 sm:max-w-md"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    {children}
                </motion.div>
            </div>
        </SpaceBackground>
    );
}

