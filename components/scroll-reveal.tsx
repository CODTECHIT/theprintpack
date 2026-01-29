'use client'

import { motion } from 'framer-motion'

interface ScrollRevealProps {
    children: React.ReactNode
    className?: string
    delay?: number
    direction?: 'up' | 'down' | 'left' | 'right'
    duration?: number
}

export function ScrollReveal({
    children,
    className = '',
    delay = 0,
    direction = 'up',
    duration = 0.8
}: ScrollRevealProps) {
    const directions = {
        up: { y: 20, x: 0 },
        down: { y: -20, x: 0 },
        left: { x: 20, y: 0 },
        right: { x: -20, y: 0 }
    }

    return (
        <motion.div
            initial={{
                opacity: 0,
                y: directions[direction].y,
                x: directions[direction].x
            }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            viewport={{ once: true, margin: "-10px" }}
            transition={{
                duration: 0.4,
                ease: "easeOut",
                delay
            }}
            style={{ willChange: 'transform, opacity' }}
            className={className}
        >
            {children}
        </motion.div>
    )
}
