import { motion } from 'framer-motion';
import Container from '../components/Container';
import Card from '../components/Card';

const Services = () => {
    const services = [
        {
            icon: (
                <svg className="w-10 h-10 md:w-12 md:h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
            title: 'Web Design & Development',
            description: 'Stunning, conversion-focused websites built with modern technologies and best practices.'
        },

        {
            icon: (
                <svg className="w-10 h-10 md:w-12 md:h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
            ),
            title: 'Brand Identity & Graphic Design',
            description: 'Memorable brand identities and visual assets that resonate with your audience and drive engagement.'
        },

        {
            icon: (
                <svg className="w-10 h-10 md:w-12 md:h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8h2a2 2 0 012 2v7a2 2 0 01-2 2H7l-4 3V5a2 2 0 012-2h9a2 2 0 012 2v3z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 11h3m-3 3h5" />
                </svg>
            ),
            title: 'Social Media Management',
            description: 'We help brands build a consistent and professional presence on social media — focused on credibility, design quality, and long-term growth.'
        }
    ];

    return (
        <section className="py-20 md:py-32 relative">
            <Container>
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 md:mb-20"
                >
                    <h2 className="text-4xl md:text-6xl font-bold mb-4 md:mb-6">
                        What We <span className="text-gradient">Do</span>
                    </h2>
                    <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto px-4">
                        End-to-end digital solutions that transform ideas into impactful experiences
                    </p>
                </motion.div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {services.map((service, index) => (
                        <Card key={index} delay={index * 0.1}>
                            <div className="text-accent-500 mb-4 md:mb-6">{service.icon}</div>
                            <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">{service.title}</h3>
                            <p className="text-sm md:text-base text-gray-400 leading-relaxed">{service.description}</p>
                        </Card>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default Services;
