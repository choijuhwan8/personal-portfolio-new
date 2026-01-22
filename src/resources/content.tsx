import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Juhwan",
  lastName: "Choi",
  name: `Choi Juhwan`,
  role: "",
  avatar: "/images/IMG_8403.JPG",
  email: "choijuhwan8@gmail.com",
  // location: "Asia/Singapore", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Korean"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  // {
  //   name: "GitHub",
  //   icon: "github",
  //   link: "https://github.com/once-ui-system",
  //   essential: true,
  // },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/juhwan-choi/",
    essential: true,
  },
  // {
  //   name: "Instagram",
  //   icon: "instagram",
  //   link: "https://www.instagram.com/once_ui/",
  //   essential: false,
  // },
  // {
  //   name: "Threads",
  //   icon: "threads",
  //   link: "https://www.threads.com/@once_ui",
  //   essential: true,
  // },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/preview.png",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building bridges between design and code</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Once UI</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/experiences/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
    I’m Choi, a penultimate-year Information Systems student at SMU on the FinTech track, with a growing interest in the intersection of technology and financial services.<Text as="span" size="xl" weight="strong"></Text>
</>
  ),
};
// I’m Choi, a penultimate-year Information Systems student at SMU on the FinTech track, with a growing interest in the intersection of technology and financial services.
const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Hi, I’m Choi, a penultimate-year Information Systems student at SMU pursuing the FinTech track. I’m particularly interested in building and improving financial products, and I enjoy working at the intersection of technology, data, and user experience.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Experiences",
    experiences: [
      {
        company: "Mirae Asset Securities Singapore",
        timeframe: "Aug 2025 - Nov 2025",
        role: "Equity Capital Markets & Digital Assets Intern",
        achievements: [
          <>
            Supported the ECM team in end-to-end IPO research, including market monitoring, peer benchmarking, and analysis of comparable listings across regional and global markets.
          </>,
          <>
            Assisted in the preparation of client-facing pitchbooks and internal briefing materials for fundraising, valuation, and listing strategy discussions. 
          </>,
          <>
            Contributed to firm-wide stablecoin and digital asset strategy initiatives by analyzing and comparing global regulatory regimes, including licensing, custody, and compliance requirements across key jurisdictions.
          </>,
          <>
            Developed a comprehensive strategic roadmap for potential USD/SGD-pegged stablecoin issuance, outlining regulatory compliance pathways, risk considerations, and governance structures.
          </>,
          <>
            Evaluated technology and infrastructure vendors (issuance platforms, custody solutions, and blockchain networks) and compared alternative operating models across issuance, custody, and settlement.
          </>
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
         
        ],
      },
      {
        company: "3rd Infantry Division",
        timeframe: "Nov 2023 - May 2025",
        role: "Personnel Specialist",
        achievements: [
          <>
            Managed personnel records, ensuring accurate and timely documentation for over 100 soldiers, contributing to efficient division operations.Al
          </>,
          <>
            Coordinated and processed enlistment, promotion, and transfer paperwork, streamlining administrative workflows and enhancing unit readiness
          </>,
        ],
        images: [],
      },
      {
        company: "Alpha Impact",
        timeframe: "Mar 2023 - July 2023",
        role: "Software Engineer Intern [Frontend]",
        achievements: [
          <>
            Developed and optimized responsive web applications for a crypto copy trading platform, leveraging HTML, CSS, JavaScript, TypeScript, and React.js to improve user engagement and retention.          
          </>,
          <>
            Enhanced trading experience by designing intuitive, user-friendly interfaces for cryptocurrency traders, applying UI/UX best practices and modern frameworks.          
          </>,
          <>
            Accelerated delivery of crypto features by actively contributing to Agile workflows, including sprint planning, daily stand-ups, and sprint reviews.          
          </>,
          <>
            Demonstrated strong communication skills by collaborating with cross functional teams to deliver high-quality web solutions.
          </>
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Singapore Management University [2021-2027]",
        description: <>Studied Information Systems - FinTech</>,
      },
      {
        name: "St. Andrew's Junior College [2019-2020]",
        description: <>Science - PCME stream</>,
      },
      {
        name: "Sembawang Secondary School [2015-2018]",
        description: <></>,
      },
      {
        name: "Cheongdam Middle School [2014]",
        description: <></>,
      },
      {
        name: "Cheongdam Elementry School [2010-2013]",
        description: <></>,
      },
      {
        name: "Hanyang Elementry School [2008-2010]",
        description: <></>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Skills",
    skills: [
      {
        title: "Programming Languages",
        description: (
          <>Python, JavaScript, Kotlin, SQL.</>
        ),
        tags: [],
        images: [],
      },
      {
        title: "Frameworks & Libraries",
        description: (
          <>React, Vue, Tailwind CSS.</>
        ),
        tags: [],
        images: [],
      },
      {
        title: "Data & Machine Learning",
        description: (
          <>
            Data Analysis, Machine Learning (Regression, Classification, Clustering),
            Excel.
          </>
        ),
        tags: [],
        images: [],
      },
      {
        title: "Databases",
        description: <>MongoDB, Firestore.</>,
        tags: [],
        images: [],
      },
      {
        title: "Systems & DevOps",
        description: <>REST APIs, Docker.</>,
        tags: [],
        images: [],
      },
      {
        title: "Tools & Workflow",
        description: <>Git, GitHub Actions (CI/CD), Android Studio, Jira, Confluence.</>,
        tags: [],
        images: [],
      },
      {
        title: "Languages",
        description: <>English &amp; Korean.</>,
        tags: [],
        images: [],
      },
      {
        title: "Interests",
        description: <>Tennis, Investments, Travelling, Trading.</>,
      
        tags: [],
        images: [],
      },
      // {
      //   title: "Next.js",
      //   description: (
      //     <>Building next gen apps with Next.js + Once UI + Supabase.</>
      //   ),
      //   tags: [
      //     {
      //       name: "JavaScript",
      //       icon: "javascript",
      //     },
      //     {
      //       name: "Next.js",
      //       icon: "nextjs",
      //     },
      //     {
      //       name: "Supabase",
      //       icon: "supabase",
      //     },
      //   ],
      //   // optional: leave the array empty if you don't want to display images
      //   images: [
      //     {
      //       src: "/images/projects/project-01/cover-04.jpg",
      //       alt: "Project image",
      //       width: 16,
      //       height: 9,
      //     },
      //   ],
      // },
    ],
  },
};

const blog: Blog = {
  path: "/projects",
  label: "Projects",
  title: "Projects",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/projects/posts
  // All posts will be listed on the /projects route
};

const work: Work = {
  path: "/experiences",
  label: "Experiences",
  title: "",
  description: `Experience and roles for ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/projects/posts
  // All projects will be listed on the /home and /experiences routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
