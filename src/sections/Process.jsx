import { motion } from 'framer-motion';
import Container from '../components/Container';

const Process = () => {
    const steps = [
        {
            number: '01',
            title: 'Discover',
            description: 'Deep dive into your business, goals, and target audience to craft the perfect strategy.'
        },
        {
            number: '02',
            title: 'Design',
            description: 'Create stunning, user-centric designs that align with your brand and convert visitors.'
        },
        {
            number: '03',
            title: 'Build',
            description: 'Develop with cutting-edge technologies, clean code, and scalable architecture.'
        },
        {
            number: '04',
            title: 'Launch',
            description: 'Rigorous testing, optimization, and a smooth deployment to bring your vision to life.'
        },
        {
            number: '05',
            title: 'Support',
            description: 'Ongoing maintenance, updates, and strategic guidance as your business grows.'
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
                        Our <span className="text-gradient">Process</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        A proven methodology that delivers exceptional results, every time
                    </p>
                </motion.div>

                {/* Timeline */}
                <div className="max-w-4xl mx-auto">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            className="relative flex gap-8 mb-16 last:mb-0"
                        >
                            {/* Timeline Line */}
                            {index !== steps.length - 1 && (
                                <div className="absolute left-[2.75rem] top-24 w-0.5 h-full bg-gradient-to-b from-accent-500 to-transparent"></div>
                            )}

                            {/* Number Circle */}
                            <div className="relative flex-shrink-0">
                                <div className="w-24 h-24 rounded-full glass flex items-center justify-center border-2 border-accent-500">
                                    <span className="text-3xl font-bold text-gradient">{step.number}</span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex-1 pt-4">
                                <h3 className="text-3xl font-bold mb-4">{step.title}</h3>
                                <p className="text-gray-400 text-lg leading-relaxed">{step.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default Process;
