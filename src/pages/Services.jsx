import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionTemplate, useMotionValue } from 'framer-motion';
import { Link } from 'react-router-dom';
import Container from '../components/Container';
import Button from '../components/Button';
import Footer from '../sections/Footer';

const Services = () => {
    return (
        <div className="pt-20 bg-dark-900 min-h-screen">
            <HeroSection />
            <ServicesProtocol />
            <CircuitProcess />
            <NetworkAudience />
            <CTASection />
            <Footer />
        </div>
    );
};

// ... (HeroSection remains unchanged, so we won't include it in this replacement chunk if we can target specifically, but since I need to change Services component wrapper and ServicesProtocol, I might need separate edits or a big one. Let's do separate edits for safety if possible, or careful targeting.)
// Actually, I can target the Services component and ServicesProtocol component separately.
// Let's first update the Services component wrapper.


// 1. Hero Section with Mouse Follower
const HeroSection = () => {
    let mouseX = useMotionValue(0);
    let mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }) {
        let { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <section
            className="min-h-[70vh] md:min-h-[80vh] flex items-center relative overflow-hidden"
            onMouseMove={handleMouseMove}
        >
            {/* Interactive Background */}
            <div className="absolute inset-0 bg-dark-900">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
                <motion.div
                    className="absolute bg-accent-500/20 rounded-full blur-[80px] md:blur-[100px] pointer-events-none"
                    style={{
                        width: 300,
                        height: 300,
                        x: useTransform(mouseX, value => value - 150),
                        y: useTransform(mouseY, value => value - 150),
                    }}
                />
            </div>

            <Container className="relative z-10">
                <div className="max-w-4xl">
                    <motion.div
                        initial="initial"
                        animate="animate"
                        transition={{ staggerChildren: 0.1 }}
                    >
                        <div className="overflow-hidden mb-2">
                            <motion.h1
                                variants={{ initial: { y: "100%" }, animate: { y: 0 } }}
                                transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                                className="text-5xl sm:text-6xl md:text-8xl font-black leading-none"
                            >
                                DIGITAL
                            </motion.h1>
                        </div>
                        <div className="overflow-hidden mb-6 md:mb-8">
                            <motion.h1
                                variants={{ initial: { y: "100%" }, animate: { y: 0 } }}
                                transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                                className="text-5xl sm:text-6xl md:text-8xl font-black leading-none text-transparent bg-clip-text bg-gradient-to-r from-accent-500 to-purple-500"
                            >
                                CANVAS
                            </motion.h1>
                        </div>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="text-lg md:text-2xl text-gray-400 font-light max-w-2xl border-l-2 border-accent-500 pl-4 md:pl-6"
                        >
                            We paint with code. We sculpt with strategy. <br className="hidden md:block" />
                            Services designed to turn "users" into "believers".
                        </motion.p>
                    </motion.div>
                </div>
            </Container>
        </section>
    )
}

// 2. Services Protocol (Sticky Scroll - Replacement for List)
const ServicesProtocol = () => {
    const services = [
        {
            id: '01',
            title: "Web Design",
            subtitle: "Visual Identity",
            desc: "Crafting the visual soul of your brand with pixel-perfect precision. We focus on usability, aesthetics, and interaction design to create immersive digital experiences.",
            tags: ["UI/UX", "Design Systems", "Prototyping", "Motion Design"]
        },
        {
            id: '02',
            title: "Development",
            subtitle: "System Architecture",
            desc: "Engineering robust, scalable systems that power your growth. We write clean, modern code that is fast, secure, and easy to maintain.",
            tags: ["React", "Node.js", "API Integration", "Database Design"]
        },
        {
            id: '03',
            title: "Social Media",
            subtitle: "Brand Voice",
            desc: "Amplifying your voice in the digital noise with clarity. We create strategic content calendars and manage your community to build lasting engagement.",
            tags: ["Strategy", "Content Creation", "Community Management", "Analytics"]
        },
        {
            id: '04',
            title: "Content",
            subtitle: "Storytelling",
            desc: "Words that convert. Stories that resonate. Narratives that stick. We craft compelling copy that aligns with your brand's tone and business goals.",
            tags: ["Copywriting", "SEO Optimization", "Blog Strategy", "Email Marketing"]
        }
    ];

    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end end"]
    });

    return (
        <section ref={targetRef} className="bg-dark-900 border-t border-white/5 relative z-10 py-20">
            <Container>
                <div className="flex flex-col md:flex-row gap-12 lg:gap-24">
                    {/* Left Column: Sticky Header */}
                    <div className="md:w-1/3 md:h-screen md:sticky md:top-0 flex flex-col justify-center py-10">
                        <div>
                            <p className="text-accent-500 text-xs md:text-sm font-mono mb-2">/// CAPABILITIES</p>
                            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                                Service <br className="hidden md:block" />
                                <span className="text-accent-500">Offerings</span>
                            </h2>
                            <p className="text-lg md:text-xl text-gray-400 mb-8 md:mb-12">
                                Core modules designed for <br className="hidden md:block" />
                                maximum impact.
                            </p>

                            {/* Simple Progress Indicator */}
                            <div className="relative h-1.5 w-full bg-white/10 rounded-full overflow-hidden hidden md:block">
                                <motion.div
                                    style={{ scaleX: scrollYProgress }}
                                    className="absolute inset-0 bg-accent-500 origin-left"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Scrolling Cards */}
                    <div className="md:w-2/3 py-10 md:py-24 space-y-24">
                        {services.map((service, index) => (
                            <ServiceCard key={service.id} data={service} index={index} />
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}

const ServiceCard = ({ data, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.5 }}
            className="group relative"
        >
            <div className="absolute -left-3 -top-3 w-full h-full border border-accent-500/20 rounded-2xl md:hidden"></div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 md:p-12 rounded-2xl relative overflow-hidden hover:border-accent-500/50 transition-colors duration-500">
                <div className="absolute top-0 right-0 p-4 md:p-8 opacity-5 font-black text-6xl md:text-9xl select-none pointer-events-none text-white">
                    {data.id}
                </div>

                <h4 className="text-accent-500 font-mono text-xs md:text-sm mb-2">{data.subtitle}</h4>
                <h3 className="text-2xl md:text-3xl lg:text-5xl font-black mb-4 md:mb-6 text-white">{data.title}</h3>
                <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6 md:mb-8 max-w-xl">
                    {data.desc}
                </p>

                <div className="flex flex-wrap gap-2">
                    {data.tags.map((t) => (
                        <span key={t} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] md:text-xs font-medium text-gray-400 uppercase tracking-wide group-hover:border-accent-500/30 transition-colors">
                            {t}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    )
}

// 3. Circuit Flow Process
const CircuitProcess = () => {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start center", "end center"]
    });

    const steps = [
        "Strategy", "Design", "Development", "Launch", "Support"
    ];

    return (
        <section ref={sectionRef} className="py-20 md:py-32 relative overflow-hidden bg-black">
            <Container>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-center mb-16 md:mb-24 relative z-10"
                >
                    <h2 className="text-4xl md:text-5xl font-bold">The Circuit</h2>
                    <p className="text-gray-500 mt-2">Powering your project from start to finish.</p>
                </motion.div>

                <div className="relative max-w-4xl mx-auto min-h-[600px]">
                    {/* SVG Path */}
                    <svg className="absolute top-0 left-0 w-full h-full pointer-events-none" style={{ overflow: 'visible' }}>
                        {/* Desktop Path */}
                        <motion.path
                            className="hidden md:block"
                            d="M 50,0 Q 50,100 200,100 T 450,200 T 200,300 T 450,400 T 50,550"
                            fill="none"
                            stroke="#333"
                            strokeWidth="4"
                        />
                        <motion.path
                            className="hidden md:block"
                            d="M 50,0 Q 50,100 200,100 T 450,200 T 200,300 T 450,400 T 50,550"
                            fill="none"
                            stroke="#6366f1"
                            strokeWidth="4"
                            style={{ pathLength: scrollYProgress }}
                        />

                        {/* Mobile Path (Straight Line) */}
                        <motion.line
                            className="md:hidden"
                            x1="50%" y1="0" x2="50%" y2="100%"
                            stroke="#333"
                            strokeWidth="4"
                        />
                        <motion.line
                            className="md:hidden"
                            x1="50%" y1="0" x2="50%" y2="100%"
                            stroke="#6366f1"
                            strokeWidth="4"
                            style={{ pathLength: scrollYProgress }}
                        />
                    </svg>

                    {/* Nodes - Responsive Positioning */}
                    <div className="absolute top-[20px] left-1/2 -translate-x-1/2 md:translate-x-0 md:left-[20px] md:top-[-20px]">
                        <ProcessNode index={0} title="Strategy" />
                    </div>
                    <div className="absolute top-[130px] left-1/2 -translate-x-1/2 md:translate-x-0 md:left-[220px] md:top-[80px]">
                        <ProcessNode index={1} title="Design" />
                    </div>
                    {/* Note: This node was right-aligned on desktop */}
                    <div className="absolute top-[240px] left-1/2 -translate-x-1/2 md:translate-x-0 md:left-auto md:right-[220px] md:top-[180px]">
                        <ProcessNode index={2} title="Development" />
                    </div>
                    <div className="absolute top-[350px] left-1/2 -translate-x-1/2 md:translate-x-0 md:left-[220px] md:top-[280px]">
                        <ProcessNode index={3} title="Launch" />
                    </div>
                    <div className="absolute top-[460px] left-1/2 -translate-x-1/2 md:translate-x-0 md:left-[20px] md:top-[530px]">
                        <ProcessNode index={4} title="Support" />
                    </div>
                </div>
            </Container>
        </section>
    )
}

const ProcessNode = ({ index, title }) => {
    return (
        <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ margin: "-100px" }}
            transition={{ delay: index * 0.2 }}
            className="flex items-center gap-4 bg-dark-900 border border-white/20 px-6 py-3 rounded-full shadow-2xl relative z-10"
        >
            <div className="w-3 h-3 bg-accent-500 rounded-full animate-pulse"></div>
            <span className="font-bold text-xl">{title}</span>
        </motion.div>
    )
}


// 4. Network Topology Audience (FIXED COORDINATES & MOBILE SCALING)
const NetworkAudience = () => {
    return (
        <section className="py-20 md:py-24 bg-dark-800 overflow-hidden relative">
            <Container className="text-center relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Built For</h2>
                <p className="text-gray-400 mb-12 md:mb-16 max-w-xl mx-auto text-sm md:text-base">We integrate seamlessly with partners of all scales.</p>

                <div className="relative h-[300px] md:h-[400px] max-w-3xl mx-auto">

                    {/* Network Lines */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none stroke-current text-white/10 z-0">
                        <motion.line x1="50%" y1="50%" x2="20%" y2="20%" strokeWidth="2" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1 }} />
                        <motion.line x1="50%" y1="50%" x2="80%" y2="20%" strokeWidth="2" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.2 }} />
                        <motion.line x1="50%" y1="50%" x2="20%" y2="80%" strokeWidth="2" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.4 }} />
                        <motion.line x1="50%" y1="50%" x2="80%" y2="80%" strokeWidth="2" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.6 }} />
                    </svg>

                    {/* Central Node */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            className="w-24 h-24 md:w-32 md:h-32 bg-dark-900 border-2 border-accent-500 rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(99,102,241,0.3)] relative z-10"
                        >
                            <span className="font-bold text-base md:text-xl text-white">CodeSoul</span>
                        </motion.div>
                        <div className="absolute inset-0 bg-accent-500/20 rounded-full animate-ping z-0"></div>
                    </div>

                    {/* Satellite Nodes */}
                    {[
                        { text: "Startups", left: "20%", top: "20%" },
                        { text: "Enterprise", left: "80%", top: "20%" },
                        { text: "Agencies", left: "20%", top: "80%" },
                        { text: "Creators", left: "80%", top: "80%" },
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 + (i * 0.2) }}
                            className="absolute z-10"
                            style={{ left: item.left, top: item.top, transform: "translate(-50%, -50%)" }}
                        >
                            <div className="w-20 h-20 md:w-24 md:h-24 bg-dark-800 border border-white/20 rounded-full flex items-center justify-center hover:border-accent-500/50 hover:bg-white/5 transition-all text-xs md:text-sm font-medium text-gray-300 backdrop-blur-sm">
                                {item.text}
                            </div>
                        </motion.div>
                    ))}

                </div>
            </Container>
        </section>
    )
}

const CTASection = () => {
    return (
        <section className="py-24 md:py-32 text-center relative overflow-hidden">
            <Container className="relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-bold mb-8"
                >
                    Let’s discuss your <span className="text-gradient">project.</span>
                </motion.h2>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center"
                >
                    <Link to="/contact" className="w-full sm:w-auto">
                        <Button variant="primary" className="w-full sm:w-auto">Start a Project</Button>
                    </Link>
                </motion.div>
            </Container>
        </section>
    )
}

export default Services;
