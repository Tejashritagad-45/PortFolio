import { FaDribbble, FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import brightMatterImg from '../assets/Brigthmatter.png'
import brightImg from '../assets/bright.png'
import profileImg from '../assets/profile.avif';
import project1Img from '../assets/project1.avif';
import project2Img from '../assets/project2.avif';
import project3Img from '../assets/project3.avif';
import project4Img from '../assets/project4.avif';
import project5Img from '../assets/project5.avif';
import project6Img from '../assets/project6.avif';
import project7Img from '../assets/project7.avif';
import { FiCpu, FiGitBranch, FiGlobe, FiLayers, FiMonitor, FiSettings, FiSmartphone, FiUploadCloud } from 'react-icons/fi';





export const assets = {
    brightMatterImg,
    brightImg,
    profileImg,
    project1Img,
    project2Img,
    project3Img,
    project4Img,
    project5Img,
    project6Img,
    project7Img,
}

export const navItems = [
    { label: "Home", href: "#home" },
    { label: "Work", href: "#work" },
    { label: "Skills", href: "#skills" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
];

export const socialPlatforms = [
    { icon: FaTwitter, href: '#' },
    { icon: FaGithub, href: 'https://github.com/Tejashritagad-45' },
    { icon: FaLinkedinIn, href: 'https://www.linkedin.com/in/tejashri-tagad-429174398/' },
    { icon: FaDribbble, href: '#' },
];

export const projects = [
    {
        id: 1,
        title: "Web Development",
        description: "Frontend and Backend",
        category: "WEB APP",
        color: "primary",
        image: project1Img,
        link: '#',
        youtube: '#'
    },
    {
        id: 2,
        title: "Recipe Tracker",
        description: "Frontend ",
        category: "Tracker",
        color: "accent",
        image: project2Img,
        link: '#',
        youtube: '#'
    },
    {
        id: 3,
        title: "Todo List",
        description: "Frontend ",
        category: "Todo",
        color: "secondary",
        image: project3Img,
        link: '#',
        youtube: '#'
    },
    {
        id: 4,
        title: "Smart Study Session",
        description: "Frontend",
        category: "WEB3",
        color: "primary",
        image: project4Img,
        link: '#',
        youtube: '#'
    },
    {
        id: 5,
        title: " Image Search Engine",
        description: "Fetching the API and serch Image",
        category: "Search-Bar",
        color: "primary",
        image: brightImg,
        link: 'https://brightmatter.vercel.app/',
        youtube: '#'
    },
    // 

    // {
    //     id: 7,
    //     title: "CloudFlow Platform",
    //     description: "Generated 1,200+ qualified leads through content marketing.",
    //     category: "Digitial-Agency",
    //     color: "primary",
    //     image: project6Img,
    //     link: '#',
    //     youtube: '#'
    // },
    {
        id: 7,
        title: "Web Development",
        description: "Web Development, frontend ",
        category: "WEB APP",
        color: "primary",
        image: project7Img,
        link: '#',
        youtube: '#'
    },
];

export const skills = [
    {
        id: 1,
        title: "Responsive Design",
        description: "HTML5, CSS3, Tailwind CSS",
        icon: FiSmartphone,
    },
    {
        id: 2,
        title: "Frontend Development",
        description: "React.js, JavaScript, HTML5, CSS3, Tailwind CSS",
        icon: FiMonitor,
    },
    {
        id: 3,
        title: "State Management",
        description: "Redux Toolkit, Context API",
        icon: FiLayers,
    },
    {
        id: 4,
        title: "Backend Development",
        description: "Node.js, Express.js, REST APIs, JWT Authentication",
        icon: FiCpu,
    },

    {
        id: 5,
        title: "API Integration",
        description: "REST APIs, Axios, JSON, Authentication",
        icon: FiGlobe,
    },
    {
        id: 6,
        title: "State Management",
        description: "Redux Toolkit, Context API",
        icon: FiLayers,
    },
    {
        id: 7,
        title: "Version Control",
        description: "Git & GitHub",
        icon: FiGitBranch,
    },
    {
        id: 8,
        title: "Deployment",
        description: "Vercel, Render, Netlify",
        icon: FiUploadCloud,
    },
];