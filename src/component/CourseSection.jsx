const CourseSection=()=>{
    return(
        <div className="mt-10">
         <div className="">
            <h2 className="text-center text-xl font-semibold">Our Courses</h2>
            {/* search filter sort */}
            <div>
               
            </div>
            <div className="grid grid-cols-3 gap-3">
              
            </div>
         </div>
        </div>
    )
}
export default CourseSection;
const courses=[
    {
    "id": 1,
    "title": "React.js for Beginners",
    "description": "This beginner-friendly course introduces you to the core concepts of React.js, including components, props, state, and hooks. You will learn how to structure modern front-end applications and build interactive user interfaces. By the end, you will complete a small hands-on project to apply everything you’ve learned.",
    "instructor": "John Smith",
    "syllabus": [
      "Introduction to React",
      "Components & Props",
      "State Management",
      "React Hooks",
      "Project: To-Do App"
    ],
    "price": 49.99
  },
  {
    "id": 2,
    "title": "Full-Stack Web Development (MERN)",
    "description": "Learn how to build real-world web applications using the MERN stack. This course covers MongoDB, Express.js, React, and Node.js in a practical, project-driven approach. You will understand APIs, authentication, and database operations while developing a complete full-stack application from scratch.",
    "instructor": "Sarah Johnson",
    "syllabus": [
      "HTML/CSS Basics",
      "Node & Express",
      "MongoDB CRUD",
      "React Fundamentals",
      "Full MERN Project"
    ],
    "price": 99.99
  },
  {
    "id": 3,
    "title": "Python Programming Essentials",
    "description": "This course helps beginners understand Python programming step by step. You will learn variables, loops, functions, data structures, and object-oriented programming through simple explanations and practical coding exercises. By the end, you will be able to write small applications confidently and solve common programming problems.",
    "instructor": "David Lee",
    "syllabus": [
      "Python Basics",
      "Data Structures",
      "Functions",
      "OOP Concepts",
      "Mini Projects"
    ],
    "price": 39.99
  },
  {
    "id": 4,
    "title": "Digital Marketing Masterclass",
    "description": "Learn the essential digital marketing skills needed to grow a business online. This course covers SEO, Google Ads, Facebook Ads, email marketing, and analytics. You will understand how campaigns work and how to optimize them for real results through practical examples and hands-on exercises.",
    "instructor": "Emily Davis",
    "syllabus": [
      "SEO Basics",
      "Google Ads",
      "Social Media Ads",
      "Email Marketing",
      "Analytics"
    ],
    "price": 59.99
  },
  {
    "id": 5,
    "title": "UI/UX Design Fundamentals",
    "description": "This course introduces you to the world of UI and UX design. You’ll learn how to create visually appealing interfaces, build wireframes, design prototypes, and conduct user research. By the end, you will design a complete project for your portfolio using modern design tools.",
    "instructor": "Michael Brown",
    "syllabus": [
      "Design Principles",
      "Wireframing",
      "Prototyping",
      "User Testing",
      "Portfolio Project"
    ],
    "price": 69.99
  },
  {
    "id": 6,
    "title": "Next.js & Server Components",
    "description": "Master Next.js and learn how modern web applications are built using server components, API routes, and App Router. This course provides real examples, authentication flow implementation, and deployment strategies. You will build a complete full-stack application and understand how Next.js handles rendering efficiently.",
    "instructor": "Ava Wilson",
    "syllabus": [
      "Next.js Routing",
      "Server Components",
      "API Routes",
      "Authentication",
      "Deployment"
    ],
    "price": 79.99
  },
  {
    "id": 7,
    "title": "Data Structures & Algorithms",
    "description": "This course is designed to strengthen your coding interview skills by explaining data structures and algorithms clearly. You will learn how to solve problems using arrays, linked lists, trees, graphs, and dynamic programming. Practice sessions help you gain confidence for technical interviews.",
    "instructor": "Chris Martinez",
    "syllabus": [
      "Arrays",
      "Linked Lists",
      "Trees & Graphs",
      "Dynamic Programming",
      "Mock Interview"
    ],
    "price": 89.99
  },
  {
    "id": 8,
    "title": "Android Development with Kotlin",
    "description": "Learn how to build Android applications using Kotlin and Android Studio. You’ll understand UI design, navigation, data storage, and API integration. Through hands-on projects, you will create fully functional apps and prepare yourself for publishing to the Google Play Store.",
    "instructor": "Olivia Taylor",
    "syllabus": [
      "Kotlin Basics",
      "UI Components",
      "Room Database",
      "API Calls",
      "Publish App"
    ],
    "price": 89.99
  },
  {
    "id": 9,
    "title": "Machine Learning Fundamentals",
    "description": "Start your machine learning journey with a clear understanding of supervised and unsupervised learning techniques. You’ll explore algorithms, model evaluation, and feature engineering. The course includes hands-on coding exercises to help you build and train your first machine learning models effectively.",
    "instructor": "Daniel Clark",
    "syllabus": [
      "Regression",
      "Classification",
      "Clustering",
      "Model Evaluation",
      "ML Project"
    ],
    "price": 119.99
  },
  {
    "id": 10,
    "title": "AWS Cloud Practitioner",
    "description": "Gain essential cloud knowledge and prepare for the AWS Cloud Practitioner exam. This course explains core AWS services like EC2, S3, Lambda, and IAM through simple examples. You will also learn cloud security and billing concepts, ensuring full readiness for certification.",
    "instructor": "Sophia Miller",
    "syllabus": [
      "Cloud Basics",
      "IAM & S3",
      "EC2 & Lambda",
      "Networking",
      "Mock Exam"
    ],
    "price": 79.99
  },
  {
    "id": 11,
    "title": "JavaScript Zero to Hero",
    "description": "Become confident in JavaScript by learning everything from basics to advanced concepts. You will study variables, functions, objects, asynchronous programming, and DOM manipulation. This course provides real coding challenges to help you apply newly learned concepts and improve problem-solving skills.",
    "instructor": "Ethan Walker",
    "syllabus": [
      "JS Basics",
      "Functions",
      "Async JS",
      "DOM Programming",
      "Project Work"
    ],
    "price": 44.99
  },
  {
    "id": 12,
    "title": "Cybersecurity Essentials",
    "description": "Learn core cybersecurity concepts, ethical hacking techniques, and defense strategies. The course covers networking, vulnerabilities, Linux usage, penetration testing tools, and practical labs. By the end, you will understand how cyberattacks happen and how to secure systems effectively with real-world examples.",
    "instructor": "Liam Harris",
    "syllabus": [
      "Networking Basics",
      "Linux Commands",
      "Vulnerabilities",
      "Pen Testing Tools",
      "CTF Challenges"
    ],
    "price": 129.99
  },
  {
    "id": 13,
    "title": "Database Design & SQL",
    "description": "Understand how modern databases work and learn to design efficient relational structures. You’ll practice SQL queries, joins, functions, and indexing. The course includes a practical project where you design and query a complete database system, building confidence for backend or data jobs.",
    "instructor": "Grace Thompson",
    "syllabus": [
      "ER Diagrams",
      "Normalization",
      "SQL Basics",
      "Advanced Queries",
      "Database Project"
    ],
    "price": 49.99
  },
  {
    "id": 14,
    "title": "iOS App Development with Swift",
    "description": "Learn how to develop iOS apps using Swift, Xcode, and modern Apple frameworks. You’ll build user interfaces, handle data, and integrate APIs. Through structured lessons and projects, you will gain skills needed to publish apps and pursue opportunities in mobile development.",
    "instructor": "Jack Garcia",
    "syllabus": [
      "Swift Basics",
      "UIKit",
      "Data Persistence",
      "Networking",
      "Deployment"
    ],
    "price": 109.99
  },
  {
    "id": 15,
    "title": "Prompt Engineering for AI",
    "description": "Learn the techniques behind effective prompt engineering for large language models like ChatGPT. This course teaches prompt patterns, system instructions, role prompts, and optimization methods. You’ll practice crafting prompts for coding, writing, creative tasks, and automation to improve output quality.",
    "instructor": "Ella Martinez",
    "syllabus": [
      "Prompt Basics",
      "Task Prompts",
      "System Prompts",
      "Prompt Patterns",
      "Hands-on Project"
    ],
    "price": 29.99
  },
  {
    "id": 16,
    "title": "Blockchain & Web3 Development",
    "description": "Understand the fundamentals of blockchain and learn how to build decentralized applications. You’ll write smart contracts using Solidity, interact with Ethereum networks, and use Web3.js. Hands-on projects help you gain practical skills and prepare for real blockchain development roles.",
    "instructor": "Henry Adams",
    "syllabus": [
      "Blockchain Basics",
      "Solidity",
      "Smart Contracts",
      "Web3.js",
      "DApp Project"
    ],
    "price": 149.99
  },
  {
    "id": 17,
    "title": "Graphic Design with Photoshop",
    "description": "Learn how to use Adobe Photoshop to create professional-quality designs. You’ll work with layers, masks, brushes, and typography. The course includes practical editing exercises and branding projects to help you build a creative portfolio for your freelance or design career.",
    "instructor": "Chloe Brooks",
    "syllabus": [
      "Editing Basics",
      "Layers & Masks",
      "Typography",
      "Branding",
      "Portfolio Creation"
    ],
    "price": 39.99
  },
  {
    "id": 18,
    "title": "Video Editing with Premiere Pro",
    "description": "Master Adobe Premiere Pro and learn how to edit videos professionally. This course covers cutting, transitions, color correction, audio design, and rendering. With step-by-step lessons and practice files, you’ll develop the skills needed to create polished video content for any platform.",
    "instructor": "Lucas Young",
    "syllabus": [
      "Timeline Editing",
      "Transitions",
      "Color Grading",
      "Audio Mixing",
      "Rendering"
    ],
    "price": 54.99
  },
  {
    "id": 19,
    "title": "Excel for Data Analysis",
    "description": "Learn to use Microsoft Excel for real-world data analysis tasks. You’ll practice formulas, functions, pivot tables, charts, and automation techniques. This course provides hands-on exercises designed to help students analyze data effectively and present insights clearly for business reporting.",
    "instructor": "Natalie Perez",
    "syllabus": [
      "Excel Basics",
      "Formulas",
      "Pivot Tables",
      "Charts",
      "Project Work"
    ],
    "price": 24.99
  },
  {
    "id": 20,
    "title": "Project Management with Agile",
    "description": "Learn Agile methodologies, Scrum processes, user stories, sprint planning, and Kanban workflows. This course prepares you for real project environments by guiding you through practical exercises and case studies. You will understand how Agile teams work and how projects are delivered effectively.",
    "instructor": "Benjamin Rivera",
    "syllabus": [
      "Agile Basics",
      "Scrum Framework",
      "User Stories",
      "Sprint Planning",
      "Case Study"
    ],
    "price": 64.99
  }
]