// constants/index.ts

export const navLinks = [
  {
    id: 1,
    title: "Features",
    href: "#features",
  },
  {
    id: 2,
    title: "About Us",
    href: "#about",
  },
  {
    id: 3,
    title: "Pricing",
    href: "#pricing",
  },
  {
    id: 4,
    title: "FAQ",
    href: "#faq",
  },
];

export const features = [
  {
    title: "Smart Working Day Rules",
    description:
      "Automatically handles weekends, NZ public holidays, Christmas exclusions, and regional anniversary days.",
    icon: "Calendar",
    color: "#0B7A6E",
  },
  {
    title: "Region-Aware Calculator",
    description:
      "Detects regional anniversary days from property and business addresses across New Zealand.",
    icon: "MapPinned",
    color: "#C8922A",
  },
  {
    title: "Property & Business S&P",
    description:
      "Supports both Property and Business Sale & Purchase agreements under ADLS/REINZ frameworks.",
    icon: "Building2",
    color: "#112240",
  },
  {
    title: "Full Calculation Workings",
    description:
      "Every calculated date includes detailed workings for verification and legal confidence.",
    icon: "FileSearch",
    color: "#0FA394",
  },
  {
    title: "Print-Ready Output",
    description:
      "Generate clean professional outputs suitable for file notes and client communication.",
    icon: "Printer",
    color: "#E8B04A",
  },
  {
    title: "Secure & Private",
    description:
      "Calculation inputs remain private and session-based with secure authentication.",
    icon: "ShieldCheck",
    color: "#0C1A30",
  },
];

export const pricingPlans = [
  {
    title: "Free Trial",
    price: "Free",
    duration: "1 Month",
    description: "Full access. No credit card required.",
    features: [
      "Unlimited calculations",
      "Property & Business S&P support",
      "All NZ regional anniversary days",
      "Full calculation workings",
      "Print-ready exports",
    ],
    buttonText: "Start Free Trial",
    highlighted: false,
  },
  {
    title: "Subscriber",
    price: "$40",
    duration: "/month",
    description: "Professional access for ongoing use.",
    features: [
      "Unlimited calculations",
      "Calculation history",
      "PDF export",
      "Priority support",
      "Future updates included",
    ],
    buttonText: "Subscribe Now",
    highlighted: true,
  },
];

export const stats = [
  {
    value: "16+",
    label: "NZ Regions Supported",
  },
  {
    value: "100%",
    label: "Mobile Responsive",
  },
  {
    value: "2022",
    label: "ADLS/REINZ Edition",
  },
  {
    value: "24/7",
    label: "Cloud Access",
  },
];

export const faqs = [
  {
    question: "How does the free trial work?",
    answer:
      "Every account receives a full 1-month free trial with unlimited access and no credit card required.",
  },
  {
    question: "What happens after the trial ends?",
    answer:
      "You can subscribe for $40 NZD/month to continue using the calculator and premium features.",
  },
  {
    question: "Does DateWise NZ™ support regional anniversary days?",
    answer:
      "Yes. All 16 New Zealand regions and anniversary day rules are supported automatically.",
  },
  {
    question: "Can I print calculation results?",
    answer:
      "Yes. Every calculation includes print-ready formatting for legal and professional use.",
  },
];

export const footerLinks = [
  "Privacy Policy",
  "Terms of Use",
  "Copyright",
  "Contact",
];