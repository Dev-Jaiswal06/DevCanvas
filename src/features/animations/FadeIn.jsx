import { motion } from "framer-motion";

function FadeIn({ children, delay = 0, duration = 0.6 }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration }}
    >
      {children}
    </motion.div>
  );
}

export default FadeIn;
