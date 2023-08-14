interface BlogPost {
  id: number;
  header: string;
  subHeader: string;
  content: string;
  author: string;
  imagePath: string;
  date: string;
}




const dummyBlogData: BlogPost[] = [
  {
    id: 1,
    header: " Unleashing the Power of Cloud Hosting",
    subHeader: "A Digital Transformation Journey with PixelHost",
    content:
      "",
    author: "John Doe",
    imagePath: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    date: "03-May-2023"
  },
  {
    id: 2,
    header: "Mastering React Hooks",
    subHeader: "Exploring the power and versatility of React hooks",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.",
    author: "Jane Smith",
    imagePath: "https://images.pexels.com/photos/9553909/pexels-photo-9553909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    date: "03-May-2023"
  },
  {
    id: 3,
    header: "Responsive Web Design Best Practices",
    subHeader: "Designing websites that look great on all devices",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.",
    author: "Michael Johnson",
    imagePath: "https://images.pexels.com/photos/11813187/pexels-photo-11813187.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    date: "03-May-2023"
  },
  {
    id: 4,
    header: "Introduction to GraphQL",
    subHeader: "Learn the basics of GraphQL and its advantages",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.",
    author: "Emily Davis",
    imagePath: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    date: "03-May-2023"
  },
  {
    id: 5,
    header: "Creating Dynamic UIs with React",
    subHeader: "Build interactive and engaging user interfaces with React",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.",
    author: "David Brown",
    imagePath: "https://images.pexels.com/photos/273230/pexels-photo-273230.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    date: "03-May-2023"
  },
  {
    id: 6,
    header: "Optimizing Website Performance",
    subHeader: "Tips and techniques for improving website speed",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.",
    author: "Olivia White",
    imagePath: "https://images.pexels.com/photos/414860/pexels-photo-414860.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    date: "03-May-2023"
  },
  {
    id: 7,
    header: "Securing Your Web Applications",
    subHeader: "Best practices for enhancing the security of web apps",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.",
    author: "William Green",
    imagePath: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    date: "03-May-2023"
  },
  {
    id: 8,
    header: "The Art of Front-End Design",
    subHeader: "Exploring the principles of effective front-end design",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.",
    author: "Sophia Rodriguez",
    imagePath: "https://images.pexels.com/photos/11035371/pexels-photo-11035371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    date: "03-May-2023"
  },
  {
    id: 9,
    header: "Node.js and Express for Back-End Development",
    subHeader: "Building robust back-end applications using Node.js and Express",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.",
    author: "Daniel Wilson",
    imagePath: "https://images.pexels.com/photos/1261427/pexels-photo-1261427.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    date: "03-May-2023"
  },
  {
    id: 10,
    header: "Exploring the World of Docker",
    subHeader: "Understanding containerization and Docker in modern development",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.",
    author: "Isabella Lee",
    imagePath: "https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    date: "03-May-2023"
  },
  {
    id: 11,
    header: "UI/UX Design Principles for Web Development",
    subHeader: "Creating intuitive and user-friendly web experiences",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.",
    author: "Nathan Turner",
    imagePath: "https://images.pexels.com/photos/3471423/pexels-photo-3471423.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    date: "03-May-2023"
  },
  {
    id: 12,
    header: "Building Modern APIs with GraphQL",
    subHeader: "Developing efficient APIs using GraphQL technology",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.",
    author: "Ella Martinez",
    imagePath: "https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    date: "03-May-2023"
  },
  {
    id: 13,
    header: "Responsive Design for Mobile-First Experiences",
    subHeader: "Crafting mobile-friendly websites with responsive design",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.",
    author: "Liam Carter",
    imagePath: "https://images.pexels.com/photos/17586836/pexels-photo-17586836/free-photo-of-smartphone-blank-screen-mockup.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    date: "03-May-2023"
  },
  {
    id: 14,
    header: "Navigating Web Accessibility Guidelines",
    subHeader: "Ensuring inclusivity through accessible web design",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.",
    author: "Ava Walker",
    imagePath: "https://images.pexels.com/photos/4027658/pexels-photo-4027658.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    date: "03-May-2023"
  },
  {
    id: 15,
    header: "Database Design and Optimization",
    subHeader: "Structuring and enhancing databases for efficient performance",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.",
    author: "Lucas Anderson",
    imagePath: "https://images.pexels.com/photos/17489155/pexels-photo-17489155/free-photo-of-computer-server-in-data-center-room.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    date: "03-May-2023"
  },
  {
    id: 16,
    header: "Effective Testing Strategies for Web Applications",
    subHeader: "Implementing test-driven development and automated testing",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.",
    author: "Emma Reed",
    imagePath: "https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    date: "03-May-2023"
  },
  {
    id: 17,
    header: "Advanced CSS Techniques and Animation",
    subHeader: "Creating stunning visuals with CSS animations and transitions",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.",
    author: "Liam Turner",
    imagePath: "https://images.pexels.com/photos/256502/pexels-photo-256502.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    date: "03-May-2023"
  },
  {
    id: 18,
    header: "Serverless Architecture and Cloud Functions",
    subHeader: "Exploring serverless computing and cloud function deployment",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.",
    author: "Mia Stewart",
    imagePath: "https://images.pexels.com/photos/5475763/pexels-photo-5475763.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    date: "03-May-2023"
  },
  {
    id: 19,
    header: "JavaScript Frameworks Comparison",
    subHeader: "A comprehensive analysis of popular JavaScript frameworks",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.",
    author: "Oliver Lewis",
    imagePath: "https://images.pexels.com/photos/11035366/pexels-photo-11035366.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    date: "03-May-2023"
  },
  {
    id: 20,
    header: "DevOps and Continuous Integration",
    subHeader: "Implementing DevOps practices and CI/CD pipelines",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.",
    author: "Sophia Turner",
    imagePath: "https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    date: "03-May-2023"
  },
    {
    id: 21,
    header: "Web hosting in 2023",
    subHeader: "Implementing test-driven development and automated testing",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.",
    author: "Sophia Turner",
    imagePath: "https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=600",
    date: "03-May-2023"
  },
];

export default dummyBlogData;
