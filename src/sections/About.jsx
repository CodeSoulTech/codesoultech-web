import { motion } from 'framer-motion';
import Container from '../components/Container';
import Button from '../components/Button';
import codeMonk from '../assets/code-monk2.png';

const About = () => {
    return (
        <section className="py-24 md:py-32 relative overflow-hidden">
            <Container>
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Text Content */}
                    <div className="order-2 lg:order-1">
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-5xl md:text-6xl font-bold mb-8"
                        >
                            We craft <span className="text-gradient">digital souls</span> for brands.
                        </motion.h2>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="space-y-6 text-xl text-gray-400 leading-relaxed"
                        >
                            <p>
                                At CodeSoulTech, we believe that every brand has a unique essence—a soul waiting to be expressed digitally.
                            </p>
                            <p>
                                We are a team of passionate designers, developers, and strategists dedicated to bridging the gap between aesthetic beauty and technical performance. We don't just build websites; we create immersive digital ecosystems that captivate your audience and drive meaningful growth.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="mt-8"
                        >
                            <Button variant="secondary">Meet the Team</Button>
                        </motion.div>
                    </div>

                    {/* Visual Content */}
                    <div className="order-1 lg:order-2 relative">
                        {/* Abstract Shapes */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative z-10"
                        >
                            <div className="relative aspect-square rounded-2xl overflow-hidden glass border-0">
                                <div className="absolute inset-0 bg-accent-500/10 mix-blend-overlay"></div>
                                <img
                                    src={codeMonk}
                                    alt="Team collaborating"
                                    className="w-full h-full object-cover opacity-80 hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </motion.div>

                        {/* Floating Elements */}
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-10 -right-10 w-32 h-32 bg-accent-500/20 rounded-full blur-3xl"
                        ></motion.div>
                        <motion.div
                            animate={{ y: [0, 20, 0] }}
                            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl"
                        ></motion.div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default About;
