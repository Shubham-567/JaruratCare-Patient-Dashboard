import { Sparkles, ShieldCheck, LayoutDashboard, Activity } from "lucide-react";

export const features = [
  {
    title: "AI-Powered Insights",
    description:
      "Automatically highlight critical patient data, potential risks, and follow-up reminders. Let our AI assist in proactive care.",
    icon: <Sparkles className='size-6 text-primary' />,
  },
  {
    title: "Bank-Grade Security",
    description:
      "Your data is encrypted end-to-end, ensuring compliance and peace of mind.",
    icon: <ShieldCheck className='size-6 text-primary' />,
  },
  {
    title: "Customizable Views",
    description:
      "Tailor the dashboard to your needs. Prioritize what's most important for your workflow.",
    icon: <LayoutDashboard className='size-6 text-primary' />,
  },
  {
    title: "Real-Time Analytics",
    description:
      "Monitor patient vitals and trends with our live, easy-to-read charts and graphs. Gain insights to optimize care.",
    icon: <Activity className='size-6 text-primary' />,
  },
];

export const patientsData = [
  {
    id: 1,
    name: "Aarav Sharma",
    age: 45,
    gender: "Male",
    contact: "+91 98765 43210",
    email: "aarav.sharma@gmail.com",
    address: { street: "123 MG Road", city: "Mumbai", pinCode: "400001" },
    medicalHistory: {
      lastVisit: "15/10/2023",
      conditions: ["Hypertension", "Type 2 Diabetes"],
      allergies: ["Penicillin"],
    },
    avatarUrl: "https://picsum.photos/seed/aarav/200",
  },
  {
    id: 2,
    name: "Priya Patel",
    age: 32,
    gender: "Female",
    contact: "+91 87654 32109",
    email: "priya.patel@gmail.com",
    address: { street: "456 Park Street", city: "Delhi", pinCode: "110001" },
    medicalHistory: {
      lastVisit: "20/01/2024",
      conditions: ["Asthma"],
      allergies: ["Pollen", "Dust Mites"],
    },
    avatarUrl: "https://picsum.photos/seed/priya/200",
  },
  {
    id: 3,
    name: "Rohan Singh",
    age: 58,
    gender: "Male",
    contact: "+91 76543 21098",
    email: "rohan.singh@gmail.com",
    address: { street: "789 Lake View", city: "Bangalore", pinCode: "560001" },
    medicalHistory: {
      lastVisit: "05/11/2023",
      conditions: ["Arthritis"],
      allergies: [],
    },
    avatarUrl: "https://picsum.photos/seed/rohan/200",
  },
  {
    id: 4,
    name: "Saanvi Gupta",
    age: 28,
    gender: "Female",
    contact: "+91 65432 10987",
    email: "saanvi.gupta@gmail.com",
    address: { street: "101 River Side", city: "Kolkata", pinCode: "700001" },
    medicalHistory: {
      lastVisit: "10/02/2024",
      conditions: ["Migraine"],
      allergies: ["Shellfish"],
    },
    avatarUrl: "https://picsum.photos/seed/saanvi/200",
  },
  {
    id: 5,
    name: "Arjun Reddy",
    age: 65,
    gender: "Male",
    contact: "+91 54321 09876",
    email: "arjun.reddy@gmail.com",
    address: { street: "212 Hill Top", city: "Hyderabad", pinCode: "500001" },
    medicalHistory: {
      lastVisit: "22/12/2023",
      conditions: ["Coronary Artery Disease"],
      allergies: ["Aspirin"],
    },
    avatarUrl: "https://picsum.photos/seed/arjun/200",
  },
  {
    id: 6,
    name: "Diya Mehta",
    age: 21,
    gender: "Female",
    contact: "+91 43210 98765",
    email: "diya.mehta@gmail.com",
    address: { street: "313 Ocean Drive", city: "Chennai", pinCode: "600001" },
    medicalHistory: {
      lastVisit: "01/03/2024",
      conditions: [],
      allergies: ["Peanuts"],
    },
    avatarUrl: "https://picsum.photos/seed/diya/200",
  },
  {
    id: 7,
    name: "Vihaan Kumar",
    age: 38,
    gender: "Male",
    contact: "+91 32109 87654",
    email: "vihaan.kumar@gmail.com",
    address: { street: "414 Valley Road", city: "Pune", pinCode: "411001" },
    medicalHistory: {
      lastVisit: "30/09/2023",
      conditions: ["Hypothyroidism"],
      allergies: [],
    },
    avatarUrl: "https://picsum.photos/seed/vihaan/200",
  },
  {
    id: 8,
    name: "Ananya Joshi",
    age: 49,
    gender: "Female",
    contact: "+91 21098 76543",
    email: "ananya.joshi@gmail.com",
    address: {
      street: "515 Garden Lane",
      city: "Ahmedabad",
      pinCode: "380001",
    },
    medicalHistory: {
      lastVisit: "05/01/2024",
      conditions: ["Osteoporosis"],
      allergies: ["Sulfa drugs"],
    },
    avatarUrl: "https://picsum.photos/seed/ananya/200",
  },
];
