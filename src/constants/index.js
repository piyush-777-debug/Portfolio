import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";

export const HERO_CONTENT = `Motivated and detail-oriented Frontend Developer with strong proficiency in React.js, Redux Toolkit, JavaScript, and modern UI frameworks. Passionate about building interactive, responsive web applications and eager to contribute to dynamic development teams. Additionally, I have a solid understanding of backend technologies like Node.js and Express.js, which helps me collaborate effectively on full-stack projects.`;

export const ABOUT_TEXT = `I'm a passionate React.js developer completed my Bachelor of Computer Applications from COER University, Roorkee. I specialize in building responsive and interactive user interfaces using React.js, Redux Toolkit, and modern JavaScript (ES6+). I've completed several hands-on projects like a Notes App with centralized state management, a Random Quote Generator using APIs, and a Spotify UI Clone.I enjoy exploring new web technologies and improving my problem-solving skills through DSA and real-world project work. I am actively seeking an opportunity to join a dynamic team where I can contribute, learn, and grow as a frontend developer.`;


export const PROJECTS = [
  {
    title: "Music Mood website",
    image: project1,
    description:
      "Developed a mood-based music streaming application that dynamically filters and displays songs based on user-selected moods (Happy, Sad, Chill, Romantic, Workout).",
    technologies: ["HTML", "CSS", "React", "Axios", "Redux toolkit"],
  },
  {
    title: "Notes Website",
    image: project2,
    description:
      "Developed a scalable notes management system using React and Redux Toolkit with component-driven design and optimized state handling.",
    technologies: ["HTML", "CSS", "React", "Redux toolkit"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML","React","Tailwind CSS"],
  },
  {
    title: "Spotify Clone",
    image: project4,
    description:
      "Develop a Responsive UI Clone look like spotify with flexbox properties",
    technologies: ["HTML", "CSS"],
  },
];

export const CONTACT = {
  address: "Roorkee, Uttarakhand",
  phoneNo: "+91 8630771651 ",
  email: "piyushvermaghga@gmail.com",
};
