
import { Career } from '../../types';

export const miningExtractionCareers: Career[] = [
  {
    id: "mining-engineer",
    title: "Mining Engineer",
    description: "You plan how to dig minerals from underground safely. You design tunnels and choose what machines to use. You make sure the mine won't collapse and that workers can breathe good air underground. You also try to dig in ways that don't harm nature too much. Your work helps get important materials like coal, gold, or iron while keeping workers safe.",
    clusterId: "miningExtraction",
    isHighIncome: true,
    isFutureReady: true,
    averageSalary: "$80,000 - $140,000",
    skills: ["Drawing plans for underground tunnels", "Choosing the right machines for different rocks", "Solving safety problems in mines", "Reading the earth to find mineral deposits", "Making sure mines don't damage the environment too much"],
    roadmap: [
      "Complete degree in mining engineering",
      "Develop understanding of geological formations",
      "Learn mining methods and technologies",
      "Obtain professional engineering license",
      "Gain experience through internships or entry-level positions"
    ]
  },
  {
    id: "geological-technician",
    title: "Geological Technician",
    description: "You help scientists study rocks and soil. You collect samples, run tests, and record what you find. You might use special tools to measure the ground, take pictures of rock layers, or map where different minerals are found. You often work outdoors in places where companies want to dig or build. Your work helps find valuable minerals and understand if land is safe to build on.",
    clusterId: "miningExtraction",
    isHighIncome: false,
    isFutureReady: true,
    averageSalary: "$50,000 - $75,000",
    skills: ["Collecting rock samples the right way", "Using special tools to test ground strength", "Making detailed maps of land areas", "Taking careful notes about soil and rock types", "Operating drilling equipment to get deep samples"],
    roadmap: [
      "Study geology, earth sciences, or related field",
      "Learn geological mapping and surveying techniques",
      "Develop sample collection and testing skills",
      "Gain field experience through entry-level positions",
      "Build expertise in specific geological settings"
    ]
  },
  {
    id: "extraction-technology-specialist",
    title: "Extraction Technology Specialist",
    description: "You find better ways to get minerals and oil from the earth. You test new machines and methods that can dig faster, cheaper, or with less pollution. You might work with robots that can go places too dangerous for people, or systems that clean up water used in mining. Your work makes mining and drilling safer for workers and better for the environment.",
    clusterId: "miningExtraction",
    isHighIncome: true,
    isFutureReady: true,
    emergingField: true,
    averageSalary: "$85,000 - $130,000",
    skills: ["Testing new mining equipment", "Finding ways to use less energy when digging", "Creating systems that reduce pollution", "Using computers to control mining machines", "Measuring how well new methods work"],
    roadmap: [
      "Build technical foundation in engineering or related field",
      "Develop expertise in specific extraction technologies",
      "Learn about environmental and safety regulations",
      "Gain experience in extraction operations",
      "Stay current with emerging extraction technologies"
    ],
    aiRelated: true
  },
  {
    id: "reclamation-specialist",
    title: "Reclamation Specialist",
    description: "You fix land that was damaged by mining or drilling. After companies finish getting minerals or oil, you help bring the land back to life. You plant trees, clean polluted soil, reshape hills, and create new ponds or streams. Your goal is to make the land healthy again so plants, animals, and sometimes people can use it. Your work helps heal the earth after mining is done.",
    clusterId: "miningExtraction",
    isHighIncome: true,
    isFutureReady: true,
    averageSalary: "$65,000 - $95,000",
    skills: ["Knowing which plants will grow in damaged soil", "Creating hills and valleys that prevent erosion", "Testing soil and water for harmful chemicals", "Planning projects that take years to complete", "Following government rules about land restoration"],
    roadmap: [
      "Study environmental science or related field",
      "Learn soil science and revegetation techniques",
      "Develop understanding of reclamation regulations",
      "Gain experience in environmental assessment",
      "Build project management and implementation skills"
    ]
  },
  {
    id: "sustainable-mining-engineer",
    title: "Sustainable Mining Engineer",
    description: "You figure out how to get minerals from the earth with less environmental damage. You design mines that use less water, create less waste, and disturb smaller areas of land. You might use new technologies like electric mining trucks or systems that capture harmful gases. Your work helps get the materials we need for phones, cars, and buildings while protecting nature as much as possible.",
    clusterId: "miningExtraction",
    isHighIncome: true,
    isFutureReady: true,
    emergingField: true,
    averageSalary: "$90,000 - $150,000",
    skills: ["Designing mines that minimize tree cutting", "Creating systems to clean and reuse water", "Finding ways to reduce noise and dust", "Using renewable energy in mining operations", "Planning how to restore land while mining is still happening"],
    roadmap: [
      "Build foundation in mining engineering and environmental science",
      "Learn sustainable mining technologies and practices",
      "Develop expertise in environmental impact reduction",
      "Gain experience implementing sustainable mining projects",
      "Stay current with green mining innovations"
    ]
  },
  {
    id: "mineral-data-analyst",
    title: "Mineral Data Analyst",
    description: "You use computers to find where valuable minerals are likely hiding underground. By studying patterns in rocks, landscape shapes, and test drilling results, you create maps showing the best places to dig. Your computer models help companies decide which areas are worth mining. Your work makes finding minerals more successful and prevents unnecessary digging in places with few resources.",
    clusterId: "miningExtraction",
    isHighIncome: true,
    isFutureReady: true,
    emergingField: true,
    averageSalary: "$85,000 - $140,000",
    skills: ["Using special computer programs to find mineral patterns", "Creating 3D models of underground rock layers", "Making colorful maps that show where minerals might be", "Teaching computers to recognize signs of valuable deposits", "Combining information from many different sources"],
    roadmap: [
      "Build foundation in geology and data science",
      "Learn geological modeling and geostatistical methods",
      "Develop expertise in mining data analytics",
      "Gain experience with exploration or mining operations",
      "Stay current with data science applications in mining"
    ],
    aiRelated: true
  },
  {
    id: "critical-minerals-specialist",
    title: "Critical Minerals Specialist",
    description: "You focus on finding and processing special minerals needed for smartphones, electric cars, and solar panels. These rare minerals are very important for modern technology but can be hard to find. You help locate these minerals and develop better ways to extract them from rocks. Your work helps ensure we have the materials needed for green technology and advanced electronics.",
    clusterId: "miningExtraction",
    isHighIncome: true,
    isFutureReady: true,
    emergingField: true,
    averageSalary: "$100,000 - $160,000",
    skills: ["Identifying rare minerals in rock samples", "Developing methods to separate valuable minerals from rock", "Following global markets for special minerals", "Finding alternatives when certain minerals are scarce", "Understanding which technologies need which minerals"],
    roadmap: [
      "Build foundation in geology or mineral engineering",
      "Learn about critical mineral deposits and properties",
      "Develop expertise in specialized extraction methods",
      "Gain experience with critical mineral projects",
      "Stay current with critical mineral markets and technologies"
    ]
  },
  {
    id: "deep-sea-mining-specialist",
    title: "Deep Sea Mining Specialist",
    description: "You work on getting valuable minerals from the ocean floor. Special metals used in phones and computers can be found in rocks deep under the sea. You design underwater robots and equipment that can work under extreme water pressure. You also make sure sea creatures and their homes are protected during mining. Your work helps find new sources of important minerals without digging on land.",
    clusterId: "miningExtraction",
    isHighIncome: true,
    isFutureReady: true,
    emergingField: true,
    averageSalary: "$110,000 - $180,000",
    skills: ["Creating equipment that works in deep ocean water", "Operating underwater robots by remote control", "Mapping the ocean floor to find mineral deposits", "Understanding sea life and how to protect it", "Solving problems when working miles below the water surface"],
    roadmap: [
      "Build foundation in oceanography and mining engineering",
      "Learn deep sea environments and mineral formations",
      "Develop expertise in underwater extraction technologies",
      "Gain experience with marine resource assessment",
      "Stay current with evolving deep sea mining regulations"
    ]
  },
  {
    id: "mine-automation-engineer",
    title: "Mine Automation Engineer",
    description: "You create robot systems and self-driving vehicles for mines. These smart machines can dig, haul rocks, or inspect dangerous areas without putting people at risk. You program computers to control these machines and monitor their work. Your job combines mining knowledge with robotics. Your work makes mines safer by keeping workers away from dangerous areas and makes mining more efficient.",
    clusterId: "miningExtraction",
    isHighIncome: true,
    isFutureReady: true,
    emergingField: true,
    averageSalary: "$95,000 - $160,000",
    skills: ["Programming robots to perform mining tasks", "Building systems that let machines 'see' underground", "Creating control rooms where people monitor robot miners", "Making self-driving trucks that work in rough terrain", "Designing robots that can handle heavy mining equipment"],
    roadmap: [
      "Build foundation in robotics and mining engineering",
      "Learn industrial automation and control systems",
      "Develop expertise in mining equipment automation",
      "Gain experience implementing automated mining solutions",
      "Stay current with advances in mining technology"
    ],
    aiRelated: true
  }
];
