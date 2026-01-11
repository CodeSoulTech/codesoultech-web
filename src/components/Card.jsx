import { motion } from 'framer-motion';

const Card = ({ children, className = '', delay = 0 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            whileHover={{ y: -8, scale: 1.02 }}
            className={`glass glass-hover rounded-2xl p-8 ${className}`}
        >
            {children}
        </motion.div>
    );
};

export default Card;
