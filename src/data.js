// data.js
// Contains portfolio data for Hero, About, Experience, Eductions, Projects, Skills and Footer sections.

// link data
export const linkData = {
  link: "https://your-resume-link.com" // Replace with your actual resume link
};

// Hero section data
export const heroData = {
  name: "[My Name]",
  role: "Software Engineer",
  tagline: "Building modern, user-friendly web experiences!"
};

// About section text
export const aboutText = `I am a passionate developer with experience in building modern web applications. 
I specialize in frontend development and enjoy creating user-friendly interfaces.`;

// Experience section data: array of job/role objects
export const experienceData = [
  {
    title: 'Frontend Developer',
    company: 'Tech Company',
    date: '2022 - Present',
    description: 'Developed and maintained web applications using React and modern JavaScript.',
    skills: ['React', 'JavaScript', 'HTML', 'CSS']
  },
  {
    title: 'Web Developer',
    company: 'Digital Agency',
    date: '2020 - 2022',
    description: 'Created responsive websites and implemented client-side functionality.',
    skills: ['HTML', 'CSS', 'JavaScript', 'jQuery']
  }
];

// Education section data: array of education objects
export const educationData = [
  {
    degree: 'Bachelor of Science in Computer Science',
    uni: 'Univerity Name',
    date: '2018 - 2022',
    description: `Graduated with honors. 
    Focused on software development and web technologies.`,
  },
];

// Projects section data: array of project objects
export const projectsData = [
  {
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce platform built with React and Node.js.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    github: 'https://github.com/yourusername/ecommerce',
    demo: 'https://ecommerce-demo.com',
    image: 'images/ecommerce.jpg'
  },
  {
    title: 'Task Management App',
    description: 'A task management application with real-time updates.',
    technologies: ['React', 'Firebase', 'Material-UI'],
    github: 'https://github.com/yourusername/task-manager',
    demo: 'https://task-manager-demo.com',
    image: 'images/task-manager.jpg'
  }
];

// Skills section data: array of skill objects with name and proficiency level
export const skillsData = [
  { name: 'React', level: 90 },
  { name: 'JavaScript', level: 85 },
  { name: 'HTML/CSS', level: 95 },
  { name: 'Node.js', level: 80 },
  { name: 'Git', level: 85 }
];

// Footer section data
export const footerData = {
  socialLinks: [
    {
      name: 'GitHub',
      url: 'https://github.com/yourusername',
      icon: 'FaGithub'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/yourusername',
      icon: 'FaLinkedin'
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/yourusername',
      icon: 'FaTwitter'
    }
  ],
  copyright: {
    name: 'Your name'
  }
};