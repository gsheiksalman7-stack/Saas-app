'use client'
import { motion } from 'framer-motion'

export default function AnimatedSectionLeft({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.9, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}
