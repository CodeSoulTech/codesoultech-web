import { motion } from 'framer-motion';
import Container from '../components/Container';

const WhyUs = () => {
    const reasons = [
        {
            title: 'Strategy-Driven Design',
            description: 'Every pixel serves a purpose. We blend aesthetics with data-driven insights to create experiences that convert.'
        },
        {
            title: 'Scalable Development',
            description: 'Built to grow with your business. Clean code, modern architecture, and future-proof solutions.'
        },
        {
            title: 'Business-Focused Solutions',
            description: 'We understand your goals. Our solutions drive revenue, engagement, and measurable business outcomes.'
        },
        {
            title: 'Long-Term Support',
            description: 'Your success is our success. Ongoing maintenance, updates, and strategic guidance as you scale.'
        }
    ];

    return (
        <section className="py-32 relative">
            <Container>
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-5xl md:text-6xl font-bold mb-6">
                        Why <span className="text-gradient">CodeSoulTech</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        We're not just developers. We're your strategic partners in digital growth.
                    </p>
                </motion.div>

                {/* Grid */}
                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {reasons.map((reason, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="glass rounded-2xl p-8 border-l-4 border-accent-500"
                        >
                            <h3 className="text-2xl font-bold mb-4">{reason.title}</h3>
                            <p className="text-gray-400 leading-relaxed">{reason.description}</p>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default WhyUs;
