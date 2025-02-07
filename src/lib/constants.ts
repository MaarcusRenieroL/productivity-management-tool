import type { SidebarItemsType } from "./types";
import { Icons } from "@/components/icons";

export const SIDEBAR_ITEMS: SidebarItemsType[] = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: Icons.dashboard,
  },
  {
    title: "Tasks",
    href: "/dashboard/tasks",
    icon: Icons.tasks,
  },
  {
    title: "Projects",
    href: "/dashboard/projects",
    icon: Icons.projects,
  },
  {
    title: "Team Members",
    href: "/dashboard/team-members",
    icon: Icons.teams,
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: Icons.settings,
  },
];

export const data = [
  {
    id: "1",
    title: "Design Homepage",
    description: "Create the initial design for the new homepage layout.",
    status: "In Progress",
    priority: "High",
    dueDate: "2024-06-25",
  },
  {
    id: "2",
    title: "Database Backup",
    description: "Perform a full backup of the production database.",
    status: "Pending",
    priority: "Medium",
    dueDate: "2024-06-20",
  },
  {
    id: "3",
    title: "User Feedback Review",
    description: "Review user feedback from the recent product launch.",
    status: "Completed",
    priority: "Low",
    dueDate: "2024-06-18",
  },
  {
    id: "4",
    title: "Marketing Campaign Plan",
    description: "Develop a plan for the upcoming marketing campaign.",
    status: "In Progress",
    priority: "High",
    dueDate: "2024-07-01",
  },
  {
    id: "5",
    title: "Code Refactoring",
    description:
      "Refactor the codebase to improve maintainability and performance.",
    status: "Pending",
    priority: "Medium",
    dueDate: "2024-06-30",
  },
];

export const PROJECT_LIST = [
  {
    id: "1",
    title: "E-commerce Platform Upgrade",
    description:
      "Upgrade the e-commerce platform to support new payment methods and enhance security features.",
    scheduledTaskCount: 9,
    ongoingTaskCount: 3,
    completedTaskCount: 11,
    teamMembers: ["Alice Johnson", "Bob Smith", "Charlie Brown", "David White"],
  },
  {
    id: "2",
    title: "AI Chatbot Integration",
    description:
      "Integrate an AI chatbot into the customer service system to handle common inquiries and improve response times.",
    scheduledTaskCount: 7,
    ongoingTaskCount: 4,
    completedTaskCount: 10,
    teamMembers: ["Eva Green", "George Martinez", "Hannah Lee", "Ian Thompson"],
  },
  {
    id: "3",
    title: "Cloud Migration",
    description:
      "Migrate company data and applications to a cloud-based infrastructure to improve scalability and reduce costs.",
    scheduledTaskCount: 12,
    ongoingTaskCount: 5,
    completedTaskCount: 8,
    teamMembers: ["Jack Wilson", "Karen Davis", "Liam Taylor"],
  },
  {
    id: "4",

    title: "New Product Development",
    description:
      "Develop and launch a new product line focusing on sustainability and eco-friendly materials.",
    scheduledTaskCount: 15,
    ongoingTaskCount: 6,
    completedTaskCount: 14,
    teamMembers: ["Mia Anderson", "Noah Harris", "Olivia Moore", "Paul Walker"],
  },
  {
    id: "5",
    title: "Cybersecurity Initiative",
    description:
      "Implement a comprehensive cybersecurity program to protect against potential threats and vulnerabilities.",
    scheduledTaskCount: 5,
    ongoingTaskCount: 3,
    completedTaskCount: 7,
    teamMembers: ["Quinn Adams", "Rachel Lewis", "Samuel Clark"],
  },
  {
    id: "6",
    title: "Mobile App Redesign",
    description:
      "Redesign the mobile app interface to improve user experience and add new features requested by users.",
    scheduledTaskCount: 10,
    ongoingTaskCount: 4,
    completedTaskCount: 12,
    teamMembers: [
      "Tina Robinson",
      "Umar Khan",
      "Victoria Peterson",
      "William Bell",
    ],
  },
  {
    id: "7",
    title: "Global Expansion Strategy",
    description:
      "Develop a strategy for expanding business operations into new international markets.",
    scheduledTaskCount: 8,
    ongoingTaskCount: 2,
    completedTaskCount: 5,
    teamMembers: ["Xander Reed", "Yvonne Collins", "Zara Mitchell"],
  },
  {
    id: "8",
    title: "Internal Software Update",
    description:
      "Update internal software tools to the latest versions to enhance performance and security.",
    scheduledTaskCount: 6,
    ongoingTaskCount: 3,
    completedTaskCount: 9,
    teamMembers: ["Alice Johnson", "Bob Smith", "Charlie Brown"],
  },
  {
    id: "9",
    title: "Sustainability Program",
    description:
      "Launch a company-wide sustainability program aimed at reducing waste and improving energy efficiency.",
    scheduledTaskCount: 7,
    ongoingTaskCount: 5,
    completedTaskCount: 10,
    teamMembers: ["David White", "Eva Green", "George Martinez", "Hannah Lee"],
  },
  {
    id: "10",
    title: "Employee Wellness Initiative",
    description:
      "Introduce a wellness initiative to promote health and well-being among employees.",
    scheduledTaskCount: 4,
    ongoingTaskCount: 2,
    completedTaskCount: 6,
    teamMembers: ["Ian Thompson", "Jack Wilson", "Karen Davis", "Liam Taylor"],
  },
  {
    id: "11",
    title: "Customer Experience Enhancement",
    description:
      "Enhance the overall customer experience by streamlining processes and introducing new support channels.",
    scheduledTaskCount: 9,
    ongoingTaskCount: 4,
    completedTaskCount: 11,
    teamMembers: ["Mia Anderson", "Noah Harris", "Olivia Moore"],
  },
  {
    id: "12",
    title: "Digital Marketing Optimization",
    description:
      "Optimize digital marketing strategies to increase engagement and conversion rates across all platforms.",
    scheduledTaskCount: 10,
    ongoingTaskCount: 5,
    completedTaskCount: 13,
    teamMembers: ["Paul Walker", "Quinn Adams", "Rachel Lewis", "Samuel Clark"],
  },
  {
    id: "13",
    title: "Training Program Development",
    description:
      "Develop a comprehensive training program for new hires to ensure they are fully equipped to perform their roles.",
    scheduledTaskCount: 6,
    ongoingTaskCount: 3,
    completedTaskCount: 8,
    teamMembers: ["Tina Robinson", "Umar Khan", "Victoria Peterson"],
  },
  {
    id: "14",
    title: "Website Accessibility Improvements",
    description:
      "Improve website accessibility to meet compliance standards and provide a better experience for all users.",
    scheduledTaskCount: 8,
    ongoingTaskCount: 4,
    completedTaskCount: 10,
    teamMembers: [
      "William Bell",
      "Xander Reed",
      "Yvonne Collins",
      "Zara Mitchell",
    ],
  },
  {
    id: "15",
    title: "Inventory Management System",
    description:
      "Implement a new inventory management system to streamline tracking and reduce stock discrepancies.",
    scheduledTaskCount: 7,
    ongoingTaskCount: 3,
    completedTaskCount: 9,
    teamMembers: ["Alice Johnson", "Bob Smith", "Charlie Brown", "David White"],
  },
  {
    id: "16",
    title: "Data Analytics Upgrade",
    description:
      "Upgrade data analytics tools to improve insights and support better decision-making.",
    scheduledTaskCount: 5,
    ongoingTaskCount: 2,
    completedTaskCount: 7,
    teamMembers: ["Eva Green", "George Martinez", "Hannah Lee"],
  },
  {
    id: "17",
    title: "Customer Loyalty Program",
    description:
      "Create a customer loyalty program to reward repeat business and increase customer retention.",
    scheduledTaskCount: 9,
    ongoingTaskCount: 4,
    completedTaskCount: 12,
    teamMembers: ["Ian Thompson", "Jack Wilson", "Karen Davis"],
  },
  {
    id: "18",
    title: "Operational Efficiency Project",
    description:
      "Identify and implement changes to improve operational efficiency and reduce costs.",
    scheduledTaskCount: 6,
    ongoingTaskCount: 3,
    completedTaskCount: 8,
    teamMembers: ["Liam Taylor", "Mia Anderson", "Noah Harris", "Olivia Moore"],
  },
  {
    id: "19",
    title: "Social Media Strategy",
    description:
      "Develop and implement a social media strategy to increase brand awareness and engagement.",
    scheduledTaskCount: 8,
    ongoingTaskCount: 5,
    completedTaskCount: 11,
    teamMembers: ["Paul Walker", "Quinn Adams", "Rachel Lewis", "Samuel Clark"],
  },
];

export const teamMembers = [
  {
    id: "1",
    firstName: "Alice",
    lastName: "Johnson",
    role: "Software Engineer",
    email: "alice.johnson@example.com",
    phone: "+1234567890",
  },
  {
    id: "2",
    firstName: "Bob",
    lastName: "Smith",
    role: "Project Manager",
    email: "bob.smith@example.com",
    phone: "+0987654321",
  },
  {
    id: "3",
    firstName: "Charlie",
    lastName: "Brown",
    role: "UI/UX Designer",
    email: "charlie.brown@example.com",
    phone: "+1231231234",
  },
  {
    id: "4",
    firstName: "David",
    lastName: "White",
    role: "DevOps Engineer",
    email: "david.white@example.com",
    phone: "+3213213210",
  },
  {
    id: "5",
    firstName: "Eva",
    lastName: "Green",
    role: "Marketing Specialist",
    email: "eva.green@example.com",
    phone: "+4564564567",
  },
  {
    id: "6",
    firstName: "George",
    lastName: "Martinez",
    role: "QA Engineer",
    email: "george.martinez@example.com",
    phone: "+6546546543",
  },
  {
    id: "7",
    firstName: "Hannah",
    lastName: "Lee",
    role: "Business Analyst",
    email: "hannah.lee@example.com",
    phone: "+7897897890",
  },
  {
    id: "8",
    firstName: "Ian",
    lastName: "Thompson",
    role: "Product Owner",
    email: "ian.thompson@example.com",
    phone: "+9879879876",
  },
  {
    id: "9",
    firstName: "Jack",
    lastName: "Wilson",
    role: "Sales Manager",
    email: "jack.wilson@example.com",
    phone: "+3216549870",
  },
  {
    id: "10",
    firstName: "Karen",
    lastName: "Davis",
    role: "HR Specialist",
    email: "karen.davis@example.com",
    phone: "+6543210987",
  },
  {
    id: "11",
    firstName: "Liam",
    lastName: "Taylor",
    role: "Customer Support Lead",
    email: "liam.taylor@example.com",
    phone: "+1230984567",
  },
  {
    id: "12",
    firstName: "Mia",
    lastName: "Anderson",
    role: "Content Strategist",
    email: "mia.anderson@example.com",
    phone: "+4561237890",
  },
  {
    id: "13",
    firstName: "Noah",
    lastName: "Harris",
    role: "Data Scientist",
    email: "noah.harris@example.com",
    phone: "+7891236540",
  },
  {
    id: "14",
    firstName: "Olivia",
    lastName: "Moore",
    role: "Technical Writer",
    email: "olivia.moore@example.com",
    phone: "+3214567890",
  },
  {
    id: "15",
    firstName: "Paul",
    lastName: "Walker",
    role: "Financial Analyst",
    email: "paul.walker@example.com",
    phone: "+6547893210",
  },
  {
    id: "16",
    firstName: "Quinn",
    lastName: "Adams",
    role: "IT Support Specialist",
    email: "quinn.adams@example.com",
    phone: "+9876543210",
  },
  {
    id: "17",
    firstName: "Rachel",
    lastName: "Lewis",
    role: "HR Generalist",
    email: "rachel.lewis@example.com",
    phone: "+1236549870",
  },
  {
    id: "18",
    firstName: "Samuel",
    lastName: "Clark",
    role: "Operations Manager",
    email: "samuel.clark@example.com",
    phone: "+4567891230",
  },
  {
    id: "19",
    firstName: "Tina",
    lastName: "Robinson",
    role: "Supply Chain Analyst",
    email: "tina.robinson@example.com",
    phone: "+7894561230",
  },
  {
    id: "20",
    firstName: "Umar",
    lastName: "Khan",
    role: "Systems Architect",
    email: "umar.khan@example.com",
    phone: "+3217894560",
  },
];

export const MY_TASKS = [
  {
    id: "1",
    title: "Design Homepage",
    description: "Create the initial design for the new homepage layout.",
    status: "In Progress",
    priority: "High",
    dueDate: "2024-06-25",
  },
  {
    id: "2",
    title: "Database Backup",
    description: "Perform a full backup of the production database.",
    status: "Pending",
    priority: "Medium",
    dueDate: "2024-06-20",
  },
  {
    id: "3",
    title: "User Feedback Review",
    description: "Review user feedback from the recent product launch.",
    status: "Completed",
    priority: "Low",
    dueDate: "2024-06-18",
  },
  {
    id: "4",
    title: "Marketing Campaign Plan",
    description: "Develop a plan for the upcoming marketing campaign.",
    status: "In Progress",
    priority: "High",
    dueDate: "2024-07-01",
  },
  {
    id: "5",
    title: "Code Refactoring",
    description:
      "Refactor the codebase to improve maintainability and performance.",
    status: "Pending",
    priority: "Medium",
    dueDate: "2024-06-30",
  },
];

export const NAVBAR_ITEMS: SidebarItemsType[] = [
  {
    title: "Home",
    href: "/",
    icon: Icons.home,
  },
  {
    title: "About",
    href: "#about",
    icon: Icons.about,
  },
  {
    title: "Features",
    href: "#features",
    icon: Icons.features,
  },
  {
    title: "Get Started",
    href: "#get-started",
    icon: Icons.getStarted,
  },
];
