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
      "Start with free coding platforms like freeCodeCamp, Codecademy, or Khan Academy",
      "Build personal projects and contribute to open-source on GitHub",
      "Create a portfolio website showcasing your projects",
      "Practice coding challenges on platforms like LeetCode or HackerRank",
      "Build real applications that solve actual problems to demonstrate skills"
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
      "Learn networking fundamentals through free courses on YouTube and Coursera",
      "Practice ethical hacking on platforms like TryHackMe and HackTheBox",
      "Earn free or affordable certifications like Google Cybersecurity Certificate",
      "Build a home lab to practice security techniques virtually",
      "Join cybersecurity communities and participate in CTF competitions"
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
      "Master statistics fundamentals through Khan Academy and StatQuest videos",
      "Learn Python or R through free online courses like DataCamp",
      "Practice on real datasets from Kaggle competitions",
      "Build a portfolio of data analysis projects on GitHub",
      "Create visualizations and models to demonstrate your skills to employers"
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
      "Build math foundations on Khan Academy (linear algebra, calculus, statistics)",
      "Learn Python through free resources like Python.org or Codecademy",
      "Study AI fundamentals through free courses like fast.ai or Coursera",
      "Practice implementing AI models on your own through tutorials",
      "Create AI projects that solve real problems to demonstrate skills"
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
      "Learn Linux basics through free tutorials and virtual machines",
      "Use free tiers of AWS, Azure, or Google Cloud to practice",
      "Take free cloud fundamentals courses from the major providers",
      "Build projects deploying applications to the cloud",
      "Earn cloud certifications like AWS Certified Solutions Architect"
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
      "Complete an accredited nursing program (diploma or degree)",
      "Pass nursing certification exams",
      "Gain experience through clinical practice",
      "Consider specializing in high-demand areas like critical care"
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
      "Get certification through accredited medical technology programs",
      "Complete clinical training program",
      "Obtain certification in medical technology",
      "Gain experience in specialized testing areas"
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
      "Study anatomy and physiology fundamentals through online courses",
      "Complete an accredited physiotherapy program",
      "Gain practical experience through clinical rotations",
      "Obtain licensing as required",
      "Develop specializations in sports, pediatrics, or geriatrics"
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
      "Learn healthcare terminology through free online resources",
      "Take online courses in database management and information systems",
      "Study healthcare data privacy regulations through free resources",
      "Get hands-on experience with electronic health record systems (demos)",
      "Build projects demonstrating data analysis and visualization skills"
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
      "Learn business fundamentals through free courses on Coursera or edX",
      "Start and run small business ventures or side projects",
      "Take leadership roles in community or volunteer organizations",
      "Build a portfolio of successful projects you've managed",
      "Network with business professionals and find mentors"
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
      "Identify problems you can solve with products or services",
      "Learn business basics through free online courses",
      "Start small with minimal investment and test your ideas",
      "Participate in startup competitions and entrepreneurship forums",
      "Scale your business gradually based on market feedback"
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
      "Learn marketing principles through YouTube channels and Google's free courses",
      "Practice content creation on social media platforms",
      "Take free digital marketing courses (Google, HubSpot, Facebook)",
      "Create marketing campaigns for local businesses or nonprofits",
      "Build a portfolio showing successful marketing strategies you've created"
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
      "Learn project management basics through free courses on Coursera or YouTube",
      "Practice using project management tools like Trello, Asana, or Jira",
      "Lead small projects in your community or volunteer organizations",
      "Document your project successes and methods in a portfolio",
      "Consider affordable certifications like CAPM or Scrum Master"
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
      "Learn data analysis through free Excel and SQL tutorials online",
      "Study business processes through free online courses",
      "Practice analyzing real business cases and suggesting improvements",
      "Build dashboards and reports using free tools like Google Data Studio",
      "Create a portfolio of business problems you've analyzed and solved"
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
      "Build strong foundation in math and physics through online courses",
      "Complete an accredited civil engineering program",
      "Gain hands-on experience through internships",
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
      "Master physics and mathematics fundamentals through Khan Academy",
      "Learn CAD software through free tutorials (Fusion 360, FreeCAD)",
      "Build mechanical projects and document your process",
      "Join maker communities and collaborate on engineering projects",
      "Create a portfolio showcasing your design work and problem-solving"
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
      "Learn design thinking through free online courses",
      "Master design software through YouTube tutorials (Figma, Sketch)",
      "Study user interface and user experience principles online",
      "Build a portfolio by redesigning existing products",
      "Get feedback from other designers through online communities"
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
      "Complete engineering degree with aerospace focus",
      "Learn specialized design software",
      "Gain experience through internships or research projects",
      "Stay updated on aerospace innovations and technologies"
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
      "Learn programming through free resources (Python, Arduino)",
      "Build simple robots using affordable kits like Arduino or Raspberry Pi",
      "Take free online courses in robotics and electronics",
      "Join robotics communities and participate in competitions",
      "Create a portfolio of robots you've built and programmed"
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
      "Get a teaching degree or certification",
      "Complete supervised teaching practice",
      "Obtain teaching license as required",
      "Develop specialized teaching approaches for different learning styles"
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
      "Study psychology and education principles through online courses",
      "Complete counseling degree or certification",
      "Gain experience working with diverse student populations",
      "Develop specialization in areas like career counseling or academic support",
      "Stay updated on education trends and opportunities"
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
      "Learn instructional design principles through free online resources",
      "Practice creating educational content using free tools",
      "Build a portfolio of learning materials you've designed",
      "Join instructional design communities for feedback",
      "Create and publish your own courses on platforms like YouTube or Udemy"
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
      "Learn about educational technologies through free online courses",
      "Gain experience with various learning platforms and tools",
      "Create tutorials and resources for using edtech effectively",
      "Build a portfolio demonstrating innovative uses of technology in education",
      "Stay updated on new educational technologies and their applications"
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
      "Learn about different learning needs and disabilities",
      "Complete special education teaching certification",
      "Gain experience working with diverse learning needs",
      "Develop specialized approaches for various disabilities",
      "Stay updated on best practices in special education"
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
      "Learn design principles through free YouTube tutorials and courses",
      "Master design software through free tutorials (Adobe, Canva, GIMP)",
      "Create a portfolio of design projects on Behance or Dribbble",
      "Offer free work to nonprofits to build experience",
      "Start freelancing on platforms like Fiverr or Upwork"
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
      "Study UX principles through free courses on YouTube and Coursera",
      "Learn prototyping tools through tutorials (Figma, Adobe XD)",
      "Analyze existing products and redesign their user experience",
      "Build a UX portfolio showing your design process",
      "Join UX communities for feedback and networking"
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
      "Learn content creation skills through YouTube tutorials",
      "Practice creating content regularly on free platforms",
      "Study successful content creators in your niche",
      "Build an audience by consistently publishing quality content",
      "Develop multiple revenue streams (sponsorships, ads, merchandise)"
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
      "Learn animation principles through free online courses",
      "Practice drawing and movement studies regularly",
      "Master animation software through tutorials (Blender, Krita)",
      "Create short animation projects for your portfolio",
      "Share your work on platforms like YouTube and animation forums"
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
      "Learn about filmmaking through free YouTube courses",
      "Practice by producing small video projects with friends",
      "Build a network of creative collaborators",
      "Study film production case studies and interviews online",
      "Produce progressively larger projects as you gain experience"
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
