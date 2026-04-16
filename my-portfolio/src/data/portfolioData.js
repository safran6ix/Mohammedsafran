export const personalInfo = {
    name: "Alex Morgan",
    title: "Frontend Developer",
    subtitle: "Creating exceptional digital experiences",
    bio: "I'm a passionate frontend developer with 4+ years of experience building responsive and performant web applications. Specialized in React ecosystem and modern JavaScript.",
    email: "alex@example.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    avatar: "https://ui-avatars.com/api/?background=6366f1&color=fff&size=200&name=Alex+Morgan",
    social: {
        github: "https://github.com/yourusername",
        linkedin: "https://linkedin.com/in/yourusername",
        twitter: "https://twitter.com/yourusername",
    }
};

export const projects = [
    {
        id: 1,
        title: "AI-Powered Analytics Dashboard",
        description: "Real-time analytics dashboard with machine learning insights. Features interactive charts and predictive analytics.",
        tech: ["React", "D3.js", "Node.js", "TensorFlow.js"],
        image: "https://via.placeholder.com/600x400/6366f1/white?text=Analytics+Dashboard",
        demo: "https://demo.com",
        code: "https://github.com",
        featured: true
    },
    {
        id: 2,
        title: "E-Commerce Platform",
        description: "Full-featured e-commerce platform with cart, payments, and admin dashboard. Served 10k+ users.",
        tech: ["Next.js", "Stripe", "MongoDB", "Tailwind"],
        image: "https://via.placeholder.com/600x400/10b981/white?text=E-Commerce",
        demo: "https://demo.com",
        code: "https://github.com",
        featured: true
    },
    {
        id: 3,
        title: "Task Management System",
        description: "Collaborative task management with real-time updates, file sharing, and team analytics.",
        tech: ["React", "Firebase", "Material-UI", "Redux"],
        image: "https://via.placeholder.com/600x400/8b5cf6/white?text=Task+Manager",
        demo: "https://demo.com",
        code: "https://github.com",
        featured: false
    }
];

export const skills = {
    frontend: ["React", "Next.js", "TypeScript", "TailwindCSS", "Redux", "Vue.js"],
    backend: ["Node.js", "Express", "Python", "PostgreSQL", "MongoDB"],
    tools: ["Git", "Docker", "AWS", "Figma", "Jest", "Webpack"]
};

export const experiences = [
    {
        id: 1,
        role: "Senior Frontend Developer",
        company: "TechCorp Inc.",
        period: "2022 - Present",
        description: "Leading frontend development for enterprise products, mentoring junior developers, and implementing modern React patterns.",
        achievements: [
            "Improved performance by 40% through code splitting",
            "Led migration from class to functional components",
            "Implemented CI/CD pipeline reducing deployment time"
        ]
    },
    {
        id: 2,
        role: "React Developer",
        company: "StartupHub",
        period: "2020 - 2022",
        description: "Developed and maintained multiple React applications, collaborated with design team, and ensured responsive design.",
        achievements: [
            "Built component library used across 5+ projects",
            "Reduced bundle size by 35%",
            "Increased test coverage to 85%"
        ]
    }
];