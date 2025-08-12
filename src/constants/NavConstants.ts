export const NAV_LINKS = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Services",
    href: "",
    services: [
      {
        category: "Consulting",
        serviceItems: [
          { name: "Business Strategy", href: "/" },
          { name: "Technology Consulting", href: "/" },
          { name: "Project Management", href: "/" },
          { name: "Career Consulting", href: "/" },
          { name: "Student Consulting", href: "/" },
        ],
      },
      {
        category: "Digital Marketing",
        serviceItems: [
          { name: "SEO Optimization", href: "/" },
          { name: "Social Media Marketing", href: "/" },
          { name: "Email Marketing", href: "/" },
        ],
      },
      {
        category: "Web Development",
        serviceItems: [
          { name: "Frontend Development", href: "/" },
          { name: "Backend Development", href: "/" },
          { name: "E-commerce Solutions", href: "/" },
        ],
      },
      {
        category: "UI/ UX Design",
        serviceItems: [
          { name: "Graphics Design", href: "/" },
          { name: "Branding", href: "/" }, // removed duplicate Graphics Design
        ],
      },
    ],
  },
  {
    name: "Portfolio",
    href: "/portfolio",
  },
  {
    name: "Blog",
    href: "/blog",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];
