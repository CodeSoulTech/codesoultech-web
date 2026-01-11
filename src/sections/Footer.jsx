import Container from '../components/Container';

import logo from '../assets/4.svg';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const services = [
        'Web Design',
        'Web Development',
        'Full-Stack Solutions',
        'Graphic Design',
        'Brand Identity'
    ];

    const socials = [

        {
            name: 'LinkedIn', url: 'https://linkedin.com/company/CodeSoulTech', icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                    <circle cx="4" cy="4" r="2" />
                </svg>
            )
        },
        {
            name: 'GitHub', url: 'https://github.com/CodeSoulTech', icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
            )
        },
        {
            name: 'Instagram',
            url: 'https://www.instagram.com/CodeSoulTech?igsh=OWlwZXN3ZGV6eGpy&utm_source=qr',
            icon: (
                <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                >
                    <path d="M7.75 2h8.5C19.55 2 22 4.45 22 7.75v8.5C22 19.55 19.55 22 16.25 22h-8.5C4.45 22 2 19.55 2 16.25v-8.5C2 4.45 4.45 2 7.75 2zm0 1.5C5.29 3.5 3.5 5.29 3.5 7.75v8.5c0 2.46 1.79 4.25 4.25 4.25h8.5c2.46 0 4.25-1.79 4.25-4.25v-8.5c0-2.46-1.79-4.25-4.25-4.25h-8.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm5.25-.75a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                </svg>
            )
        }
    ];

    return (
        <footer className="py-16 border-t border-white/10">
            <Container>
                <div className="grid md:grid-cols-3 gap-12 mb-12">
                    {/* Brand */}
                    <div>
                        <img src={logo} alt="CodeSoulTech" className="w-64 h-auto mb-4" />
                        <p className="text-gray-400 leading-relaxed">
                            Digital experiences that grow brands and drive results.
                        </p>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Services</h4>
                        <ul className="space-y-2">
                            {services.map((service, index) => (
                                <li key={index}>
                                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                        {service}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* Social */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Connect</h4>
                        <div className="flex gap-4">
                            {socials.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 glass glass-hover rounded-full flex items-center justify-center text-gray-400 hover:text-white"
                                    aria-label={social.name}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>


                {/* Bottom */}
                <div className="pt-8 border-t border-white/10 text-center text-gray-400">
                    <p>&copy; {currentYear} CodeSoulTech. All rights reserved.</p>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
