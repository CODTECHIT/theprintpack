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
        up: { y: 40, x: 0 },
        down: { y: -40, x: 0 },
        left: { x: 40, y: 0 },
        right: { x: -40, y: 0 }
    }

    return (
        <motion.div
            initial={{
                opacity: 0,
                y: directions[direction].y,
                x: directions[direction].x
            }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
                duration: duration,
                ease: [0.33, 1, 0.68, 1],
                delay
            }}
            className={className}
        >
            {children}
        </motion.div>
    )
}
