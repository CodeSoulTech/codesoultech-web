import { motion } from 'framer-motion';

const Button = ({ children, variant = 'primary', onClick, className = '' }) => {
    const baseStyles = 'px-8 py-4 rounded-lg font-semibold text-base transition-all duration-300 relative overflow-hidden';

    const variants = {
        primary: 'bg-accent-500 hover:bg-accent-600 text-white shadow-lg shadow-accent-500/50 hover:shadow-accent-500/70',
        secondary: 'glass glass-hover text-white'
    };

    return (
        <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className={`${baseStyles} ${variants[variant]} ${className}`}
            onClick={onClick}
        >
            <span className="relative z-10">{children}</span>
            {variant === 'primary' && (
                <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-accent-600 to-blue-600"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                />
            )}
        </motion.button>
    );
};

export default Button;
