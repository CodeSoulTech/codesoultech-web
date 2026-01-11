import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import Container from '../components/Container';
import Button from '../components/Button';
import ImageViewer from '../components/ImageViewer';

import imgW from '../assets/Graphic design/W.png';
import imgPragati from '../assets/Graphic design/PRAGATI CLUB - 1.png';
import imgCloud from '../assets/Graphic design/cloud_care-removebg-preview.png';

const Work = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [filter, setFilter] = useState('All');

    const projects = [
        {
            id: 1,
            title: 'E-Cell Platform',
            category: 'Web Development',
            link: 'https://ecellrepo.vercel.app/',
            image: 'https://ecellrepo.vercel.app/assets/logo-C93-HMBk.jpeg'
        },
        {
            id: 'g1',
            title: 'Flexywork Studio',
            category: 'Logo Design',
            image: imgW
        },
        {
            id: 3,
            title: 'Portfolio',
            category: 'Web Development',
            link: '',
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80'
        },
        {
            id: 'g2',
            title: 'Pragati Club Poster',
            category: 'Poster Design',
            image: imgPragati
        },

        {
            id: 'g3',
            title: 'Social Media Kit',
            category: 'Graphic Design',
            image: imgCloud
        }
    ];

    const handleProjectClick = (project) => {
        // List of categories that should trigger the lightbox
        const graphicCategories = ['Graphic Design', 'Logo Design', 'Poster Design'];

        if (graphicCategories.includes(project.category)) {
            setSelectedImage(project.image);
        } else {
            // Web Development projects
            if (project.link) {
                window.open(project.link, '_blank');
            } else {
                alert("Coming Soon");
            }
        }
    };

    const categories = ['All', 'Web Development', 'React Development', 'Graphic Design', 'UI/UX Design'];

    const filteredProjects = filter === 'All'
        ? projects
        : projects.filter(project => project.category === filter);

    return (
        <section className="py-24 md:py-32 relative bg-dark-800" id="work">
            <Container>
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-5xl md:text-6xl font-bold mb-6">
                        Featured <span className="text-gradient">Work</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
                        A glimpse into our recent projects and success stories
                    </p>

                    {/* Filters */}
                    <div className="flex flex-wrap justify-center gap-4">
                        {categories.map((cat, index) => (
                            <button
                                key={index}
                                onClick={() => setFilter(cat)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${filter === cat
                                    ? 'bg-accent-600 text-white shadow-lg shadow-accent-500/30'
                                    : 'bg-dark-700 text-gray-400 hover:text-white hover:bg-dark-600'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </motion.div>

                {/* Projects Grid */}
                <motion.div
                    layout
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <AnimatePresence mode='popLayout'>
                        {filteredProjects.map((project) => (
                            <motion.div
                                layout
                                key={project.id}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.4 }}
                                className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer"
                                onClick={() => handleProjectClick(project)}
                            >
                                {/* Image */}
                                <div className="absolute inset-0 bg-dark-700">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                </div>

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/50 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300"></div>

                                {/* Content */}
                                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                    <motion.div
                                        initial={{ y: 20, opacity: 0 }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 0.1 }}
                                    >
                                        <p className="text-accent-500 text-sm font-semibold mb-2">{project.category}</p>
                                        <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0 transform">
                                            <span className="inline-flex items-center text-white font-semibold hover:text-accent-400 transition-colors">
                                                View Case Study
                                                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                                </svg>
                                            </span>
                                        </div>
                                    </motion.div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <Link to="/work">
                        <Button variant="outline">View All Projects</Button>
                    </Link>
                </motion.div>


                <ImageViewer
                    isOpen={!!selectedImage}
                    image={selectedImage}
                    onClose={() => setSelectedImage(null)}
                />
            </Container>
        </section>
    );
};

export default Work;
