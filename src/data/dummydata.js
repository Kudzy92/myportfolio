import { SupportAgent, OnlinePredictionOutlined, DeveloperBoardOutlined, DeveloperModeOutlined, School,  People,PropaneTank,HistoryEdu,Code, AddLocationAltOutlined, PhoneIphone, EmailOutlined, Facebook, Twitter, Instagram, GitHub, LinkedIn } from "@mui/icons-material"

export const navlink = [
  {
    url: "/",
    text: "Home",
  },
  {
    url: "/about",
    text: "About",
  },
  {
    url: "/services",
    text: "Services",
  },
  {
    url: "/portfolio",
    text: "Portfolio",
  },
  {
    url: "/testimonials",
    text: "Testimonials",
  },
  {
    url: "/Experience",
    text: "Experience",
  },
  {
    url: "/contact",
    text: "Contact",
  },
]
export const home = [
  {
  id:'1',
    text: "HELLO I'M",
    name: "KUDZAI MADZIVA",
    post: "FRONT END DEVELOPER",
    design: "FRONT END DEVELOPER",
    desc: "A self taught and design thinking freelance software developer specialising in developing website and mobile applications using Java, ReactJS, JavaScript and Angular and Spring Boot.",
  },
]
export const skills=[
  {
    id:'1',
    name:'Front Web Development',
    percentage:'90', 
  },
  {
    id:'2',
    name:'Backend Web Development',
    percentage:'55', 
  },
  {
    id:'3',
    name:'Mobile apps development',
    percentage:'40', 
  },
  {
    id:'4',
    name:'UI/UX Design',
    percentage:'53',
  },
  {
    id:'5',
    name:'Java',
    percentage:'47',
  }
]
export const about = [
  {
    id:'1',
    desc: "My good name is Kudzai Madziva a both front and backend developer working as freelance developer at the AppHub.I have 4+ years of working experience working as mainly front end , backend developer, ICT support and mathematics teacher in South Africa and Zimbabwe.I hold a Bachelor Degree in Information Technology which is my highest qualification.",
    desc1: "I am willing to join SovTech as a Software Developer because I have a passion in coding and I want to express my creativity through software development and I always wants to be involed with technology since technology is changing the life of people around the world. I am flexible to join and start work anytime and to workevery in South Africa",
    cover: "./images/kudzy-no-bg.png",
  },
]
export const services = [
  {
    id: 1,
    icon: <SupportAgent />,
    title: "24/7 great support",
    desc: "We offer expert and reliable support at any given time and anywhere to our current and pontenial clients.At kudzy we give you peace of mind during day and night.",
  },
  {
    id: 2,
    icon: <OnlinePredictionOutlined />,
    title: "Digital & online marketing",
    desc: "We provide high quality and cost effective plans on digital & online marketing solutions and services for all types of business.",
  },
  {
    id: 3,
    icon: <DeveloperBoardOutlined />,
    title: "Web development",
    desc: "We focus in provision of website applications at any an affordable prices with the aim of producing quality and satisfying our clients.",
  },
  {
    id: 4,
    icon: <DeveloperModeOutlined />,
    title: "Mobile apps development	",
    desc: "We develop custom mobile applications with mordern ui/ux with custom and user friendly ui/ux.",
  },
  {
    id: 5,
    icon: <Code />,
    title: "Web design",
    desc: "Designing user-friendly website with custom feel and look with an objective of achieving our clients objectives.",
  },
  {
    id: 6,
    icon: <School />,
    title: "Physical Science & Maths Tutor",
    desc: "Apart from software production I also love solving mathematical problems.I also provide free pdf with solutions of the past exams papers from different examination boards across the globe.",
  },
]
export const project = [
  {
    id: 1,
    icon: <People />,
    num: "10",
    title: "HAPPY CLIENTS",
  },
 
  {
    id: 2,
    icon: <PropaneTank />,
    num: "15",
    title: "PROJECTS COMPLEATED",
  },
  {
    id: 3,
    icon: <HistoryEdu />,
    num: "5",
    title: "QUALIFICATIONS",
  },
  {
    id: 4,
    icon: <Code />,
    num: "1446",
    title: "LINES OF CODE",
  },
]
export const portfolio = [
  {
    id: 1,
    cover: "../images/port/anniesdesign_banner.jpg",
    name: "Graphics Design",
    category: "marketing",
    title: "Annies design Banner",
    description:"Black friday banner design for Annies design",
    done:"Nov 2022",
    url: 'https://www.instagram.com/anniesdesign1',
  },
  {
    id: 2,
    cover: "../images/port/oslo_pedestal.jpg",
    name: "Grapics Design",
    category: "marketing",
    title: "Annies Design",
    description:"Black friday banner design for Annies design",
    done:"Nov 2022",
    url: 'https://www.instagram.com/anniesdesign1',
  },
  {
    id: 3,
    cover: "../images/port/venvictor_web.png",
    name: "Web Development",
    category: "development",
    title: "venVictor Enginnering",
    description:"venVICTOR enginnering company located in Hillbrow, Johannesburg offers enginnering and construction services.",
    done:"Jun 2022",
    url: 'https://www.venvictor.co.za',
  },
  {
    id: 4,
    cover: "../images/port/farmroadhouse_web.png",
    name: "Web Development",
    category: "development",
    title: "FARMroadHOUSE Website",
    description:"FARMroadHOUSE is a resturant located in Randburg that sale food online.",
    done:"Oct 2022",
    url: 'https://www.farmroadhouse.co.za',
  },
  {
    id: 5,
    cover: "../images/port/anniesdesign_web.png",
    name: "Web Development",
    category: "development",
    title: "AnniesDesign Website",
    description:"Annies Design is furnture shop that is located in Randburg, South Africa offers high quality furniture and furniture reuphostery.",
    done:"Nov 2022",
    url: 'https://www.anniesdesign.co.za',
  },
  {
    id: 6,
    cover: "../images/port/kudzy_web.png",
    name: "Web Development",
    category: "development",
    title: "Kudzy Portfolio Website",
    description:"kudzy.me is the portfolio website that shows the services I offer and my level of education",
    done:"Dec 2021",
    url: 'https://www.kudzy.me',
  },
 
]
export const pricing = [
  {
  planName: "starter plan",
    planType: "Web Design & development",
    nowPrice: "2 500",
    wasPrice: "3 000",
    per: "website",
    badge: '',
    checkedFeatures: [
      '1 - 5 pages website.',
      'Free mantainance up to first 3months.',
      'Contact form included.',
      'Basic SEO included.',
      'Fully responsive to all devices.',
      'Domain and hosting for 1year included.',
      'Delivery in 10 - 14 working days.',
      'Whatsapp live chat link.',
    ],
    unCheckedFeatures: [
      'No admin dashboard.',
      'No live chat.',
      'No payment gateway.',
      'Google business profile excluded',
    ],
  },
  {
    planName: "Online Store",
      planType: "Web Design & development",
      nowPrice: "3 500",
      wasPrice: "4 000",
      per: "website",
      badge: '',
      checkedFeatures: [
        '1 - 6 pages website.',
        'Free mantainance up to first 3 months.',
        'Contact form included.',
        'Medium SEO included.',
        'Product categories included.',
        'Fully responsive to all devices.',
        'Domain and hosting for 1 year included.',
        'Delivery in 12 - 16 working days.',
        'live chat included',
        'Text based logo.',
        'Debit/Credit payment gateway.',
        'Google business profile included.'
      ],
      unCheckedFeatures: [
        'No admin dashboard.',
      ],
    },
    {
      planName: "starter plan",
        planType: "Web Design & development",
        nowPrice: "2 500",
        wasPrice: "3 000",
        per: "website",
        badge: '',
        checkedFeatures: [
          '1 - 5 pages website.',
          'Free mantainance up to first 3months.',
          'Contact form included.',
          'Basic SEO included.',
          'Fully responsive to all devices.',
          'Domain and hosting for 1year included.',
          'Delivery in 10 - 14 working days.',
          'Whatsapp live chat link.',
        ],
        unCheckedFeatures: [
          'No admin dashboard.',
          'No live chat.',
          'No payment gateway.',
          'Google business profile excluded',
        ],
      },
        {
  planName: "starter plan",
    planType: "Web Design & development",
    nowPrice: "2 500",
    wasPrice: "3 000",
    per: "website",
    badge: '',
    checkedFeatures: [
      '1 - 5 pages website.',
      'Free mantainance up to first 3months.',
      'Contact form included.',
      'Basic SEO included.',
      'Fully responsive to all devices.',
      'Domain and hosting for 1year included.',
      'Delivery in 10 - 14 working days.',
      'Whatsapp live chat link.',
    ],
    unCheckedFeatures: [
      'No admin dashboard.',
      'No live chat.',
      'No payment gateway.',
      'Google business profile excluded',
    ],
  },
]
export const testimonials = [
  {
    id: 1,
    text: "Kudzie is person very dedicated to the job.As an experienced developer with knowledge of various technologies, he always to lend a hand and offer guidance.",
    image: "./images/testimonials/user.png",
    name: "Edson Jengwa",
    post: "Senior Software Developer",
    status:"Former Senior Software Developer",
    link_url: "https://www.linkedin.com/in/edson-jengwa-9a404a43"
  },
  {
    id: 2,
    text: "I have  worked with Kudzie for about 1+ years.He is highly skilled engineer,passionate and commited to delivering quality solutions.With his experience and versitile technology,he helped my business to grow.",
    image: "./images/testimonials/user.png",
    name: "Tariro Chimanga",
    post:"IT Specialist",
    status:"Former Supervisor",
    link_url: "https://www.linkedin.com/in/tarior-chimanga-33bba70"
  },
  {
    id: 3,
    text: "Kudzai Madziva is the hard working guy who always make herself busy.I we once worked togther developing projects as freelence developer.",
    image: "./images/testimonials/user.png",
    name: "Monametsi Mosemeng",
    post: "Full Stack Web Developer",
    status:"former workmate",
    link_url: "https://www.linkedin.com/in/monoametsi-mosemeng-704890169"
  },
]

 export const experience = [
  {
    id: '1',
    level: 'GCE ORDINARY LEVEL',
    school_name:'Chinhoyi 2 High School',
    location:'Chinhoyi, Zimbabwe',
    school_url:'#',
    description:'5+ ordinary level passes including Mathematics, Science and English.',
    year:'2009',
    duration:'4 yr'
    
  },
{
  id: '2',
  level: 'IT Support Officer',
  school_name:'Zimbabwe Open University · Internship',
  location:'Chinhoyi, Zimbabwe',
  school_url:'https://www.zou.ac.zw',
  description:'Network adminstration.Implements computer security measures.Offer technical support to company staff and troubleshoot computer problems.Review diagnostic, assess the functionality and efficiency of the system',
  year:'2017',
    duration:'1 yr'
},
{
  id: '3',
  level: 'GCE ADVANCED LEVEL',
  school_name:'Chinhoyi 2 High School',
  location:'Chinhoyi, Zimbabwe',
  school_url:'#',
  description:'3+ advanced level passes including Mathematics.',
  year:'2011',
  duration:'2 yr' 
},
{
  id: '4',
  level: 'ICT Support',
  school_name:'Delta Beverages Pvt Ltd · Full-time',
  location:'Harare, Zimbabwe',
  school_url:'https://www.delta.co.zw',
  description:'Configuring and testing SAP and all Sales Distribution (SD) applications.GPS route optimisations and support.Offer technical support to company staff and troubleshoot computers problem.',
  year:'2020',
    duration:'1 yr 2 mos'
},
{
  id: '5',
  level: 'HONORS DEGREE IN IT (BSIT)',
  school_name:'Chinhoyi University Of Technology',
  location:'',
  school_url:'https://www.cut.ac.zw',
  description:'Passed.',
  year:'2018',
  duration:'4 yr' 
},
{
  id: '6',
  level: 'Front end web designer & developer',
  school_name:'Edsonj pvt · Part-time',
  location:'Randburg, Gauteng, South Africa',
  school_url:'#',
  description:'Optimisations of web presentation. Client side development with HTML, CSS, JavaScript and reactJS. Ensure web browser compatibility for the websites. Ensure website responsiveness on every device.',
  year:'2022',
    duration:'8 mos'
},
{
  id: '7',
  level: 'Full Stack Web Developer',
  school_name:'appHUB · Freelance',
  location:'Gauteng, South Africa',
  school_url:'https://www.apphub.co.za',
  description:'Full stack website and mobile website developer and design.Designing and developing front end web architecture.Defining code architecture to support high performance product.Troubleshoot pages and SEO performance and optimisations.',
  year:'Present',
    duration:'2yr'
},
]

export const contact = [
  {
    id:'1',
    icon: <AddLocationAltOutlined />,
    text1: "92 Roikrains, Bloubosrand, Randburg,",
    text2: "Joburg, South Africa",
  },
  {
    id:'2',
    icon: <PhoneIphone />,
    text1: "+27 814 050 806",
    text2: "+263 778 472 510",
  },
  {
    id:'3',
    icon: <EmailOutlined />,
    text1: "kudziemadziva@gmail.com",
    text2: "contact@kudzy.me",
  },
]
export const social = [
  {
    id:'1',
    icon: <Facebook />,
    url:'https://www.facebook.com/kudzaimadziva',
  },
  {
    id:'2',
    icon: <Twitter />,
    url:'https://www.twitter.com/kudzaimadziva',
  },
  {
    id:'3',
    icon: <Instagram />,
    url:'https://www.instagram.com/kudzaimadziva',
  },
  {
    id:'4',
    icon: <LinkedIn />,
    url:'https://www.linkedin.com/in/kudzaimadziva',
  },
  {
    id:'5',
    icon: <GitHub />,
    url:'https://www.github.com/kudzy92',
  },
]
