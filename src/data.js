import react from "./assets/img/reactjs.png";
import frontend from "./assets/img/frontend.png";
import nuxt from "./assets/img/nuxt.png";
import vue from "./assets/img/vue.png";
import promage from "./assets/img/prforce.png";
import rh from "./assets/img/rh.png";
import jerd from "./assets/img/jerdkonsult.png";
import acres from "./assets/img/acresxmanna.png";
import utybe from "./assets/img/utybe.jpeg";
import lase from "./assets/img/lase.jpeg";
import productsbyMyke from "./assets/img/productsbyMyke.jpeg";
import {
  FaCode,
  FaFigma,
  FaGlobe,
  FaPen,
  FaRocket,
  FaWordpress,
} from "react-icons/fa";

// blog posts data start
export const posts = [
  {
    id: 1,
    title: "Mastering React Forms with a State Object: My Personal Experience",
    author: "Olukayode Asemudara",
    content:
      "As a frontend developer constantly learning and building, one of my recent tasks was to create a form in React where multiple input fields were all tied to a single state object. Simple in theory, but I discovered a few powerful patterns that made the process clean, scalable, and easy to manage — and I’d love to share my experience here.",
    date: "Posted on Apr 8",
    postUrl:
      "https://dev.to/theolukayodeasemudara/mastering-react-forms-with-a-state-object-my-personal-experience-3a69",
    imageUrl: react,
  },
  {
    id: 2,
    title: "A Technical Article about front-end technologies.",
    author: "Olukayode Asemudara",
    content:
      "In the ever-evolving landscape of web development, frontend technologies have seen a dramatic transformation over the past few decades. From the static web pages of the early internet to the dynamic, interactive, and highly responsive applications we use today, frontend technologies have played a crucial role in shaping user experiences. This article takes you through the journey of frontend technologies, highlighting key milestones and the modern tools that are driving innovation in the field.",
    date: "Posted on Mar 3, 2024",
    postUrl:
      "https://dev.to/theolukayodeasemudara/a-technical-article-about-front-end-technologies-4dh6",
    imageUrl: frontend,
  },
  {
    id: 3,
    title:
      "programmatically displaying nav menu from an array and binding to its url property",
    author: "Olukayode Asemudara",
    content:
      "In a recent Vue.js/Nuxt.js project, the initial challenge I encountered was with the navigation menu links not functioning correctly despite being correctly bound. After thorough debugging and troubleshooting, I successfully resolved the issue with the following steps:",
    date: "Posted on Mar 3, 2024",
    postUrl:
      "https://dev.to/theolukayodeasemudara/programmatically-displaying-nav-menu-from-an-array-and-binding-to-its-url-property-2nhl",
    imageUrl: vue,
  },
  {
    id: 4,
    title: "Your first Nuxt-3 App",
    author: "Olukayode Asemudara",
    content:
      "Slots allow you to pass content from a parent component to a child component. They are useful when you want to create reusable components that can accept different content depending on where they are used. In Nuxt 3, slots are defined in the child component using <slot></slot> tags. The content provided by the parent component is then inserted into these slots.",
    date: "Posted on Mar 3, 2024",
    postUrl:
      "https://dev.to/theolukayodeasemudara/slots-vs-props-in-nuxt-3-34h8",
    imageUrl: nuxt,
  },
];
// blog posts data end

// projects data start
export const projects = [
  // {
  //   id: 1,
  //   title: "GOMYCODE Institute",
  //   slug: "webApp",
  //   imageUrl: "",
  //   url: "https://gomycode.com/ng/",
  // },
  {
    id: 2,
    title: "The Rootshive",
    slug: "webApp",
    imageUrl: rh,
    url: "https://therootshive.com/",
  },
  {
    id: 3,
    title: "Promage Force",
    slug: "wordpress",
    imageUrl: promage,
    url: "http://promageforce.com/",
  },
  {
    id: 4,
    title: "Acresmanna",
    slug: "wordpress",
    imageUrl: acres,
    url: "https://acresxmanna.com/",
  },
  {
    id: 5,
    title: "Jerd Konsult",
    slug: "wordpress",
    imageUrl: jerd,
    url: "https://jerdkonsultrecruitment.de/",
  },
];
// projects data end

// resume data start
export const resume = [
  {
    company: "GOMYCODE",
    role: "Frontend Developer",
    date: "February 2025 - PRESENT",
    description:
      "Designed and implemented user-friendly UI components, enhancing overall usability and accessibility. Collaborated with backend developers to integrate RESTful APIs, ensuring seamless data flow and dynamic content rendering. Conducted code reviews and provided constructive feedback to junior developers, fostering a culture of continuous improvement and knowledge sharing",
  },
  {
    company: "CrayonCo (Freelance)",
    role: "Wordpress Developer",
    date: "Sept 2023 - Present",
    description:
      "Built custom WordPress websites, ensuring they met client expectations for branding, functionality, and user experience. Implemented WooCommerce and payment gateway integrations, enabling seamless e-commerce functionality. Optimized websites for faster performance, enhanced security, and mobile responsiveness",
  },
  {
    company: "The Rootshive",
    role: "Frontend Developer (Intern)",
    date: "April 2023 - January 2024",
    description:
      "Developed and maintained PHP-based web applications using Bootstrap to create responsive and visually appealing UIs. Worked with backend developers to integrate dynamic content and APIs into frontend interfaces, ensuring seamless functionality",
  },
];
// resume data end

// testimonials data start
export const testimonials = [
  {
    id: 1,
    name: "Utybe",
    note: "Kayode does well at replicating exact Figma designs that he is given for any project, and he ensures that his tasks are timely delivered.",
    portfolio: "UI/UX Designer",
    imageUrl: utybe,
  },
  {
    id: 2,
    name: "ProductsByMike",
    note: "Kay is always there to help out with any task that is given to him, and he is a great team player. Man loves learning new things.",
    portfolio: "UI/UX Designer & CEO (CarayonCo)",
    imageUrl: productsbyMyke,
  },
  {
    id: 3,
    name: "Toluwase Ogunde",
    note: "Man is always in the habit of using big grammars whenever we are having a call, but above it all, he is a great guy.",
    portfolio: "Fullstack Developer & CEO (TheRootsHive)",
    imageUrl: lase,
  },
];
// testimonials data end

// services data start
export const services = [
  {
    id: 1,
    title: "Frontend Development",
    icon: FaCode,
    description:
      "I create responsive websites that allow the user to experience your website in the best and most apporpriate way suited to the device they are using.",
  },
  {
    id: 2,
    title: "UI/UX Design",
    icon: FaFigma,
    description:
      "I create user-friendly interfaces that enable users to understand how to use complex technical products.",
  },
  {
    id: 3,
    title: "Web Design",
    icon: FaGlobe,
    description:
      "I have excellent understanding of graphic design, color schemes, button design, interface design, photoshop/ illustrator, navigational design, and typography.",
  },
  {
    id: 4,
    title: "Wordpress Site Development",
    icon: FaWordpress,
    description:
      "In many projects, my client’s require the ability to manage the content of their website. WordPress is the world’s most popular content management system which I have many years of experience with.",
  },
  {
    id: 5,
    title: "Technical Writing",
    icon: FaPen,
    description:
      "I write technical articles on various topics, including frontend technologies, web development, and programming languages.",
  },
  {
    id: 6,
    title: "SEO Optimization",
    icon: FaRocket,
    description:
      "I optimize websites for search engines to improve visibility and ranking, ensuring that your site reaches its target audience effectively.",
  },
];
