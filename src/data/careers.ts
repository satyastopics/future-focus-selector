import { CareerCluster } from "./careerClusters";

export interface Career {
  id: string;
  title: string;
  description: string;
  clusterId: string;
  isHighIncome: boolean;
  isFutureReady: boolean;
  skills: string[];
  roadmap: string[];
}

export const careers: Career[] = [
  // Technology & Computing
  {
    id: "software-developer",
    title: "Software Developer",
    description: "Create computer programs and apps that people use every day. You solve problems using code and build digital tools.",
    clusterId: "technology",
    isHighIncome: true,
    isFutureReady: true,
    skills: ["Coding", "Problem-solving", "Logical thinking", "Creativity", "Attention to detail"],
    roadmap: [
      "Learn basic coding with free online courses",
      "Practice by building your own small projects",
      "Take computer science courses in college",
      "Build a portfolio of projects to show employers",
      "Apply for internships to gain experience"
    ]
  },
  {
    id: "cybersecurity-analyst",
    title: "Cybersecurity Analyst",
    description: "Protect computer systems from hackers and viruses. You find security problems and fix them before bad people can use them.",
    clusterId: "technology",
    isHighIncome: true,
    isFutureReady: true,
    skills: ["Security awareness", "Problem-solving", "Attention to detail", "Critical thinking", "Communication"],
    roadmap: [
      "Learn basic computer networking concepts",
      "Study cybersecurity fundamentals online",
      "Practice ethical hacking in safe environments",
      "Get certified in security (like CompTIA Security+)",
      "Take internships in IT departments"
    ]
  },
  {
    id: "data-scientist",
    title: "Data Scientist",
    description: "Study large amounts of information to find patterns and help businesses make better decisions using math and computers.",
    clusterId: "technology",
    isHighIncome: true,
    isFutureReady: true,
    skills: ["Statistics", "Programming", "Problem-solving", "Communication", "Critical thinking"],
    roadmap: [
      "Build strong math and statistics foundation",
      "Learn programming languages like Python or R",
      "Practice analyzing real datasets",
      "Take courses in machine learning",
      "Create data projects to showcase your skills"
    ]
  },
  {
    id: "ai-specialist",
    title: "AI Specialist",
    description: "Create smart computer systems that can learn and make decisions. You teach computers to recognize patterns and solve problems like humans.",
    clusterId: "technology",
    isHighIncome: true,
    isFutureReady: true,
    skills: ["Programming", "Math", "Problem-solving", "Critical thinking", "Research"],
    roadmap: [
      "Build strong foundation in math and statistics",
      "Learn programming with Python or similar languages",
      "Study machine learning fundamentals",
      "Take specialized AI courses",
      "Work on AI projects to build portfolio"
    ]
  },
  {
    id: "cloud-architect",
    title: "Cloud Architect",
    description: "Design how computer systems work together over the internet. You help businesses store their information and run their programs online.",
    clusterId: "technology",
    isHighIncome: true,
    isFutureReady: true,
    skills: ["System design", "Problem-solving", "Programming", "Security awareness", "Communication"],
    roadmap: [
      "Learn basics of networking and operating systems",
      "Study cloud platforms like AWS, Azure, or Google Cloud",
      "Get cloud certifications",
      "Gain experience with virtualization technologies",
      "Practice building cloud solutions"
    ]
  },
  
  // Healthcare & Medicine
  {
    id: "doctor",
    title: "Doctor",
    description: "Help sick people get better by figuring out what's wrong and giving the right treatment. You work with patients directly.",
    clusterId: "healthcare",
    isHighIncome: true,
    isFutureReady: true,
    skills: ["Medical knowledge", "Communication", "Problem-solving", "Compassion", "Attention to detail"],
    roadmap: [
      "Excel in science subjects in school",
      "Get a bachelor's degree in science",
      "Prepare for and take medical entrance exams",
      "Complete medical school (5-6 years)",
      "Finish residency in your chosen specialty"
    ]
  },
  {
    id: "nurse",
    title: "Nurse",
    description: "Take care of patients in hospitals and clinics. You give medicine, check health, and provide comfort to people who are sick.",
    clusterId: "healthcare",
    isHighIncome: false,
    isFutureReady: true,
    skills: ["Patient care", "Communication", "Attention to detail", "Compassion", "Teamwork"],
    roadmap: [
      "Take biology and health classes in school",
      "Get a nursing diploma or bachelor's degree",
      "Pass nursing certification exams",
      "Gain experience through internships",
      "Consider specializing in a particular area of healthcare"
    ]
  },
  {
    id: "medical-technologist",
    title: "Medical Technologist",
    description: "Run tests on blood, tissues, and other samples to help doctors diagnose diseases. You work with special lab equipment.",
    clusterId: "healthcare",
    isHighIncome: false,
    isFutureReady: true,
    skills: ["Laboratory techniques", "Attention to detail", "Problem-solving", "Technology skills", "Analytical thinking"],
    roadmap: [
      "Focus on biology and chemistry in school",
      "Get a bachelor's degree in medical technology or related field",
      "Complete clinical training program",
      "Obtain certification in medical technology",
      "Consider specializing in a specific type of testing"
    ]
  },
  {
    id: "physiotherapist",
    title: "Physiotherapist",
    description: "Help people recover from injuries or surgeries through exercise and movement. You work with patients to improve their strength and mobility.",
    clusterId: "healthcare",
    isHighIncome: false,
    isFutureReady: true,
    skills: ["Anatomy knowledge", "Patient care", "Communication", "Problem-solving", "Physical stamina"],
    roadmap: [
      "Study biology and physical education in school",
      "Get a bachelor's degree in physiotherapy",
      "Complete clinical internships",
      "Obtain licensing as required",
      "Consider specializing in sports, pediatrics, or geriatrics"
    ]
  },
  {
    id: "health-informatics-specialist",
    title: "Health Informatics Specialist",
    description: "Manage health information systems and medical records. You combine healthcare knowledge with information technology to improve patient care.",
    clusterId: "healthcare",
    isHighIncome: true,
    isFutureReady: true,
    skills: ["Medical knowledge", "Technology skills", "Data analysis", "Attention to detail", "Communication"],
    roadmap: [
      "Build foundation in both health sciences and computer skills",
      "Get a degree in health informatics or related field",
      "Learn medical coding and record systems",
      "Gain experience with healthcare databases",
      "Stay updated on healthcare privacy regulations"
    ]
  },
  
  // Business & Management
  {
    id: "business-manager",
    title: "Business Manager",
    description: "Run a company or department. You make important decisions, lead teams, and make sure the business makes money.",
    clusterId: "business",
    isHighIncome: true,
    isFutureReady: true,
    skills: ["Leadership", "Decision-making", "Communication", "Problem-solving", "Financial understanding"],
    roadmap: [
      "Learn business basics through courses or reading",
      "Gain experience by starting small ventures or joining clubs",
      "Get a business degree or take business courses",
      "Start in entry-level positions to learn the business",
      "Develop leadership skills through practice and training"
    ]
  },
  {
    id: "entrepreneur",
    title: "Entrepreneur",
    description: "Start and run your own business. You come up with new ideas, find customers, and build something from scratch.",
    clusterId: "business",
    isHighIncome: true,
    isFutureReady: true,
    skills: ["Creativity", "Risk-taking", "Persistence", "Communication", "Financial management"],
    roadmap: [
      "Identify problems you want to solve",
      "Learn business basics through courses or mentors",
      "Start small with minimal investment",
      "Build a network of supporters and advisors",
      "Learn from failures and keep improving your business"
    ]
  },
  {
    id: "marketing-specialist",
    title: "Marketing Specialist",
    description: "Help businesses sell their products by creating ads, understanding customers, and building brand awareness.",
    clusterId: "business",
    isHighIncome: false,
    isFutureReady: true,
    skills: ["Creativity", "Communication", "Understanding people", "Digital skills", "Data analysis"],
    roadmap: [
      "Develop creative writing and design skills",
      "Learn digital tools like social media and content creation",
      "Study marketing principles through courses",
      "Build a portfolio of marketing projects",
      "Gain experience through internships or freelance work"
    ]
  },
  {
    id: "project-manager",
    title: "Project Manager",
    description: "Lead and organize projects from start to finish. You plan activities, manage teams, and make sure projects finish on time and within budget.",
    clusterId: "business",
    isHighIncome: true,
    isFutureReady: true,
    skills: ["Organization", "Leadership", "Communication", "Problem-solving", "Time management"],
    roadmap: [
      "Develop strong organizational and people skills",
      "Learn project management methodologies",
      "Get certified in project management",
      "Start managing small projects",
      "Build experience across different types of projects"
    ]
  },
  {
    id: "business-analyst",
    title: "Business Analyst",
    description: "Study how businesses work and help them improve. You identify problems, suggest solutions, and help companies become more efficient.",
    clusterId: "business",
    isHighIncome: true,
    isFutureReady: true,
    skills: ["Analytical thinking", "Problem-solving", "Communication", "Data analysis", "Business understanding"],
    roadmap: [
      "Build foundation in business fundamentals",
      "Learn data analysis tools and techniques",
      "Study business processes and improvement methodologies",
      "Develop technical and communication skills",
      "Gain experience analyzing real business problems"
    ]
  },
  
  // Engineering & Design
  {
    id: "civil-engineer",
    title: "Civil Engineer",
    description: "Design and build big structures like bridges, roads, and buildings. You make sure they're safe and work well.",
    clusterId: "engineering",
    isHighIncome: true,
    isFutureReady: true,
    skills: ["Math", "Physics", "Problem-solving", "Attention to detail", "Computer-aided design"],
    roadmap: [
      "Build strong foundation in math and physics",
      "Get a bachelor's degree in civil engineering",
      "Complete internships to gain practical experience",
      "Obtain professional engineering license",
      "Specialize in areas like structural, transportation, or environmental engineering"
    ]
  },
  {
    id: "mechanical-engineer",
    title: "Mechanical Engineer",
    description: "Design machines and mechanical systems. You create things like cars, robots, or heating systems that move and work.",
    clusterId: "engineering",
    isHighIncome: true,
    isFutureReady: true,
    skills: ["Physics", "Math", "3D design", "Problem-solving", "Critical thinking"],
    roadmap: [
      "Develop strong math and physics skills",
      "Build and take apart things to understand mechanics",
      "Get a degree in mechanical engineering",
      "Gain hands-on experience through projects and internships",
      "Learn advanced design software and manufacturing techniques"
    ]
  },
  {
    id: "product-designer",
    title: "Product Designer",
    description: "Create new products that are useful and look good. You think about how people will use them and make them easy to understand.",
    clusterId: "engineering",
    isHighIncome: true,
    isFutureReady: true,
    skills: ["Creativity", "Drawing", "Understanding users", "Problem-solving", "Computer design skills"],
    roadmap: [
      "Develop drawing and visual communication skills",
      "Learn design software and tools",
      "Study how people interact with products",
      "Create a portfolio of design projects",
      "Practice designing solutions for real problems"
    ]
  },
  {
    id: "aerospace-engineer",
    title: "Aerospace Engineer",
    description: "Design aircraft, spacecraft, satellites, and missiles. You help create vehicles that fly through air and space safely.",
    clusterId: "engineering",
    isHighIncome: true,
    isFutureReady: true,
    skills: ["Physics", "Math", "Computer-aided design", "Problem-solving", "Attention to detail"],
    roadmap: [
      "Build strong foundation in physics and mathematics",
      "Get a degree in aerospace engineering",
      "Learn specialized design software",
      "Gain experience through internships or research projects",
      "Consider specializing in aeronautics or astronautics"
    ]
  },
  {
    id: "robotics-engineer",
    title: "Robotics Engineer",
    description: "Design and build robots that can perform tasks automatically. You combine mechanical engineering, electronics, and programming.",
    clusterId: "engineering",
    isHighIncome: true,
    isFutureReady: true,
    skills: ["Programming", "Mechanical design", "Electronics", "Problem-solving", "Critical thinking"],
    roadmap: [
      "Study math, physics, and computer science in school",
      "Learn basic electronics and robotics through kits and projects",
      "Get a degree in robotics, mechanical engineering, or related field",
      "Build robots and automated systems for your portfolio",
      "Stay updated on advances in artificial intelligence"
    ]
  },
  
  // Education & Teaching
  {
    id: "teacher",
    title: "Teacher",
    description: "Help students learn subjects like math, science, or languages. You create lessons, explain concepts, and guide learning.",
    clusterId: "education",
    isHighIncome: false,
    isFutureReady: true,
    skills: ["Communication", "Patience", "Creativity", "Organization", "Adaptability"],
    roadmap: [
      "Develop expertise in subjects you want to teach",
      "Get a bachelor's degree in education or your subject",
      "Complete teacher training program",
      "Obtain teaching certification",
      "Gain experience through student teaching and internships"
    ]
  },
  {
    id: "educational-counselor",
    title: "Educational Counselor",
    description: "Help students plan their education and solve school problems. You guide them to make good choices for their future.",
    clusterId: "education",
    isHighIncome: false,
    isFutureReady: true,
    skills: ["Listening", "Communication", "Empathy", "Problem-solving", "Organization"],
    roadmap: [
      "Develop strong communication and people skills",
      "Get a bachelor's degree in psychology or education",
      "Complete a master's degree in counseling",
      "Obtain counseling certification or license",
      "Gain experience working with diverse student populations"
    ]
  },
  {
    id: "instructional-designer",
    title: "Instructional Designer",
    description: "Create learning materials like online courses, textbooks, or training programs. You make learning interesting and effective.",
    clusterId: "education",
    isHighIncome: false,
    isFutureReady: true,
    skills: ["Creativity", "Communication", "Technical skills", "Organization", "Understanding how people learn"],
    roadmap: [
      "Study education and learning psychology",
      "Learn digital tools for creating educational content",
      "Get a degree in instructional design or education",
      "Build a portfolio of learning materials you've created",
      "Stay current with educational technology trends"
    ]
  },
  {
    id: "education-technology-specialist",
    title: "Education Technology Specialist",
    description: "Use technology to improve how students learn. You help schools choose and use computer programs, apps, and devices in the classroom.",
    clusterId: "education",
    isHighIncome: false,
    isFutureReady: true,
    skills: ["Technology skills", "Teaching", "Communication", "Problem-solving", "Creativity"],
    roadmap: [
      "Build foundation in both education and technology",
      "Get a degree in educational technology or related field",
      "Learn about various educational software and tools",
      "Gain classroom experience",
      "Stay updated on emerging educational technologies"
    ]
  },
  {
    id: "special-education-teacher",
    title: "Special Education Teacher",
    description: "Teach students with special needs or disabilities. You create personalized learning plans and help these students develop important skills.",
    clusterId: "education",
    isHighIncome: false,
    isFutureReady: true,
    skills: ["Patience", "Empathy", "Adaptability", "Communication", "Problem-solving"],
    roadmap: [
      "Develop understanding of different learning needs",
      "Get a degree in special education",
      "Complete specialized training for various disabilities",
      "Obtain special education teaching certification",
      "Gain experience working with diverse learning needs"
    ]
  },
  
  // Arts & Media
  {
    id: "graphic-designer",
    title: "Graphic Designer",
    description: "Create visual content like logos, posters, and websites. You use art and design to communicate messages clearly.",
    clusterId: "artsMedia",
    isHighIncome: false,
    isFutureReady: true,
    skills: ["Creativity", "Visual design", "Computer design skills", "Communication", "Attention to detail"],
    roadmap: [
      "Develop drawing and visual arts skills",
      "Learn design software like Adobe Creative Suite",
      "Build a portfolio of design projects",
      "Get formal education in graphic design",
      "Gain experience through freelance work or internships"
    ]
  },
  {
    id: "ux-designer",
    title: "UX Designer",
    description: "Design how websites and apps look and work for users. You make digital products easy and enjoyable to use.",
    clusterId: "artsMedia",
    isHighIncome: true,
    isFutureReady: true,
    skills: ["User research", "Design thinking", "Prototyping", "Communication", "Problem-solving"],
    roadmap: [
      "Learn design fundamentals and user psychology",
      "Study UX/UI design principles and methodologies",
      "Build practical skills with design tools and software",
      "Create a portfolio of user experience projects",
      "Practice user testing and iterative design"
    ]
  },
  {
    id: "digital-content-creator",
    title: "Digital Content Creator",
    description: "Make videos, podcasts, blogs, or social media content. You tell stories and share information in creative ways online.",
    clusterId: "artsMedia",
    isHighIncome: false,
    isFutureReady: true,
    skills: ["Creativity", "Communication", "Digital skills", "Storytelling", "Social media knowledge"],
    roadmap: [
      "Develop writing, video, audio or visual skills",
      "Learn content creation tools and platforms",
      "Start creating your own content regularly",
      "Build an audience on social media platforms",
      "Learn about monetization strategies"
    ]
  },
  {
    id: "animation-artist",
    title: "Animation Artist",
    description: "Create moving pictures for movies, games, or websites. You bring drawings and characters to life through movement.",
    clusterId: "artsMedia",
    isHighIncome: false,
    isFutureReady: true,
    skills: ["Drawing", "Creativity", "Computer animation skills", "Storytelling", "Attention to detail"],
    roadmap: [
      "Develop strong drawing and artistic skills",
      "Learn animation principles and techniques",
      "Master animation software tools",
      "Create an animation portfolio/demo reel",
      "Study motion, timing, and character design"
    ]
  },
  {
    id: "film-producer",
    title: "Film Producer",
    description: "Oversee the making of movies, TV shows, or videos. You manage budgets, hire staff, and make sure everything runs smoothly.",
    clusterId: "artsMedia",
    isHighIncome: true,
    isFutureReady: true,
    skills: ["Leadership", "Budget management", "Communication", "Creative vision", "Problem-solving"],
    roadmap: [
      "Learn about filmmaking and the production process",
      "Get experience in various film production roles",
      "Study film production or business",
      "Build a network in the film industry",
      "Start with small productions and work your way up"
    ]
  },
  
  // Science & Research
  {
    id: "environmental-scientist",
    title: "Environmental Scientist",
    description: "Study the environment to solve pollution problems. You collect samples, run tests, and recommend ways to protect nature.",
    clusterId: "scienceResearch",
    isHighIncome: false,
    isFutureReady: true,
    skills: ["Scientific knowledge", "Field research", "Data analysis", "Problem-solving", "Communication"],
    roadmap: [
      "Build strong foundation in biology, chemistry, and earth sciences",
      "Get a bachelor's degree in environmental science",
      "Gain field experience through research projects",
      "Consider a master's degree for advancement",
      "Stay current with environmental regulations and technologies"
    ]
  },
  {
    id: "research-scientist",
    title: "Research Scientist",
    description: "Conduct experiments to discover new things about the world. You work in labs and use scientific methods to find answers.",
    clusterId: "scienceResearch",
    isHighIncome: true,
    isFutureReady: true,
    skills: ["Analytical thinking", "Research methods", "Data analysis", "Critical thinking", "Attention to detail"],
    roadmap: [
      "Develop strong foundation in science subjects",
      "Get a bachelor's degree in your field of interest",
      "Pursue a master's or PhD for specialized research",
      "Gain laboratory and research experience",
      "Learn to write research papers and grant proposals"
    ]
  },
  {
    id: "marine-biologist",
    title: "Marine Biologist",
    description: "Study plants and animals that live in the ocean. You might work on boats, in labs, or underwater to learn about sea life.",
    clusterId: "scienceResearch",
    isHighIncome: false,
    isFutureReady: true,
    skills: ["Biology knowledge", "Research skills", "Swimming", "Observation", "Data collection"],
    roadmap: [
      "Build strong foundation in biology and other sciences",
      "Get a degree in marine biology or related field",
      "Learn diving and water safety skills",
      "Gain field experience through research projects",
      "Participate in marine conservation efforts"
    ]
  },
  {
    id: "astrophysicist",
    title: "Astrophysicist",
    description: "Study stars, planets, and space. You use math and physics to understand how the universe works.",
    clusterId: "scienceResearch",
    isHighIncome: true,
    isFutureReady: true,
    skills: ["Physics", "Math", "Data analysis", "Critical thinking", "Computer modeling"],
    roadmap: [
      "Excel in physics and advanced mathematics",
      "Get a bachelor's degree in physics or astronomy",
      "Pursue a PhD in astrophysics",
      "Learn programming and data analysis",
      "Participate in research projects and observations"
    ]
  },
  {
    id: "genetics-researcher",
    title: "Genetics Researcher",
    description: "Study genes to understand how traits are passed down and how they affect health. You might work on curing genetic diseases.",
    clusterId: "scienceResearch",
    isHighIncome: true,
    isFutureReady: true,
    skills: ["Biology knowledge", "Laboratory techniques", "Data analysis", "Critical thinking", "Attention to detail"],
    roadmap: [
      "Build strong foundation in biology and chemistry",
      "Get a bachelor's degree in genetics or related field",
      "Pursue advanced degrees for research positions",
      "Learn specialized genetic analysis techniques",
      "Stay updated on advancements in genetic technology"
    ]
  },
  
  // Agriculture & Food
  {
    id: "agricultural-manager",
    title: "Agricultural Manager",
    description: "Run farms and food production businesses. You oversee planting, harvesting, and make sure operations run smoothly.",
    clusterId: "agriculture",
    isHighIncome: false,
    isFutureReady: true,
    skills: ["Business management", "Plant/animal knowledge", "Problem-solving", "Technology skills", "Leadership"],
    roadmap: [
      "Gain practical experience working in agriculture",
      "Learn about plant science and animal husbandry",
      "Study agricultural business and management",
      "Stay updated on new farming technologies",
      "Build connections with suppliers and buyers"
    ]
  },
  {
    id: "food-scientist",
    title: "Food Scientist",
    description: "Study the science of food to create new products, improve taste, and ensure safety. You might develop new foods or test quality.",
    clusterId: "agriculture",
    isHighIncome: false,
    isFutureReady: true,
    skills: ["Chemistry", "Biology", "Laboratory techniques", "Attention to detail", "Creative thinking"],
    roadmap: [
      "Build strong foundation in chemistry and biology",
      "Get a degree in food science or related field",
      "Learn about food safety regulations",
      "Gain laboratory experience with food testing",
      "Develop knowledge of food processing techniques"
    ]
  },
  {
    id: "agricultural-engineer",
    title: "Agricultural Engineer",
    description: "Design farm equipment and systems to improve agriculture. You help farmers produce more food with less waste and effort.",
    clusterId: "agriculture",
    isHighIncome: true,
    isFutureReady: true,
    skills: ["Engineering knowledge", "Problem-solving", "Design skills", "Understanding of agriculture", "Technical skills"],
    roadmap: [
      "Build foundation in math, physics, and biology",
      "Get a degree in agricultural engineering",
      "Learn about farming practices and challenges",
      "Gain experience with agricultural machinery",
      "Stay updated on sustainable farming technologies"
    ]
  },
  
  // Law & Public Safety
  {
    id: "lawyer",
    title: "Lawyer",
    description: "Help people with legal problems, represent them in court, and give legal advice. You know the laws and how to use them.",
    clusterId: "lawPublicSafety",
    isHighIncome: true,
    isFutureReady: true,
    skills: ["Critical thinking", "Communication", "Research", "Writing", "Problem-solving"],
    roadmap: [
      "Develop strong reading, writing, and speaking skills",
      "Get a bachelor's degree in any field",
      "Prepare for and take the law school entrance exam",
      "Complete law school (3 years)",
      "Pass the bar exam to practice law"
    ]
  },
  {
    id: "police-officer",
    title: "Police Officer",
    description: "Keep people safe, enforce laws, and respond to emergencies. You patrol areas, investigate crimes, and help people in trouble.",
    clusterId: "lawPublicSafety",
    isHighIncome: false,
    isFutureReady: true,
    skills: ["Physical fitness", "Communication", "Critical thinking", "Decision-making", "Courage"],
    roadmap: [
      "Develop strong character and physical fitness",
      "Study criminal justice or related subjects",
      "Meet age and citizenship requirements",
      "Complete police academy training",
      "Pass physical and written exams"
    ]
  },
  {
    id: "forensic-scientist",
    title: "Forensic Scientist",
    description: "Use science to solve crimes. You collect and analyze evidence like fingerprints or DNA to help police catch criminals.",
    clusterId: "lawPublicSafety",
    isHighIncome: false,
    isFutureReady: true,
    skills: ["Attention to detail", "Laboratory techniques", "Critical thinking", "Scientific knowledge", "Communication"],
    roadmap: [
      "Build strong foundation in biology, chemistry, and physics",
      "Get a degree in forensic science or related field",
      "Learn specialized forensic techniques",
      "Gain laboratory experience",
      "Develop understanding of criminal justice system"
    ]
  },
  
  // Finance & Banking
  {
    id: "financial-analyst",
    title: "Financial Analyst",
    description: "Help people and businesses make smart decisions about money and investments. You analyze data to find the best options.",
    clusterId: "finance",
    isHighIncome: true,
    isFutureReady: true,
    skills: ["Math", "Analysis", "Financial knowledge", "Communication", "Attention to detail"],
    roadmap: [
      "Build strong math and statistics foundation",
      "Get a degree in finance, economics, or accounting",
      "Learn financial analysis tools and software",
      "Gain experience through internships",
      "Consider professional certifications like CFA"
    ]
  },
  {
    id: "accountant",
    title: "Accountant",
    description: "Keep track of money for businesses or people. You record financial transactions, prepare tax returns, and ensure financial accuracy.",
    clusterId: "finance",
    isHighIncome: false,
    isFutureReady: true,
    skills: ["Math", "Attention to detail", "Organization", "Financial knowledge", "Problem-solving"],
    roadmap: [
      "Develop strong math and analytical skills",
      "Get a degree in accounting or finance",
      "Learn accounting software and systems",
      "Gain experience through internships",
      "Obtain CPA certification for advancement"
    ]
  },
  {
    id: "investment-banker",
    title: "Investment Banker",
    description: "Help companies and governments raise money and make financial deals. You provide advice on mergers, acquisitions, and investments.",
    clusterId: "finance",
    isHighIncome: true,
    isFutureReady: true,
    skills: ["Financial analysis", "Communication", "Negotiation", "Math", "Critical thinking"],
    roadmap: [
      "Build strong foundation in math and economics",
      "Get a degree in finance, economics, or business",
      "Gain financial industry experience through internships",
      "Consider an MBA for advancement",
      "Develop strong network in the financial industry"
    ]
  },
  
  // Human Services & Counseling
  {
    id: "counselor",
    title: "Counselor",
    description: "Help people work through personal problems and make positive changes in their lives. You listen and provide guidance.",
    clusterId: "humanServices",
    isHighIncome: false,
    isFutureReady: true,
    skills: ["Empathy", "Listening", "Communication", "Problem-solving", "Emotional intelligence"],
    roadmap: [
      "Develop strong interpersonal and communication skills",
      "Get a bachelor's degree in psychology or related field",
      "Complete master's degree in counseling",
      "Fulfill supervised practice requirements",
      "Obtain counseling license"
    ]
  },
  {
    id: "social-worker",
    title: "Social Worker",
    description: "Help people overcome challenges in their lives. You connect them with resources and support services to improve their situations.",
    clusterId: "humanServices",
    isHighIncome: false,
    isFutureReady: true,
    skills: ["Empathy", "Communication", "Problem-solving", "Resilience", "Organization"],
    roadmap: [
      "Develop compassion and strong communication skills",
      "Get a bachelor's degree in social work or related field",
      "Complete master's degree for clinical work",
      "Fulfill supervised fieldwork requirements",
      "Obtain social work license"
    ]
  },
  {
    id: "mental-health-therapist",
    title: "Mental Health Therapist",
    description: "Help people with mental health conditions like anxiety or depression. You provide therapy to improve their emotional wellbeing.",
    clusterId: "humanServices",
    isHighIncome: false,
    isFutureReady: true,
    skills: ["Empathy", "Active listening", "Communication", "Emotional intelligence", "Critical thinking"],
    roadmap: [
      "Build foundation in psychology and human behavior",
      "Get a bachelor's degree in psychology or related field",
      "Complete master's or doctoral degree in therapy",
      "Fulfill supervised clinical hours",
      "Obtain therapy license"
    ]
  },
  
  // Government & Public Administration
  {
    id: "public-administrator",
    title: "Public Administrator",
    description: "Help run government programs and services. You make sure public offices work well and serve people effectively.",
    clusterId: "governmentPublicAdmin",
    isHighIncome: false,
    isFutureReady: true,
    skills: ["Organization", "Leadership", "Communication", "Problem-solving", "Understanding regulations"],
    roadmap: [
      "Learn about government and public policy",
      "Get a degree in public administration or related field",
      "Gain experience through government internships",
      "Develop project management and leadership skills",
      "Build network of government contacts"
    ]
  },
  {
    id: "urban-planner",
    title: "Urban Planner",
    description: "Design cities and communities. You decide where buildings, parks, and roads should go to make places better for people to live.",
    clusterId: "governmentPublicAdmin",
    isHighIncome: false,
    isFutureReady: true,
    skills: ["Spatial thinking", "Design", "Communication", "Problem-solving", "Understanding regulations"],
    roadmap: [
      "Develop interest in both design and public policy",
      "Get a degree in urban planning or related field",
      "Learn about zoning laws and building codes",
      "Gain experience through planning internships",
      "Obtain professional certification"
    ]
  },
  {
    id: "policy-analyst",
    title: "Policy Analyst",
    description: "Study social problems and help create government rules to solve them. You research issues and recommend policies.",
    clusterId: "governmentPublicAdmin",
    isHighIncome: false,
    isFutureReady: true,
    skills: ["Research", "Analysis", "Writing", "Critical thinking", "Communication"],
    roadmap: [
      "Build foundation in social sciences and research",
      "Get a degree in public policy, economics, or related field",
      "Develop strong research and writing skills",
      "Gain experience through policy-focused internships",
      "Stay informed about current social and political issues"
    ]
  }
];

export const getCareersByClusterIds = (clusterIds: string[]): Career[] => {
  return careers.filter(career => clusterIds.includes(career.clusterId));
};

export const getCommonSkills = (selectedCareers: Career[]): string[] => {
  if (!selectedCareers.length) return [];
  
  // Get all skills from first career
  const commonSkills = new Set(selectedCareers[0].skills);
  
  // Keep only skills that appear in all selected careers
  for (let i = 1; i < selectedCareers.length; i++) {
    const careerSkills = new Set(selectedCareers[i].skills);
    for (const skill of commonSkills) {
      if (!careerSkills.has(skill)) {
        commonSkills.delete(skill);
      }
    }
  }
  
  return Array.from(commonSkills);
};

export const getTransferableSkills = (careers: Career[]): string[] => {
  // Count occurrences of each skill
  const skillCount: Record<string, number> = {};
  
  careers.forEach(career => {
    career.skills.forEach(skill => {
      skillCount[skill] = (skillCount[skill] || 0) + 1;
    });
  });
  
  // Find skills that appear in at least 30% of the careers
  const threshold = Math.max(2, Math.floor(careers.length * 0.3));
  
  return Object.entries(skillCount)
    .filter(([_, count]) => count >= threshold)
    .map(([skill, _]) => skill);
};

export const getFutureReadyCareers = (careers: Career[]): Career[] => {
  return careers.filter(career => career.isFutureReady);
};

export const getHighIncomeCareers = (careers: Career[]): Career[] => {
  return careers.filter(career => career.isHighIncome);
};
