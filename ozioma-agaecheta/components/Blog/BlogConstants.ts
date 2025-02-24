export interface BlogCardProps {
    id: number;
    image?: string;
    imageAlt?: string;
    title: string;
    link: string;
    date?: string;
    body?: string;
  }
  
  export const BLOG_IMAGES = [
    "/assets/img1.jpg",
    "/assets/img2.jpg",
    "/assets/img3.jpg",
    "/assets/img4.jpg",
    "/assets/img5.jpg",
    "/assets/img6.jpg",
    "/assets/img7.jpg"
  ];
  
  export const BLOG_CARDS: BlogCardProps[] = [
    {
      id: 6,
      image: "/assets/simple.avif",
      imageAlt: "Picture of the first business proposal i ever wrote.",
      title: "Simple Guide to Classes and Methods in Python.",
      link: "https://magdiel.hashnode.dev/simple-guide-to-classes-and-methods-in-python",
      date: "Dec 11, 2023",
    },
    {
      id: 1,
      image: "/assets/postmortem.avif",
      imageAlt: "Picture of the first postmortem I wrote.",
      title: "Postmortem",
      link: "https://magdiel.hashnode.dev/postmortem",
      date: "Aug 13, 2024",
    },
    {
      id: 2,
      image: "/assets/wellspring.avif",
      imageAlt: "Picture of the first postmortem I wrote.",
      title: "Wellspring: Revolutionizing Patient Management in Healthcare",
      link: "https://magdiel.hashnode.dev/wellspring-revolutionizing-patient-management-in-healthcare",
      date: "01/01/2000",
    },
    {
      id: 3,
      image: "/assets/kbn1.jpg",
      imageAlt: "First KBN Meeting with the Kinfolks.",
      title: "Diary of a Young Entrepreneur Pt 2",
      link: "https://medium.com/@oziomaagaecheta/diary-of-a-young-entrepreneur-pt-2-63721457c9ea",
      date: "Dec 15, 2024",
    },
    {
      id: 4,
      image: "/assets/jeff.webp",
      imageAlt: "Picture of the first business proposal i ever wrote.",
      title: "A Story I would love to tell Pt1.",
      link: "https://medium.com/@oziomaagaecheta/a-story-i-would-love-to-tell-91d8f7e846f3",
      date: "Nov 20, 2024",
    },
    {
      id: 5,
      image: "/assets/meaga.jpg",
      imageAlt: "Picture of the first business proposal i ever wrote.",
      title: "A Story I would love to tell Pt2.",
      link: "https://medium.com/@oziomaagaecheta/a-story-i-would-love-to-tell-2-032d400e2db6",
      date: "Nov 20, 2024",
    },
  ];
  
  export const THEO_CARDS: BlogCardProps[] = [
    {
      id: 6,
      body: "",
      title: "If God Makes People Rich...",
      link: "https://medium.com/@oziomaagaecheta/if-god-makes-people-rich-901b8103f573",
      date: "Aug 9, 2024",
    },
    {
      id: 1,
      body: "",
      title: "Why I Love the Sovereignty of God",
      link: "https://medium.com/@oziomaagaecheta/why-i-love-the-sovereignty-of-god-a1212385f04f",
      date: "Aug 9, 2024",
    },
    {
      id: 2,
      body: "",
      title: "Who Told You That You Were Naked?",
      link: "https://medium.com/@oziomaagaecheta/who-told-you-that-you-were-naked-cf47b40982b4",
      date: "Nov 20, 2024",
    },
    {
      id: 3,
      body: "",
      title: "My Visions of The Nazarene Carpenter",
      link: "https://medium.com/@oziomaagaecheta/my-visions-of-the-nazarene-carpenter-cd97f6e3646f",
      date: "Dec 1, 2024",
    },
    {
      id: 4,
      title: "Things I Have Seen",
      body: "",
      link: "https://medium.com/@oziomaagaecheta/things-i-have-seen-1b1a0d9127d9",
      date: "Nov 27, 2024",
    },
  ];
  
  export const LIFESTYLE_CARDS: BlogCardProps[] = [
    {
      id: 6,
      image: "/assets/Q4.webp",
      imageAlt: "Picture of the first Q4 meeting",
      title: "Q4",
      body: "We then decided we would do this every month, to keep the flames up and the fire brand of friendship stronger.",
      link: "https://medium.com/@oziomaagaecheta/q4-92e79848df79",
      date: "Nov 24, 2024",
    },
  ];
  
  export const OTHER_PROJECTS = [
    {
      title: "Custom Unix Shell",
      link: "www.github.com/magdielian-code/simple_shell",
      description: "View a summary of all your clients over the last month."
    },
    {
      title: "Custom Unix Shell",
      link: "www.github.com/magdielian-code/simple_shell",
      description: "Check out the overview of your clients."
    },
    {
      title: "Custom Unix Shell",
      link: "www.github.com/magdielian-code/simple_shell",
      description: "See a detailed analysis of all your business clients."
    }
  ];