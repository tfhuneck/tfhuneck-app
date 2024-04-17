'use client'

import { easeInOut, motion } from "framer-motion"

export default function Transition({
    children,
  }: {
    children: React.ReactNode
  }){

    return(
        <motion.div
            initial={{ x: -50, opacity: 0}}
            animate={{ x: 0, opacity: 1}}
            exit={{ x: -50, opacity: 0}}
            transition={{ ease: easeInOut, duration: 1}}
        >
            {children}
        </motion.div>
    )
}