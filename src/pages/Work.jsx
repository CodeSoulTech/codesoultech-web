import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useMotionValue, useSpring, useMotionTemplate } from 'framer-motion';
import Container from '../components/Container';
import Button from '../components/Button';
import Footer from '../sections/Footer';
import ImageViewer from '../components/ImageViewer';

import imgW from '../assets/Graphic design/W.png';
import imgPragati from '../assets/Graphic design/PRAGATI CLUB - 1.png';
import imgCloud from '../assets/Graphic design/cloud_care-removebg-preview.png';

const Work = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <div className="pt-20 bg-dark-900 min-h-screen overflow-x-hidden">
            <HeroSection />
            <ProjectGrid onSelect={setSelectedImage} />
            <GraphicDesignGrid onSelect={setSelectedImage} />
            <BlueprintProcess />
            <CTASection />
            <Footer />
            <ImageViewer
                isOpen={!!selectedImage}
                image={selectedImage}
                onClose={() => setSelectedImage(null)}
            />
        </div>
    );
};

// 1. Kinetic Typography Hero
const HeroSection = () => {
    const { scrollY } = useScroll();
    const x1 = useTransform(scrollY, [0, 500], [0, 100]); // Reduced travel for mobile
    const x2 = useTransform(scrollY, [0, 500], [0, -100]);

    return (
        <section className="py-24 md:py-48 relative overflow-hidden flex flex-col justify-center min-h-[60vh]">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-100 contrast-150"></div>

            <Container className="relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-8 md:mb-12"
                >
                    <h2 className="text-lg md:text-2xl font-mono text-accent-500 mb-2 md:mb-4">/// OUR WORK</h2>
                    <p className="text-gray-400 max-w-xl text-base md:text-lg">
                        A curated collection of digital experiences. We build with precision, animate with purpose, and design for impact.
                    </p>
                </motion.div>
            </Container>

            {/* Kinetic Text */}
            <div className="w-full overflow-hidden whitespace-nowrap opacity-10 font-black text-[15vw] md:text-[12vw] leading-[0.8]">
                <motion.div style={{ x: x1 }} className="flex gap-4 md:gap-8">
                    <span>SELECTED WORK</span>
                    <span>SELECTED WORK</span>
                </motion.div>
                <motion.div style={{ x: x2 }} className="flex gap-4 md:gap-8 ml-[-20vw]">
                    <span className="text-transparent stroke-white stroke-[1px] md:stroke-[2px]" style={{ WebkitTextStroke: "1px white" }}>CASE STUDIES</span>
                    <span className="text-transparent stroke-white stroke-[1px] md:stroke-[2px]" style={{ WebkitTextStroke: "1px white" }}>CASE STUDIES</span>
                </motion.div>
            </div>
        </section>
    )
}

// 2. Parallax & 3D Tilt Project Grid (Web Dev)
const ProjectGrid = ({ onSelect }) => {
    const projects = [
        {
            id: 1,
            title: 'E-Cell Website',
            desc: 'It is a Full website for entrepreneur cell of a Government college ',
            tags: ['React', 'Three js', 'Supabase'],
            color: 'from-blue-600 to-indigo-900',
            link: 'https://ecellrepo.vercel.app/',
            image: "https://ecellrepo.vercel.app/assets/logo-C93-HMBk.jpeg"
        },
        {
            id: 2,
            title: 'Portfolio',
            desc: 'I developed a portfolio for a full stack web developer',
            tags: ['React', 'Node', 'Framer motion'],
            color: 'from-purple-600 to-pink-900',
            link: 'adityashukla.com', // Coming soon
            image: "https://images.unsplash.com/photo-1545665277-5937489579f2?q=80&w=2670&auto=format&fit=crop"
        },
        {
            id: 3,
            title: 'Abloom Edutech',
            desc: 'Currently I am working on this project and this is for a edutech startup.',
            tags: ['Express', 'Next.js', 'Tailwind', 'MongoDB'],
            color: 'from-emerald-600 to-teal-900',
            link: '',
            image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2732&auto=format&fit=crop"
        },
        {
            id: 4,
            title: 'AI Internship recommendation engine ',
            desc: 'This Project I done for Smart India Hackathon.',
            tags: ['React', 'Scikit', 'pytorch'],
            color: 'from-orange-600 to-red-900',
            link: '',
            image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2664&auto=format&fit=crop"
        }
    ];

    const handleProjectClick = (link) => {
        if (link) {
            window.open(link, '_blank');
        } else {
            alert("Coming Soon");
        }
    };

    return (
        <section className="py-12 md:py-20 bg-dark-900 relative z-20">
            <Container>
                <div className="mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Web Development</h2>
                    <div className="h-1 w-20 bg-accent-500 rounded-full"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-20">
                    {projects.map((project, index) => (
                        <TiltCard
                            key={project.id}
                            project={project}
                            index={index}
                            onClick={() => handleProjectClick(project.link)}
                        />
                    ))}
                </div>
            </Container>
        </section>
    )
}



// 2.5 Graphic Design Grid
const GraphicDesignGrid = ({ onSelect }) => {
    const graphicProjects = [
        {
            id: 'g1',
            title: 'Neon Brand Identity',
            desc: 'Complete brand overhaul including logo, typography, and color palette.',
            tags: ['Branding', 'Logo Design', 'Illustrator'],

            image: imgW
        },
        {
            id: 'g2',
            title: 'Tech Conference Posters',
            desc: 'Series of kinetic posters for a major tech summit.',
            tags: ['Print Design', 'Typography', 'Photoshop'],

            image: imgPragati
        },
        {
            id: 'g3',
            title: 'Social Media Kit',
            desc: 'High-engagement social assets for a lifestyle brand.',
            tags: ['Social Media', 'Marketing', 'Figma'],

            image: imgCloud
        }
    ];


    return (
        <section className="py-12 md:py-20 bg-dark-800 relative z-20 border-t border-white/5">
            <Container>
                <div className="mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Graphic Design</h2>
                    <div className="h-1 w-20 bg-accent-500 rounded-full"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-20">
                    {graphicProjects.map((project, index) => (
                        <TiltCard key={project.id} project={project} index={index} onClick={() => onSelect(project.image)} />
                    ))}
                </div>
            </Container>
        </section>
    )
}

const TiltCard = ({ project, index, onClick }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
    // Parallax effect for "image" - Reduced for mobile
    const y = useTransform(scrollYProgress, [0, 1], [-20, 20]);

    // 3D Tilt Logic
    const x = useMotionValue(0);
    const yTilt = useMotionValue(0);
    const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
    const mouseY = useSpring(yTilt, { stiffness: 500, damping: 100 });

    function handleMouseMove(e) {
        // Disable tilt on mobile touch devices essentially by default interaction usually being click/scroll
        // But for consistency we leave logic but it won't trigger easily on touch scroll
        const rect = e.currentTarget.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        x.set((e.clientX - centerX) / 20);
        yTilt.set((e.clientY - centerY) / 20);
    }

    function handleMouseLeave() {
        x.set(0);
        yTilt.set(0);
    }

    // Transform template for rotate
    const transform = useMotionTemplate`perspective(1000px) rotateX(${-mouseY}deg) rotateY(${mouseX}deg)`;

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`group ${index % 2 === 1 ? 'md:mt-24' : ''}`}
        >
            <motion.div
                onClick={onClick}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{ transform: typeof window !== 'undefined' && window.innerWidth > 768 ? transform : 'none' }} // Disable 3D tilt on mobile
                className="relative aspect-[4/3] rounded-xl md:rounded-2xl overflow-hidden bg-dark-800 border border-white/5 shadow-2xl cursor-pointer"
            >
                {/* Image or Gradient Background */}
                <motion.div
                    style={{ y }}
                    className={`absolute inset-[-10%] ${project.image ? '' : `bg-gradient-to-br ${project.color}`} transition-transform duration-700 group-hover:scale-105`}
                >
                    {project.image && (
                        <div className="absolute inset-0">
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                            {/* Overlay Gradient to ensure text readability */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${project.color} mix-blend-multiply opacity-60 group-hover:opacity-40 transition-opacity duration-500`} />
                        </div>
                    )}
                </motion.div>

                {/* Content Overlay */}
                <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/40 to-transparent">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <h3 className="text-2xl md:text-3xl font-bold mb-2 text-white group-hover:text-accent-400 transition-colors">{project.title}</h3>
                        <div className="flex gap-2 mb-4 flex-wrap">
                            {project.tags.map(tag => (
                                <span key={tag} className="text-[10px] md:text-xs font-mono text-gray-300 border border-white/20 px-2 py-1 rounded-md backdrop-blur-md bg-black/30">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Hover Reveal Button - Visible on mobile tap often, but styled for hover */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 scale-90 group-hover:scale-100">
                    <div className="bg-white/10 backdrop-blur-md text-white px-6 py-3 rounded-full border border-white/20 font-bold tracking-wide hover:bg-white hover:text-black transition-colors">
                        VIEW CASE
                    </div>
                </div>
            </motion.div>

            <p className="mt-4 text-gray-400 font-light text-sm max-w-sm ml-1">{project.desc}</p>
        </motion.div>
    )
}

// 3. Blueprint Process
const BlueprintProcess = () => {
    return (
        <section className="py-20 md:py-32 bg-dark-950 relative overflow-hidden border-t border-white/5">
            {/* Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:30px_30px] md:bg-[size:40px_40px]"></div>

            <Container className="relative z-10">
                <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start">
                    <div className="md:w-1/3 sticky top-32">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">The Blueprint</h2>
                        <p className="text-gray-400 mb-6 md:mb-8 text-sm md:text-base">
                            Our process is built on engineering principles. We don't guess; we calculate, design, and execute.
                        </p>
                        <Button variant="outline" className="w-full md:w-auto">Download Capabilities</Button>
                    </div>

                    <div className="md:w-2/3 grid grid-cols-1 gap-6 md:gap-8 w-full">
                        {[
                            { step: "01", title: "Audit & Analysis", desc: "We deconstruct the problem to understand its core constraints." },
                            { step: "02", title: "Schematic Design", desc: "Wireframing the structural logic before applying visuals." },
                            { step: "03", title: "Atomic Development", desc: "Building modular components for scalability and consistency." },
                            { step: "04", title: "Stress Testing", desc: " Rigorous QA to ensure stability under load." }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group bg-dark-900 border border-white/10 p-6 md:p-8 rounded-xl hover:border-accent-500/50 transition-colors relative"
                            >
                                <div className="absolute top-0 left-0 w-1 h-0 bg-accent-500 group-hover:h-full transition-all duration-300 ease-in-out"></div>
                                <span className="text-accent-500 font-mono text-lg md:text-xl mb-2 block">{item.step}</span>
                                <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3">{item.title}</h3>
                                <p className="text-sm md:text-base text-gray-400">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    )
}


const CTASection = () => {
    return (
        <section className="py-24 md:py-32 text-center relative overflow-hidden bg-white/5">
            <Container className="relative z-10">
                <motion.h2
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-bold mb-8"
                >
                    Ready to <span className="text-gradient">build?</span>
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

export default Work;
