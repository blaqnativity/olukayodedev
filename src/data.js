import react from "./assets/img/reactjs.png";
import frontend from "./assets/img/frontend.png";
import nuxt from "./assets/img/nuxt.png";
import vue from "./assets/img/vue.png";
import promage from "./assets/img/prforce.png";
import rh from "./assets/img/rh.png";
import jerd from "./assets/img/jerdkonsult.png";
import acres from "./assets/img/acresxmanna.png";

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

export const projects = [
  {
    id: 1,
    title: "GOMYCODE Institute",
    slug: "webApp",
    imageUrl: "",
    url: "https://gomycode.com/ng/",
  },
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
