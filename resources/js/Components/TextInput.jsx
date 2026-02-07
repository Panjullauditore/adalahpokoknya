import { forwardRef, useEffect, useImperativeHandle, useRef } from 'react';
import { motion } from 'framer-motion';

export default forwardRef(function TextInput(
    { type = 'text', className = '', isFocused = false, ...props },
    ref,
) {
    const localRef = useRef(null);

    useImperativeHandle(ref, () => ({
        focus: () => localRef.current?.focus(),
    }));

    useEffect(() => {
        if (isFocused) {
            localRef.current?.focus();
        }
    }, [isFocused]);

    return (
        <motion.input
            {...props}
            type={type}
            className={
                'glass-effect w-full rounded-lg border border-purple-400/30 bg-purple-900/20 px-4 py-3 text-white placeholder-purple-300/50 shadow-sm transition-all duration-300 focus:border-purple-400 focus:bg-purple-900/30 focus:shadow-lg focus:shadow-purple-500/20 focus:outline-none focus:ring-2 focus:ring-purple-500/50 ' +
                className
            }
            ref={localRef}
            whileFocus={{ scale: 1.01 }}
        />
    );
});

