"use client";

import { easeInOut, motion } from "framer-motion";

export default function HomeLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <div>
        <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: easeInOut, duration: 1 }}
        >
            <div className="content snap-y snap-mandatory overflow-y-scroll scroll-smooth">
                {children}
            </div>
        </motion.div>
        {modal}
    </div>
  );
}
