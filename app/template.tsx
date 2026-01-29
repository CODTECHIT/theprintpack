'use client'

import { motion } from 'framer-motion'

export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                ease: [0.33, 1, 0.68, 1], // Custom cubic-bezier for a more "elastic" but professional feel
                duration: 0.7
            }}
            style={{ willChange: 'transform, opacity' }}
        >
            {children}
        </motion.div>
    )
}
