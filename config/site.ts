export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Portafolio de Chikiza",
  description: "Creado con NextUI.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Proyectos",
      href: "/proyectos",
    },
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Team",
      href: "/team",
    },
    {
      label: "Calendar",
      href: "/calendar",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    github: "https://github.com/chikiza",
    linkedin: "https://www.linkedin.com/in/chikiza/",
    discord: "https://discord.gg/WN8W6bGT",
    patreon: "https://patreon.com/chikizalab?utm_medium=unknown&utm_source=join_link&utm_campaign=creatorshare_creator&utm_content=copyLink",
  },
};
