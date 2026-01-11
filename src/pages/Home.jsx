import { motion } from 'framer-motion';
import Hero from '../sections/Hero';
import Services from '../sections/Services';
import WhyUs from '../sections/WhyUs';
import Work from '../sections/Work';
import Process from '../sections/Process';
import CTA from '../sections/CTA';
import Footer from '../sections/Footer';

const Home = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="overflow-x-hidden w-full"
        >
            <Hero />
            <Services />
            <WhyUs />
            <Work />
            <Process />
            <CTA />
            <Footer />
        </motion.div>
    );
};

export default Home;
